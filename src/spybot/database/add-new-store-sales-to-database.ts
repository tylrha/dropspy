import { CURRENT_DATETIME, LOGGER } from "../../../configs/configs";
import IAlihunterSale from "../interfaces/IAlihunterSale";
import { sortArrayByColumn } from "../../../utils/libraries/utils";

import {
  IStore,
  IStoreMongo,
  IStoreUnion,
  Store,
  getStoreInDatabase,
  saveStoreInDatabase,
} from './models/Store'

import {
  IProduct,
  IProductMongo,
  IProductUnion,
  Product,
  getProductInDatabase,
  saveProductInDatabase,
  generateNewProduct,
} from './models/Product'

import IStoreSheets from "../interfaces/IStoreSheets";
import ISaleProduct from "../interfaces/ISaleProduct";

import {
  getDateFromString,
  getIsoDateFromString,
  getStringDateFromDate
} from "../../../utils/libraries/dates";

import Spybot from "../Spybot";
import { generateNewStoreDate, getStoreDateFromDatabase, getStoreDatesFromDatabase, IStoreDateMongo, IStoreDateProduct, saveStoreDateInDatabase } from "./models/StoreDate";
import { getLabelsFromDatabase, ILabelMongo } from "./models/Label";

interface IAlihunterSaleExtended extends IAlihunterSale {
  totalSales?: number,
  totalRevenue?: number
}

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

  const allLabels: ILabelMongo[] = await getLabelsFromDatabase({})

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

    try{

      await addSaleToDatabase(saleObject, allLabels)

    } catch(e){
      LOGGER(`${saleIndex} - Erro ao adicionar o produto: ${saleObject.productName} aos bancos de dados`, { from: "SPYBOT", pid: true })
      console.log(e)
    }

    console.log("")

    spoBotInstance.botSpyedStoresArr[storeIndex].salesCount += curSoldProduct.totalSales
    spoBotInstance.botSpyedStoresArr[storeIndex].salesRevenue = Number((spoBotInstance.botSpyedStoresArr[storeIndex].salesRevenue + curSoldProduct.totalRevenue).toFixed(2))

    global.WORKER.workerSharedInfo.workerData.spyBotInfo.lastSaleTime = CURRENT_DATETIME()
    global.WORKER.workerSharedInfo.workerData.spyBotInfo.salesCount += curSoldProduct.totalSales
    global.WORKER.workerSharedInfo.workerData.spyBotInfo.salesRevenue = Number((global.WORKER.workerSharedInfo.workerData.spyBotInfo.salesRevenue + curSoldProduct.totalRevenue).toFixed(2))

  }

}

/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */

async function addSaleToDatabase(saleObject: ISaleProduct, allLabels: ILabelMongo[]){

  const currentDate = getStringDateFromDate(getDateFromString(saleObject.lastSale), 'date')
  let hasAddedDate = false
  let hasAddedProduct = false

  // STORE_DATE ------------------------------------------
  let storeDatesObjectInDatabase = await getStoreDateFromDatabase({storeLink: saleObject.storeLink, date: currentDate})
  if (!storeDatesObjectInDatabase) {
    storeDatesObjectInDatabase = generateNewStoreDate({storeLink: saleObject.storeLink, date: currentDate})
    hasAddedDate = true
    LOGGER("Adicionou data à loja", {from: "SPYBOT", pid: true})
  }

  // const storeDateSaleCount = Number(storeDatesObjectInDatabase.totalSales) + Number(saleObject.totalSales)
  LOGGER(`Adicionando ${saleObject.totalSales} vendas às [${storeDatesObjectInDatabase.totalSales}] existentes da loja-data [${storeDatesObjectInDatabase.storeLink} / ${storeDatesObjectInDatabase.date}]`, {from: "SPYBOT", pid: true})

  let newStoreDateProducts: IStoreDateProduct[] = storeDatesObjectInDatabase.products
  let productIndex = newStoreDateProducts.findIndex((product: any) => product.productLink === saleObject.productLink)

  if (productIndex === -1){
    const curProductObj = {
      productName: saleObject.productName,
      productLink: saleObject.productLink,
      sales: 0,
      revenue: 0
    }
    newStoreDateProducts.push(curProductObj)
    productIndex = newStoreDateProducts.length - 1
  }

  newStoreDateProducts[productIndex].sales = Number(newStoreDateProducts[productIndex].sales + saleObject.totalSales)
  newStoreDateProducts[productIndex].revenue = Number((newStoreDateProducts[productIndex].revenue + saleObject.totalRevenue).toFixed(2))

  storeDatesObjectInDatabase.products = newStoreDateProducts
  storeDatesObjectInDatabase.totalProducts = newStoreDateProducts.length
  storeDatesObjectInDatabase.totalSales = Number(storeDatesObjectInDatabase.totalSales + saleObject.totalSales)
  storeDatesObjectInDatabase.totalRevenue = Number((storeDatesObjectInDatabase.totalRevenue + saleObject.totalRevenue).toFixed(2))
  await saveStoreDateInDatabase(storeDatesObjectInDatabase)

  // PRODUCT ---------------------------------------------
  let productObjectInDatabase: IProductMongo = await getProductInDatabase(saleObject.productLink)
  if (!productObjectInDatabase) {
    LOGGER("Adicionou produto à loja", {from: "SPYBOT", pid: true})
    hasAddedProduct = true
    productObjectInDatabase = generateNewProduct(saleObject, currentDate)
  }

  // const productSaleCount = Number(productObjectInDatabase.totalSales) + saleObject.totalSales
  LOGGER(`Adicionando [${saleObject.totalSales}] vendas às [${productObjectInDatabase.totalSales}] existentes do produto [${productObjectInDatabase.productName}]`, {from: "SPYBOT", pid: true})

  productObjectInDatabase.totalSales = Number(productObjectInDatabase.totalSales + saleObject.totalSales)
  productObjectInDatabase.totalRevenue = Number((productObjectInDatabase.totalRevenue + saleObject.totalRevenue).toFixed(2))
  productObjectInDatabase.lastSale = saleObject.lastSale
  productObjectInDatabase.lastSaleIso = saleObject.lastSaleIso
  productObjectInDatabase.labels = await getProductLabelsArr(productObjectInDatabase, allLabels)
  productObjectInDatabase.totalLabels = productObjectInDatabase.labels.length

  if (hasAddedDate){
    productObjectInDatabase.totalDates += 1
  }

  await saveProductInDatabase(productObjectInDatabase)



  // STORE -----------------------------------------------
  let storeObjectInDatabase: IStoreMongo = await getStoreInDatabase(saleObject.storeLink)

  // const storeSaleCount = Number(storeObjectInDatabase.totalSales) + Number(saleObject.totalSales)
  LOGGER(`Adicionando ${saleObject.totalSales} vendas às [${storeObjectInDatabase.totalSales}] existentes da loja [${storeObjectInDatabase.storeName}]`, {from: "SPYBOT", pid: true})

  storeObjectInDatabase.lastSale = saleObject.lastSale
  storeObjectInDatabase.lastSaleIso = saleObject.lastSaleIso
  storeObjectInDatabase.totalSales = Number(storeObjectInDatabase.totalSales + saleObject.totalSales)
  storeObjectInDatabase.totalRevenue = Number((storeObjectInDatabase.totalRevenue + saleObject.totalRevenue).toFixed(2))

  if (hasAddedProduct){
    storeObjectInDatabase.totalProducts += 1
  }

  if (hasAddedDate){
    storeObjectInDatabase.totalDates += 1
  }

  await saveStoreInDatabase(storeObjectInDatabase)

}

async function getProductLabelsArr(productObj: IProductMongo, allLabels: ILabelMongo[]){

  const newProductLabels = allLabels.filter((label) => {

    let hasLabel = false;

    if (label.compare === 'default'){
      Array.from(label.synonyms).forEach(synonym => {if (productObj.productName.toLowerCase().search(synonym) > -1){hasLabel = true}})
    } else if (label.compare === 'exact'){
      Array.from(label.synonyms).forEach(synonym => {if (productObj.productName.toLowerCase().search(`${synonym} `) > -1){hasLabel = true}})
    } else if (label.compare === 'regex'){
      Array.from(label.synonyms).forEach(synonym => {if (productObj.productName.search(new RegExp(synonym.toString(), 'g'))> -1){hasLabel = true}})
    }

    return hasLabel

  })

  return newProductLabels.map((label) => ({
    name: label.name,
    type: label.type,
  }))

}
