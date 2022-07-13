import { CURRENT_DATETIME, LOGGER } from "../../../configs/configs";

import IAlihunterSale from "../interfaces/IAlihunterSale";
import IStoreSheets from "../interfaces/IStoreSheets";
import ISaleProduct from '../interfaces/ISaleProduct'
import { IProductMongo } from './product/IProduct'
import { IStoreMongo } from "./store/IStore";
import { IDateMongo } from "./date/IDate";

import {
  getDateFromString,
  getIsoDateFromString,
  getStringDateFromDate
} from "../../../utils/libraries/dates";

import {
  getProductInDatabase,
  generateNewProduct,
  saveProductInDatabase,
  addDateToProductObject,
  addSaleToProductObject
} from "./product/product-database-methods";

import {
  addDateToStoreObject,
  addProductToStoreObject,
  generateNewStore,
  getStoreInDatabase,
  saveStoreInDatabase,
  addSaleToStoreObject
} from "./store/store-database-methods";

import {
  addProductToDateObject,
  addSaleToDateobject,
  getDateInDatabase,
  saveDateInDatabase
} from "./date/date-database-methods";

import Spybot from "../models/Spybot";

export default async function addNewSaleToDatabase(alihunterSalesArr: IAlihunterSale[], storeIndex: number, spoBotInstance: Spybot): Promise<void> {

  const currentStoreObj: IStoreSheets = spoBotInstance.botSpyedStoresArr[storeIndex]

  const {
    storeName,
    storeLink
  } = currentStoreObj

  const currentDateTime = CURRENT_DATETIME()
  const currentIsoDateTime = getIsoDateFromString(currentDateTime)

  let currentTrackedSales = 2
  let currentTrackedRevenue = 0

  for (let x = 0; x < alihunterSalesArr.length; x++) {

    const curSoldProduct: IAlihunterSale = alihunterSalesArr[x]
    const saleIndex = Number(x + 1) + " / " + alihunterSalesArr.length

    const {
      productLink,
      productName,
      productPrice,
      productTime,
      productImage
    } = curSoldProduct

    currentTrackedSales += 1
    currentTrackedRevenue += productPrice

    const saleObject: ISaleProduct = {
      storeName,
      storeLink,
      productLink,
      productName,
      productPrice,
      productImage,
      lastSale: currentDateTime,
      lastSaleIso: currentIsoDateTime
    }

    LOGGER(`${saleIndex} - Adicionando o produto: ${saleObject.productName} aos bancos de dados`, { from: "SPYBOT", pid: true })

    await addSaleToProductsDatabase(saleObject)
    await addSaleToStoresDatabase(saleObject)
    await addSaleToDatesDatabase(saleObject)

    global.WORKER.workerSharedInfo.workerData.spyBotInfo.lastSaleTime = CURRENT_DATETIME()
    global.WORKER.workerSharedInfo.workerData.spyBotInfo.salesCount += 1
    global.WORKER.workerSharedInfo.workerData.spyBotInfo.salesRevenue = Number((global.WORKER.workerSharedInfo.workerData.spyBotInfo.salesRevenue + productPrice).toFixed(2))

    spoBotInstance.botSpyedStoresArr[storeIndex].salesCount += 1
    spoBotInstance.botSpyedStoresArr[storeIndex].salesRevenue = Number((spoBotInstance.botSpyedStoresArr[storeIndex].salesRevenue + productPrice).toFixed(2))

  }

}

async function addSaleToProductsDatabase(newSaleObject: ISaleProduct): Promise<void> {

  const currentDate = getStringDateFromDate(getDateFromString(newSaleObject.lastSale), 'date')

  let productObjectInDatabase: IProductMongo = await getProductInDatabase(newSaleObject.productLink)
  if (!productObjectInDatabase) { productObjectInDatabase = await generateNewProduct(newSaleObject, currentDate) }

  const isDateMissing = Array.from(productObjectInDatabase.dates).findIndex(date => date.date === currentDate) === -1
  if (isDateMissing) { productObjectInDatabase = await addDateToProductObject(productObjectInDatabase, currentDate) }

  productObjectInDatabase = await addSaleToProductObject(productObjectInDatabase, newSaleObject)
  await saveProductInDatabase(productObjectInDatabase)

}

async function addSaleToStoresDatabase(newSaleObject: ISaleProduct): Promise<void> {

  const currentDate = getStringDateFromDate(getDateFromString(newSaleObject.lastSale), 'date')

  let storeObjectInDatabase: IStoreMongo = await getStoreInDatabase(newSaleObject.storeLink)

  const isDateMissing = Array.from(storeObjectInDatabase.dates).findIndex(date => date.date === currentDate) === -1
  if (isDateMissing) { storeObjectInDatabase = await addDateToStoreObject(storeObjectInDatabase, currentDate) }

  const isProductMissing = Array.from(storeObjectInDatabase.products).findIndex(product => product.productLink === newSaleObject.productLink) === -1
  if (isProductMissing) { storeObjectInDatabase = await addProductToStoreObject(storeObjectInDatabase, newSaleObject) }

  storeObjectInDatabase = await addSaleToStoreObject(storeObjectInDatabase, newSaleObject)
  await saveStoreInDatabase(storeObjectInDatabase)
}

async function addSaleToDatesDatabase(newSaleObject: ISaleProduct): Promise<void> {

  const currentDate = getStringDateFromDate(getDateFromString(newSaleObject.lastSale), 'date')

  let dateObjectInDatabase: IDateMongo = await getDateInDatabase(currentDate)

  const isProductMissing = Array.from(dateObjectInDatabase.products).findIndex(product => product.productLink === newSaleObject.productLink) === -1
  if (isProductMissing) { dateObjectInDatabase = await addProductToDateObject(dateObjectInDatabase, newSaleObject) }

  dateObjectInDatabase = await addSaleToDateobject(dateObjectInDatabase, newSaleObject)
  await saveDateInDatabase(dateObjectInDatabase)
}
