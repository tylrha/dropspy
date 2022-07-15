import mongoose, { Schema, Document } from "mongoose";
import { readJson } from '../../libraries/utils'

const APP_CONFIGS = readJson('/configs/app-configs.json')
const _database_base_url = APP_CONFIGS['database_configs'].database_baseurl
const _database_username = APP_CONFIGS['database_configs'].database_username
const _database_password = APP_CONFIGS['database_configs'].database_password
const DATABASE_LOGIN_URL = `mongodb+srv://${_database_username}:${_database_password}@${_database_base_url}`
const LOGGER_DATABASE = "DROPSPY"
const DATABASE_MONGOOSE = `${DATABASE_LOGIN_URL}/${LOGGER_DATABASE}`
const LOGGER_COLLECTION = "_logger"
const LOGGER_DOCUMENT = { file: "dropspy" }

interface ILoggerMongo extends Document {
  file: string,
  logger: string[]
}

const loggerSchema: Schema = new Schema(
  {
    file: String,
    logger: [String],
  },
  {
    versionKey: false,
    collection: LOGGER_COLLECTION
  }
)

const LoggerModel = mongoose.model<ILoggerMongo>(LOGGER_COLLECTION, loggerSchema)

export default async function mongodbLogger(message: string) {

  console.log(DATABASE_MONGOOSE)
  await mongoose.connect(DATABASE_MONGOOSE)

  let oldLoggerMongoObj = await LoggerModel.findOne(LOGGER_DOCUMENT)
  let finalMongoObj: ILoggerMongo;

  if (!oldLoggerMongoObj) {
    const tmpProductObj = {
      ...LOGGER_DOCUMENT,
      logger: [message]
    }
    finalMongoObj = new LoggerModel(tmpProductObj)
  } else {
    oldLoggerMongoObj.logger = [message, ...oldLoggerMongoObj.logger]
    finalMongoObj = oldLoggerMongoObj
  }

  await finalMongoObj.save()
  await mongoose.connection.close()

}
