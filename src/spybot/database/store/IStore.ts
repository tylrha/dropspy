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
  sales: number,
  revenue: number
}

const storeProductSchema: Schema = new Schema(
  {
    productName: String,
    productLink: String,
    sales: Number,
    revenue: Number
  },
  {
    _id: false,
    versionKey: false
  }
)

/* ########################################################################## */

interface IStore extends Document {
  storeName: string,
  storeLink: string,
  storeCategory: string,

  initialDate: string,
  lastSale: string,
  lastSaleIso: string,

  totalSales: number,
  totalRevenue: number,
  totalDates: number,
  totalProducts: number,

  products: IStoreProduct[],
  dates: IStoreDate[]
}

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
  totalDates: Number,
  totalProducts: Number,

  products: [storeProductSchema],
  dates: [storeDateSchema]
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
  storeSchema
}
