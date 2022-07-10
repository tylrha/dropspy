import {
  SPYBOT_APP_USER,
  LOGGER,
  CURRENT_DATETIME
} from "../../../../configs/configs";

import { getIsoDateFromString } from "../../../../utils/libraries/dates";
import {IStore, IStoreDate, IStoreProduct} from './IStore'
import Store from "./Store";

export {
  generateNewStore,
  getStoreInDatabase,
  saveStoreInDatabase,

  addDateToStore,
  addProductToStore,
}

async function getStoreInDatabase(storeLink: string){

  if (!storeLink){return}
  LOGGER(`Obtendo informação do banco de dados: loja [${storeLink}]`, {from: "SPYBOT", pid: true})

  const storeObject = await Store.findOne({storeLink})
  return storeObject

}

async function saveStoreInDatabase(storeObj: IStore){
  LOGGER(`Salvando loja [${storeObj.storeName}] ao banco de dados`, {from: "SPYBOT", pid: true})
  return storeObj.save()
}

async function generateNewStore(sheetStoreObj, currentDate){


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

async function addDateToStore(storeObj: IStore, dateToAdd: string){

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


async function addProductToStore(storeObj: IStore, productToAdd: any){

  const {
    productName,
    productLink,
    productPrice
  } = productToAdd

  LOGGER(`Adicionando produto [${productName}] à loja [${storeObj.storeName}]`, {from: "SPYBOT", pid: true})

  const productToAddObj: IStoreProduct = {
    productName,
    productLink,
    sales: 1,
    revenue: productPrice
  }

  const newProductsArr = [
    ...storeObj.products,
    productToAddObj
  ]

  storeObj.products = newProductsArr
  storeObj.totalProducts = newProductsArr.length

  return storeObj
}
