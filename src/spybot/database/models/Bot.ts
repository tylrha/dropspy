import mongoose, { Schema, Document } from 'mongoose'
import { LOGGER, DATABASE_COLLECTION_BOTS } from '../../../../configs/configs'

/* -------------------------------------------------------------------------- */

interface IBotMongo extends Document {
  botNumber: string,
  status: string,
  version: string,
  alihunterAuth: string,
  cpuUsage: string,
  memoryUsage: string,
  loopInterval: number,
  lastSetupDateTime: string,
  lastCheckDateTime: string,
  lastSaleDateTime: string
  totalStores: number,
  spyedStores: string[]
}

type IBot = Omit<IBotMongo, '_id' | '__v'>
type IBotUnion = IBot | IBotMongo

const botSchema: Schema = new Schema(
  {
    botNumber: String,
    status: String,
    version: String,
    alihunterAuth: String,
    cpuUsage: String,
    memoryUsage: String,
    loopInterval: Number,
    lastSetupDateTime: String,
    lastCheckDateTime: String,
    lastSaleDateTime: String,
    totalStores: Number,
    spyedStores: [String]
  },
  {
    versionKey: false
  }
)

const Bot = mongoose.model<IBotMongo>(DATABASE_COLLECTION_BOTS, botSchema)

/* -------------------------------------------------------------------------- */

async function getBotsFromDatabase(userQuery: any): Promise<IBotMongo[]>{

  LOGGER(`Obtendo bots: ${JSON.stringify(userQuery)}`, {from: "DTBASE", pid: true})

  try{
    const botObject = await Bot.find(userQuery)
    return botObject
  } catch(e){
    LOGGER(`${e.message}`, {from: "DTBASE", pid: true, isError: true})
    return null
  }
}

async function getBotFromDatabase(userQuery: any): Promise<IBotMongo>{

  LOGGER(`Obtendo bot: ${JSON.stringify(userQuery)}`, {from: "DTBASE", pid: true})

  try{
    const botObject = await Bot.findOne(userQuery)
    return botObject
  } catch(e){
    LOGGER(`${e.message}`, {from: "DTBASE", pid: true, isError: true})
    return null
  }

}

export {
  IBotMongo,
  IBot,
  IBotUnion,
  botSchema,
  Bot,

  getBotsFromDatabase,
  getBotFromDatabase
}

/* -------------------------------------------------------------------------- */
