import {
  LOGGER,
  CURRENT_DATETIME
} from "../../../../configs/configs";

import { getDateFromString, getIsoDateFromString, getStringDateFromDate } from "../../../../utils/libraries/dates";
import {IStore, IStoreDate, IStoreProduct, IStoreMongo, IStoreUnion} from './IStore'
import Store from "./Store";
import IStoreSheets from '../../interfaces/IStoreSheets'
import ISaleProduct from '../../interfaces/ISaleProduct'
import { sortArrayByColumn } from "../../../../utils/libraries/utils";

export {
  generateNewStore,
  getStoreInDatabase,
  saveStoreInDatabase,

  addDateToStoreObject,
  addProductToStoreObject,
  addSaleToStoreObject
}

async function getStoreInDatabase(storeLink: string): Promise<IStoreMongo>{

  if (!storeLink){return}
  LOGGER(`Obtendo informação do banco de dados: loja [${storeLink}]`, {from: "SPYBOT", pid: true})

  const storeObject = await Store.findOne({storeLink})
  return storeObject

}

async function saveStoreInDatabase(storeObj: IStore): Promise<IStoreMongo>{
  LOGGER(`Salvando loja [${storeObj.storeName}] ao banco de dados`, {from: "SPYBOT", pid: true})
  return storeObj.save()
}

async function generateNewStore(sheetStoreObj: IStoreSheets, currentDate: string): Promise<IStoreMongo>{

  const {
    storeName,
    storeLink,
    storeCategory
  } = sheetStoreObj

  LOGGER(`Gerando objeto de loja [${storeName}]`, {from: "SPYBOT", pid: true})

  const tmpStoreObj = {
    storeName,
    storeLink,
    storeCategory,
    lastSale: "#",
    lastSaleIso: "#",
    initialDate: currentDate,
    totalSales: 0,
    totalRevenue: 0,
    totalDates: 0,
    totalProducts: 0,
    products: [],
    dates: []
  }

  const storeObj = new Store(tmpStoreObj)
  return storeObj
}

async function addDateToStoreObject(storeObj: IStoreMongo, dateToAdd: string): Promise<IStoreMongo>{

  LOGGER(`Adicionando data [${dateToAdd}] à loja [${storeObj.storeName}]`, {from: "SPYBOT", pid: true})

  const dateToAddObj: IStoreDate = {
    date: dateToAdd,
    isoDate: getIsoDateFromString(dateToAdd),
    sales: 0,
    revenue: 0
  }

  const newDatesArr = [
    ...storeObj.dates,
    dateToAddObj
  ]

  storeObj.dates = newDatesArr
  storeObj.totalDates = newDatesArr.length

  return storeObj
}


async function addProductToStoreObject(storeObj: IStoreMongo, productToAdd: ISaleProduct): Promise<IStoreMongo>{

  const {
    productName,
    productLink,
    productPrice,
    productImage
  } = productToAdd

  LOGGER(`Adicionando produto [${productName}] à loja [${storeObj.storeName}]`, {from: "SPYBOT", pid: true})

  const productToAddObj: IStoreProduct = {
    productName,
    productLink,
    productPrice,
    productImage,
    sales: 0,
    revenue: 0
  }

  const newProductsArr = [
    ...storeObj.products,
    productToAddObj
  ]

  storeObj.products = newProductsArr
  storeObj.totalProducts = newProductsArr.length

  return storeObj
}

async function addSaleToStoreObject(storeObj: IStoreMongo, saleObj: ISaleProduct): Promise<IStoreMongo>{

  let newStoreObj = storeObj

  const saleDate = getStringDateFromDate(getDateFromString(saleObj.lastSale), 'date')
  const saleCount = Number(storeObj.totalSales) + Number(saleObj.totalSales)
  const salePrice = storeObj.products.find(product => product.productLink === saleObj.productLink).productPrice

  LOGGER(`Adicionando ${saleObj.totalSales} vendas às [${saleCount}] existentes da loja [${storeObj.storeName}]`, {from: "SPYBOT", pid: true})

  const oldDatesArr = [...storeObj.dates]
  const dateIndex = oldDatesArr.findIndex(date => date.date === saleDate)
  const saleDateObj = oldDatesArr[dateIndex]
  saleDateObj.sales = Number(saleDateObj.sales + saleObj.totalSales)
  saleDateObj.revenue = Number((saleDateObj.revenue + saleObj.totalRevenue).toFixed(2))
  newStoreObj.dates[dateIndex] = saleDateObj

  const oldProductsArr = [...storeObj.products]
  const productIndex = oldProductsArr.findIndex(product => product.productLink === saleObj.productLink)
  const saleProductObj = oldProductsArr[productIndex]
  saleProductObj.sales = Number(saleProductObj.sales + saleObj.totalSales)
  saleProductObj.revenue = Number((saleProductObj.revenue + saleObj.totalRevenue).toFixed(2))
  newStoreObj.products[productIndex] = saleProductObj
  newStoreObj.products = sortArrayByColumn(newStoreObj.products, "revenue").reverse()

  newStoreObj.lastSale = saleObj.lastSale
  newStoreObj.lastSaleIso = saleObj.lastSaleIso
  newStoreObj.totalProducts = newStoreObj.products.length
  newStoreObj.totalDates = newStoreObj.dates.length
  newStoreObj.totalSales = Number(storeObj.totalSales + saleObj.totalSales)
  newStoreObj.totalRevenue = Number((storeObj.totalRevenue + saleObj.totalRevenue).toFixed(2))

  return newStoreObj
}
