import {Document, Schema} from 'mongoose'

/* ########################################################################## */

interface IStoreDate {
  date: string,
  isoDate: string,
  sales: number,
  revenue: number
}

const storeDateSchema: Schema = new Schema(
  {
    date: String,
    isoDate: String,
    sales: Number,
    revenue: Number
  },
  {
    _id: false,
    versionKey: false
  }
)

/* ########################################################################## */

interface IStoreProduct {
  productName: string,
  productLink: string,
  productImage: string,
  productPrice: number,
  sales: number,
  revenue: number
}

const storeProductSchema: Schema = new Schema(
  {
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

interface IStoreMongo extends Document {
  storeName: string,
  storeLink: string,
  storeCategory: string,
  initialDate: string,
  lastSale: string,
  lastSaleIso: string,
  totalSales: number,
  totalRevenue: number,
  totalLabels: number,
  totalDates: number,
  totalProducts: number,
  labels: [],
  dates: IStoreDate[],
  products: IStoreProduct[],
}

type IStore = Omit<IStoreMongo, '_id' | '__v'>

type IStoreUnion = IStore | IStoreMongo

const storeSchema: Schema = new Schema(
  {
  storeName: String,
  storeLink: String,
  storeCategory: String,
  initialDate: String,
  lastSale: String,
  lastSaleIso: String,
  totalSales: Number,
  totalRevenue: Number,
  totalLabels: Number,
  totalDates: Number,
  totalProducts: Number,
  labels: [],
  dates: [storeDateSchema],
  products: [storeProductSchema]
  },
  {
    versionKey: false
  }
)

/* ########################################################################## */

export {
  IStoreDate,
  storeDateSchema,

  IStoreProduct,
  storeProductSchema,

  IStore,
  IStoreMongo,
  IStoreUnion,
  storeSchema
}
