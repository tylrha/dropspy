import {Schema, Document} from 'mongoose'

/* ########################################################################## */

interface IDateProduct {
  storeLink: string,
  storeName: string,
  productName: string,
  productLink: string,
  sales: number,
  revenue: number,
}

const dateProductSchema: Schema = new Schema(
  {
    storeLink: String,
    storeName: String,
    productName: String,
    productLink: String,
    sales: Number,
    revenue: Number,
  },
  {
    _id: false,
    versionKey: false
  }
)

/* ########################################################################## */

interface IDate extends Document {
  date: string,
  isoDate: string,
  month: Number,

  lastSale: string,
  lastSaleIso: string,

  totalSales: number,
  totalRevenue: number,
  totalProducts: number,

  products: IDateProduct[]
}

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

    products: [dateProductSchema],
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
  dateSchema
}
