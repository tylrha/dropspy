import mongoose, { Document, Schema } from 'mongoose'
import { DATABASE_COLLECTION_PRODUCTS, LOGGER } from '../../../../configs/configs'
import ISaleProduct from '../../interfaces/ISaleProduct'

/* ########################################################################## */

interface IProductlabels {
  name: string,
  type: string
}

const productlabelsSchema: Schema = new Schema(
  {
    name: String,
    type: String
  },
  {
    versionKey: false,
    _id: false
  }
)


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
  totalRevenue: number,
  totalSales: number,
  totalDates: number,
  totalLabels: number,
  labels: IProductlabels[]
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
    totalRevenue: Number,
    totalSales: Number,
    totalDates: Number,
    totalLabels: Number,
    labels: [productlabelsSchema]
  },
  {
    versionKey: false
  }
)

const Product = mongoose.model<IProductMongo>(DATABASE_COLLECTION_PRODUCTS, productSchema)

/* ########################################################################## */

async function getProductInDatabase(productLink: string): Promise<IProductMongo>{

  if (!productLink){return}
  LOGGER(`Obtendo informação do banco de dados: produto`, {from: "SPYBOT", pid: true}) //  [${productLink.substring(0, 15)}]

  const productObject = await Product.findOne({productLink})
  return productObject

}

async function saveProductInDatabase(productObj: IProductMongo): Promise<IProductMongo>{
  LOGGER(`Salvando produto [${productObj.productName}] ao banco de dados`, {from: "SPYBOT", pid: true})
  const saveResult = await productObj.save()
  return saveResult
}

function generateNewProduct(saleProductObj: ISaleProduct, currentDate: string): IProductMongo{

  const {
    storeName,
    storeLink,
    productName,
    productLink,
    productImage,
    productPrice,
    lastSale,
    lastSaleIso
  } = saleProductObj

  LOGGER(`Gerando objeto do produto [${productName}]`, {from: "SPYBOT", pid: true})

  const tmpProductObj = {
    productName,
    productLink,
    productImage,
    productPrice,
    storeName,
    storeLink,
    initialDate: currentDate,
    lastSale,
    lastSaleIso,
    totalRevenue: 0,
    totalSales: 0,
    totalDates: 0,
    totalLabels: 0,
    labels: [],
  }

  const productObj = new Product(tmpProductObj)
  return productObj
}

export {
  IProductMongo,
  IProduct,
  IProductUnion,

  productSchema,
  Product,

  getProductInDatabase,
  saveProductInDatabase,
  generateNewProduct,
}
