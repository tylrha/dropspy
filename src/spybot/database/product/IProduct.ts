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
  storeName: string,
  storeLink: string,

  productName: string,
  productLink: string,
  productImage: string,
  productPrice: number,

  initialDate: string,
  lastSale: string,
  lastSaleIso: string,

  labels: [],
  totalLabels: number,

  totalSales: number,
  totalRevenue: number,
  totalDates: number,

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

    labels: [],
    totalLabels: Number,

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
  productDateSchema,

  IProductMongo,
  IProduct,
  IProductUnion,

  productSchema
}
