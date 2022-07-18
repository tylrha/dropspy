import {Schema, Document} from 'mongoose'

/* ########################################################################## */

interface IDateProduct {
  storeLink: string,
  storeName: string,
  productName: string,
  productLink: string,
  productImage: string,
  productPrice: number,
  sales: number,
  revenue: number,
}

const dateProductSchema: Schema = new Schema(
  {
    storeLink: String,
    storeName: String,
    productName: String,
    productLink: String,
    productImage: String,
    productPrice: Number,
    sales: Number,
    revenue: Number,
  },
  {
    _id: false,
    versionKey: false
  }
)

/* ########################################################################## */

interface IDateStore {
  storeLink: string,
  storeName: string,
  sales: number,
  revenue: number,
  products: number,
  productsArr: IDateProduct[]
}

const dateStoreSchema: Schema = new Schema(
  {
    storeLink: String,
    storeName: String,
    sales: Number,
    revenue: Number,
    products: Number,
    productsArr: [dateProductSchema]
  },
  {
    _id: false,
    versionKey: false
  }
)

/* ########################################################################## */

interface IDate {
  date: string,
  isoDate: string,
  month: String,
  lastSale: string,
  lastSaleIso: string,
  totalSales: number,
  totalRevenue: number,
  totalProducts: number,
  totalStores: number,
  stores: IDateStore[]
}

interface IDateMongo extends Document, IDate {

}

// type IDate = Omit<IDateMongo, '_id' | '__v'>

type IDateUnion = IDate | IDateMongo

const dateSchema: Schema = new Schema(
  {
    date: String,
    isoDate: String,
    month: String,
    lastSale: String,
    lastSaleIso: String,
    totalSales: Number,
    totalRevenue: Number,
    totalProducts: Number,
    totalStores: Number,
    stores: [dateStoreSchema]
  },
  {
    versionKey: false
  }
)

/* ########################################################################## */

export {
  IDateProduct,
  dateProductSchema,
  IDate,
  IDateMongo,
  IDateUnion,
  dateSchema,
  IDateStore,
  dateStoreSchema
}
