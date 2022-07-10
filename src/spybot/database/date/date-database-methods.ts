import {
  SPYBOT_APP_USER,
  LOGGER,
  CURRENT_DATETIME
} from "../../../../configs/configs";

import { getDateFromString, getIsoDateFromString, getStringDateFromDate } from "../../../../utils/libraries/dates";
import {IDate, IDateMongo, IDateProduct} from './IDate'
import Date from "./Date";
import ISaleProduct from '../../interfaces/ISaleProduct'

export {
  generateNewDate,
  getDateInDatabase,
  saveDateInDatabase,

  addProductToDateObject,
  addSaleToDateobject
}

async function getDateInDatabase(date: string): Promise<IDateMongo>{

  if (!date){return}
  LOGGER(`Obtendo informação do banco de dados: data [${date}]`, {from: "SPYBOT", pid: true})

  const dateObject = await Date.findOne({date})
  return dateObject

}

async function saveDateInDatabase(dateObj: IDateMongo): Promise<IDateMongo>{
  LOGGER(`Salvando data [${dateObj.date}] ao banco de dados`, {from: "SPYBOT", pid: true})
  return dateObj.save()
}

async function generateNewDate(dateToAdd: string): Promise<IDateMongo>{

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

async function addProductToDateObject(dateObj: IDateMongo, productToAdd: ISaleProduct): Promise<IDateMongo>{

  const {
    storeLink,
    storeName,
    productName,
    productLink,
    productImage,
    productPrice
  } = productToAdd

  LOGGER(`Adicionando produto [${productName}] à data [${dateObj.date}]`, {from: "SPYBOT", pid: true})

  const productToAddObj: IDateProduct = {
    storeLink,
    storeName,
    productName,
    productLink,
    productImage,
    productPrice,
    sales: 0,
    revenue: 0
  }

  const newProductsArr = [
    ...dateObj.products,
    productToAddObj
  ]

  dateObj.products = newProductsArr
  dateObj.totalProducts = newProductsArr.length

  return dateObj
}

async function addSaleToDateobject(dateObj: IDateMongo, saleObj: ISaleProduct): Promise<IDateMongo>{

  let newDateObj = dateObj
  const saleDate = getStringDateFromDate(getDateFromString(saleObj.lastSale), 'date')
  const saleCount = Number(dateObj.totalSales) + 1

  LOGGER(`Adicionando venda [${saleCount}] à data [${saleDate}]`, {from: "SPYBOT", pid: true})

  const oldProductsArr = [...dateObj.products]
  const productIndex = oldProductsArr.findIndex(product => product.productLink === saleObj.productLink)
  const saleProductObj = oldProductsArr[productIndex]
  saleProductObj.sales = Number(saleProductObj.sales + 1)
  saleProductObj.revenue = Number((saleProductObj.revenue + saleProductObj.productPrice).toFixed(2))
  newDateObj.products[productIndex] = saleProductObj

  newDateObj.lastSale = saleObj.lastSale
  newDateObj.lastSaleIso = saleObj.lastSaleIso

  newDateObj.totalProducts = newDateObj.products.length
  newDateObj.totalSales = Number(dateObj.totalSales + 1)
  newDateObj.totalRevenue = Number((dateObj.totalRevenue + saleProductObj.productPrice).toFixed(2))

  return newDateObj
}
