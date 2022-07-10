import {
  SPYBOT_APP_USER,
  LOGGER,
  CURRENT_DATETIME
} from "../../../../configs/configs";

import { getIsoDateFromString } from "../../../../utils/libraries/dates";
import {IDate, IDateProduct} from './IDate'
import Date from "./Date";

export {
  generateNewDate,
  getDateInDatabase,
  saveDateInDatabase,

  addProductToDate,
}

async function getDateInDatabase(date: string){

  if (!date){return}
  LOGGER(`Obtendo informação do banco de dados: data [${date}]`, {from: "SPYBOT", pid: true})

  const dateObject = await Date.findOne({date})
  return dateObject

}

async function saveDateInDatabase(dateObj: IDate){
  LOGGER(`Salvando data [${dateObj.date}] ao banco de dados`, {from: "SPYBOT", pid: true})
  return dateObj.save()
}

async function generateNewDate(dateToAdd){

  LOGGER(`Gerando objeto de data [${dateToAdd}]`, {from: "SPYBOT", pid: true})

  const tmpDateObj = {
    date: dateToAdd,
    isoDate: getIsoDateFromString(dateToAdd),
    month: dateToAdd.toString().substring(dateToAdd.toString().length - 7),

    lastSale: "#",
    lastSaleIso: "#",

    totalSales: 0,
    totalRevenue: 0,
    totalProducts: 0,

    products: []
  }

  const dateObj = new Date(tmpDateObj)
  return dateObj
}

async function addProductToDate(dateObj: IDate, productToAdd: any){

  const {
    storeLink,
    storeName,
    productName,
    productLink,
    productPrice
  } = productToAdd

  LOGGER(`Adicionando produto [${productName}] à data [${dateObj.date}]`, {from: "SPYBOT", pid: true})

  const productToAddObj: IDateProduct = {
    storeLink,
    storeName,
    productName,
    productLink,
    sales: 1,
    revenue: productPrice
  }

  const newProductsArr = [
    ...dateObj.products,
    productToAddObj
  ]

  dateObj.products = newProductsArr
  dateObj.totalProducts = newProductsArr.length

  return dateObj
}
