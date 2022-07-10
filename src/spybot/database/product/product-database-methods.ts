import {
  SPYBOT_APP_USER,
  LOGGER,
  CURRENT_DATETIME
} from "../../../../configs/configs";

import { getIsoDateFromString } from "../../../../utils/libraries/dates";
import {IProduct, IProductDate} from './IProduct'
import Product from "./Product";

export {
  generateNewProduct,
  getProductInDatabase,
  saveProductInDatabase,

  addDateToProduct,
}

async function getProductInDatabase(productLink: string){

  if (!productLink){return}
  LOGGER(`Obtendo informação do banco de dados: produto [${productLink}]`, {from: "SPYBOT", pid: true})

  const productObject = await Product.findOne({productLink})
  return productObject

}

async function saveProductInDatabase(productObj: IProduct){
  LOGGER(`Salvando produto [${productObj.productName}] ao banco de dados`, {from: "SPYBOT", pid: true})
  return productObj.save()
}

async function generateNewProduct(saleProductObj, currentDate){

  const {
    storeName,
    storeLink,
    productName,
    productLink,
    productPrice
  } = saleProductObj

  LOGGER(`Gerando objeto do produto [${productName}]`, {from: "SPYBOT", pid: true})

  const tmpProductObj = {
    storeName,
    storeLink,
    productName,
    productLink,
    productPrice,

    lastSale: "#",
    lastSaleIso: "#",
    initialDate: currentDate,

    totalSales: 0,
    totalRevenue: 0,
    totalDates: 0,
    dates: []
  }

  const productObj = new Product(tmpProductObj)
  return productObj
}

async function addDateToProduct(productObj: IProduct, dateToAdd: string){

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
