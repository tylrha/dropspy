import mongoose, { Schema, Document } from 'mongoose'
import { DATABASE_COLLECTION_STORES_BY_DATES, LOGGER } from '../../../../configs/configs'
import { getIsoDateFromString } from '../../../../utils/libraries/dates'

/* -------------------------------------------------------------------------- */

interface IStoreDateProduct {
  productName: string,
  productLink: string,
  sales: number,
  revenue: number
}

const storeDateProductSchema: Schema = new Schema(
  {
    productName: String,
    productLink: String,
    sales: Number,
    revenue: Number
  },
  {
    versionKey: false,
    _id: false
  }
)

/* -------------------------------------------------------------------------- */

interface IStoreDateMongo extends Document{
  storeLink: string,
  date: string,
  isoDate: string,
  totalSales: number,
  totalRevenue: number,
  totalProducts: number,
  products: IStoreDateProduct[]
}

type IStoreDate = Omit<IStoreDateMongo, '_id' | '__v'>
type IStoreDateUnion = IStoreDate | IStoreDateMongo

const storeDateSchema: Schema = new Schema(
  {
    storeLink: String,
    date: String,
    isoDate: String,
    totalSales: Number,
    totalRevenue: Number,
    totalProducts: Number,
    products: [storeDateProductSchema]
  },
  {
    versionKey: false,
    collection: DATABASE_COLLECTION_STORES_BY_DATES
  }
)
const StoreDate = mongoose.model<IStoreDateMongo>(DATABASE_COLLECTION_STORES_BY_DATES, storeDateSchema, DATABASE_COLLECTION_STORES_BY_DATES)

/* -------------------------------------------------------------------------- */

function generateNewStoreDate(storeDateObj: any): IStoreDateMongo{
  LOGGER(`Gerando objeto de sotre-date [${storeDateObj.date} - ${storeDateObj.storeLink}]`, {from: "DTBASE", pid: true})

  let finalStoreDate = {
    storeLink: storeDateObj.storeLink,
    date: storeDateObj.date,
    isoDate: getIsoDateFromString(storeDateObj.date),
    totalSales: 0,
    totalRevenue: 0,
    totalProducts: 0,
    products: []
  }

  return new StoreDate(finalStoreDate)
}

async function getProductStoreDatesDocs(productLink: string){
  return await StoreDate.find({products: { $elemMatch: {productLink: productLink}}})
}

async function getUniqueStoresFromStoreDates(){
  return await StoreDate.find().distinct('storeLink')
}

async function getUniqueDatesFromStoreDates(){
  return await StoreDate.find().distinct('date')
}

async function getStoreDatesFromDatabase(storeDatesQuery: any): Promise<IStoreDateMongo[]>{

  try{
    LOGGER(`Obtendo loja-datas`, {from: "DTBASE", pid: true})
    return await StoreDate.find(storeDatesQuery)
  } catch(e){
    LOGGER(`ERRO: ${e.message}`, {from: "DTBASE", pid: true})
    return null
  }

}

async function getStoreDateFromDatabase(storeDatesQuery: any): Promise<IStoreDateMongo>{

  try{
    LOGGER(`Obtendo loja-datas`, {from: "DTBASE", pid: true})
    return await StoreDate.findOne(storeDatesQuery)
  } catch(e){
    LOGGER(`ERRO: ${e.message}`, {from: "DTBASE", pid: true})
    return null
  }

}


async function saveStoreDateInDatabase(storeDate: IStoreDateMongo): Promise<IStoreDateMongo>{
  LOGGER(`Salvando store-date [${storeDate.storeLink} / ${storeDate.date}] ao banco de dados`, {from: "SPYBOT", pid: true})
  const saveResult = await storeDate.save()
  return saveResult
}

/* -------------------------------------------------------------------------- */

export {
  IStoreDateProduct,
  storeDateProductSchema,

  IStoreDateMongo,
  IStoreDate,
  IStoreDateUnion,
  storeDateSchema,
  StoreDate,

  generateNewStoreDate,
  getProductStoreDatesDocs,
  getUniqueStoresFromStoreDates,
  getUniqueDatesFromStoreDates,
  getStoreDatesFromDatabase,
  getStoreDateFromDatabase,
  saveStoreDateInDatabase

}

