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

interface IProductMongo extends Document{
  productName: string,
  productLink: string,
  productImage: string,
  productPrice: number,
  storeName: string,
  storeLink: string,
  initialDate: string,
  lastSale: string,
  lastSaleIso: string,
  totalSales: number,
  totalRevenue: number,
  totalLabels: number,
  totalDates: number,
  labels: [],
  dates: IProductDate[]
}

type IProduct = Omit<IProductMongo, '_id' | '__v'>

type IProductUnion = IProduct | IProductMongo

const productSchema: Schema = new Schema(
  {
    productName: String,
    productLink: String,
    productImage: String,
    productPrice: Number,
    storeName: String,
    storeLink: String,
    initialDate: String,
    lastSale: String,
    lastSaleIso: String,
    totalSales: Number,
    totalRevenue: Number,
    totalLabels: Number,
    totalDates: Number,
    labels: [],
    dates: [productDateSchema]
  },
  {
    versionKey: false
  }
)

/* ########################################################################## */

export {
  IProductDate,
  productDateSchema,

  IProductMongo,
  IProduct,
  IProductUnion,

  productSchema
}
