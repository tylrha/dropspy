import { CURRENT_DATETIME, LOGGER } from "../../../configs/configs";

import IAlihunterSale from "../interfaces/IAlihunterSale";
import IStoreSheets from "../interfaces/IStoreSheets";
import ISaleProduct from '../interfaces/ISaleProduct'
import { IProductMongo } from './product/IProduct'
import { IStoreMongo } from "./store/IStore";
import { IDateMongo } from "./date/IDate";

interface IAlihunterSaleExtended extends IAlihunterSale {
  totalSales?: number,
  totalRevenue?: number
}

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

export default async function addNewStoreSalesToDatabase(alihunterSalesArr: IAlihunterSale[], storeIndex: number, spoBotInstance: Spybot): Promise<void> {

  const currentStoreObj: IStoreSheets = spoBotInstance.botSpyedStoresArr[storeIndex]

  const {
    storeName,
    storeLink
  } = currentStoreObj

  const currentDateTime = CURRENT_DATETIME()
  const currentIsoDateTime = getIsoDateFromString(currentDateTime)

  const salesGroupedByProductsArr = groupSalesByProductLink(alihunterSalesArr);
  const salesArrTotalSales = Number(salesGroupedByProductsArr.map(product => product.totalSales).reduce((pSum, a) => pSum + a, 0).toFixed(2))
  const salesArrTotalRevenue = Number(salesGroupedByProductsArr.map(product => product.totalRevenue).reduce((pSum, a) => pSum + a, 0).toFixed(2))

  LOGGER(`Foram encontrados ${salesGroupedByProductsArr.length} produtos, ${salesArrTotalSales} vendas e R$ ${salesArrTotalRevenue} de valor\n`, { from: "SPYBOT", pid: true })

  let currentTrackedSales = 0
  let currentTrackedRevenue = 0

  for(let x = 0; x < salesGroupedByProductsArr.length; x++){

    const curSoldProduct: IAlihunterSaleExtended = salesGroupedByProductsArr[x]
    const saleIndex = Number(x + 1) + " / " + salesGroupedByProductsArr.length

    const saleObject: ISaleProduct = {
      storeName,
      storeLink,
      productName: curSoldProduct.productName,
      productLink: curSoldProduct.productLink,
      productPrice: curSoldProduct.productPrice,
      productImage: curSoldProduct.productImage,
      lastSale: currentDateTime,
      lastSaleIso: currentIsoDateTime,
      totalSales: curSoldProduct.totalSales,
      totalRevenue: Number((curSoldProduct.totalRevenue).toFixed(2))
    }

    currentTrackedSales += curSoldProduct.totalSales
    currentTrackedRevenue = Number((currentTrackedRevenue  + curSoldProduct.totalRevenue).toFixed(2))

    LOGGER(`${saleIndex} - Adicionando o produto: ${saleObject.productName} aos bancos de dados`, { from: "SPYBOT", pid: true })

    await addSaleToProductsDatabase(saleObject)
    await addSaleToStoresDatabase(saleObject)
    await addSaleToDatesDatabase(saleObject)

    console.log("")

    spoBotInstance.botSpyedStoresArr[storeIndex].salesCount += curSoldProduct.totalSales
    spoBotInstance.botSpyedStoresArr[storeIndex].salesRevenue = Number((spoBotInstance.botSpyedStoresArr[storeIndex].salesRevenue + curSoldProduct.totalRevenue).toFixed(2))

    global.WORKER.workerSharedInfo.workerData.spyBotInfo.lastSaleTime = CURRENT_DATETIME()
    global.WORKER.workerSharedInfo.workerData.spyBotInfo.salesCount += curSoldProduct.totalSales
    global.WORKER.workerSharedInfo.workerData.spyBotInfo.salesRevenue = Number((global.WORKER.workerSharedInfo.workerData.spyBotInfo.salesRevenue + curSoldProduct.totalRevenue).toFixed(2))

  }

}

function groupSalesByProductLink(array: IAlihunterSale[]): IAlihunterSaleExtended[]{

  const arrGroupedByKey = array.reduce((finalGroupedArr, currentSaleObj) => {

    const currentProductLink = currentSaleObj.productLink

    const curProductindex = finalGroupedArr.findIndex(prodObj => prodObj.productLink === currentProductLink)
    const isProductAlreadyInFinalArray = curProductindex > -1 ? true : false

    if (!isProductAlreadyInFinalArray){

      const newProductObj: IAlihunterSaleExtended = {
        ...currentSaleObj,
        totalSales: 1,
        totalRevenue: Number((currentSaleObj.productPrice).toFixed(2))
      }

      finalGroupedArr.push(newProductObj)

    } else {

      finalGroupedArr[curProductindex].totalSales += 1
      finalGroupedArr[curProductindex].totalRevenue = Number((finalGroupedArr[curProductindex].totalRevenue + currentSaleObj.productPrice).toFixed(2))
    }

    return finalGroupedArr;

  }, []);

  return arrGroupedByKey
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

  const storeIndex = dateObjectInDatabase.stores.findIndex(store => store.storeLink === newSaleObject.storeLink)
  const isStoreMissing = storeIndex === -1
  const isProductMissing = isStoreMissing ? true : Array.from(dateObjectInDatabase.stores[storeIndex].productsArr).findIndex(product => product.productLink === newSaleObject.productLink) === -1
  if (isStoreMissing || isProductMissing) { dateObjectInDatabase = await addProductToDateObject(dateObjectInDatabase, newSaleObject) }

  dateObjectInDatabase = await addSaleToDateobject(dateObjectInDatabase, newSaleObject)
  await saveDateInDatabase(dateObjectInDatabase)
}
