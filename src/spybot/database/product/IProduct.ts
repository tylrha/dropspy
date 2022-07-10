import { Document, Schema } from 'mongoose'

/* ########################################################################## */

interface IProductDate {
  date: string,
  isoDate: string,
  sales: number,
  revenue: number
}

const productDateSchema: Schema = new Schema(
  {
    date: String,
    isoDate: String,
    sales: Number,
    revenue: Number
  },
  {
    versionKey: false,
    _id: false
  }
)

/* ########################################################################## */

interface IProduct extends Document {
  storeName: string,
  storeLink: string,

  productName: string,
  productLink: string,
  productPrice: Number,

  initialDate: string,
  lastSale: string,
  lastSaleIso: string,

  totalSales: number,
  totalRevenue: number,
  totalDates: number,

  dates: IProductDate[]
}

const productSchema: Schema = new Schema(
  {
    storeName: String,
    storeLink: String,

    productName: String,
    productLink: String,
    productPrice: Number,

    initialDate: String,
    lastSale: String,
    lastSaleIso: String,

    totalSales: Number,
    totalRevenue: Number,
    totalDates: Number,

    dates: [productDateSchema]
  },
  {
    versionKey: false
  }
)

/* ########################################################################## */

export {
  IProductDate,
  IProduct,
  productDateSchema,
  productSchema
}
