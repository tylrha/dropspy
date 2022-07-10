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

interface IDateMongo extends Document {
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

type IDate = Omit<IDateMongo, '_id' | '__v'>

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
  IDateMongo,
  IDateUnion,
  dateSchema
}
