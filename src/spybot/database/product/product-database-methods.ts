import {
  LOGGER,
  CURRENT_DATETIME
} from "../../../../configs/configs";

import { getIsoDateFromString, getStringDateFromDate, getDateFromString } from "../../../../utils/libraries/dates";
import ISaleProduct from "../../interfaces/ISaleProduct";
import {IProduct, IProductMongo, IProductDate, IProductUnion} from './IProduct'
import Product from "./Product";

export {
  generateNewProduct,
  getProductInDatabase,
  saveProductInDatabase,

  addDateToProductObject,
  addSaleToProductObject
}

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

async function generateNewProduct(saleProductObj: ISaleProduct, currentDate: string): Promise<IProductMongo>{

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
    totalSales: 0,
    totalRevenue: 0,
    totalLabels: 0,
    totalDates: 0,
    labels: [],
    dates: []
  }

  const productObj = new Product(tmpProductObj)
  return productObj
}

async function addDateToProductObject(productObj: IProductMongo, dateToAdd: string): Promise<IProductUnion>{

  LOGGER(`Adicionando data [${dateToAdd}] ao produto [${productObj.productName}]`, {from: "SPYBOT", pid: true})

  const dateToAddObj: IProductDate = {
    date: dateToAdd,
    isoDate: getIsoDateFromString(dateToAdd),
    sales: 0,
    revenue: 0
  }

  const newDatesArr = [
    ...productObj.dates,
    dateToAddObj
  ]

  productObj.dates = newDatesArr
  productObj.totalDates = newDatesArr.length

  return productObj
}

async function addSaleToProductObject(productObj: IProductMongo, saleObj: ISaleProduct): Promise<IProductMongo>{

  const saleDate = getStringDateFromDate(getDateFromString(saleObj.lastSale), 'date')
  const saleCount = Number(productObj.totalSales) + saleObj.totalSales

  LOGGER(`Adicionando [${saleObj.totalSales}] vendas às [${saleCount}] existentes do produto [${productObj.productName}]`, {from: "SPYBOT", pid: true})

  const oldDatesArr = [...productObj.dates]
  const dateIndex = oldDatesArr.findIndex(date => date.date === saleDate)
  const saleDateObj = oldDatesArr[dateIndex]
  saleDateObj.sales = Number(saleDateObj.sales + 1)
  saleDateObj.revenue = Number((saleDateObj.revenue + saleObj.totalRevenue).toFixed(2))
  productObj.dates[dateIndex] = saleDateObj

  productObj.totalDates = productObj.dates.length
  productObj.totalSales = Number(productObj.totalSales + saleObj.totalSales)
  productObj.totalRevenue = Number((productObj.totalRevenue + saleObj.totalRevenue).toFixed(2))
  productObj.lastSale = saleObj.lastSale
  productObj.lastSaleIso = saleObj.lastSaleIso

  return productObj
}
