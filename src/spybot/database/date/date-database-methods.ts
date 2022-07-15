import {
  LOGGER,
  CURRENT_DATETIME
} from "../../../../configs/configs";

import { getDateFromString, getIsoDateFromString, getStringDateFromDate } from "../../../../utils/libraries/dates";
import {IDate, IDateMongo, IDateProduct, IDateStore} from './IDate'
import Date from "./Date";
import ISaleProduct from '../../interfaces/ISaleProduct'
import { sortArrayByColumn } from "../../../../utils/libraries/utils";

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

  const tmpDateObj: IDate = {
    date: dateToAdd,
    isoDate: getIsoDateFromString(dateToAdd),
    month: dateToAdd.toString().substring(dateToAdd.toString().length - 7),

    lastSale: "#",
    lastSaleIso: "#",

    totalSales: 0,
    totalRevenue: 0,
    totalProducts: 0,
    totalStores: 0,
    stores: []
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

  // checa se a loja já existe na array
  let storeIndex = dateObj.stores.findIndex(store => store.storeLink === storeLink)
  if (storeIndex === -1){

    storeIndex = dateObj.stores.length

    const newStoreObj: IDateStore = {
      storeName,
      storeLink,
      revenue: 0,
      sales: 0,
      products: 0,
      productsArr: []
    }

    dateObj.stores.push(newStoreObj)
  }

  // checa se o produto ja existe na array de produtos da loja
  let productIndex = dateObj.stores[storeIndex].productsArr.findIndex(product => product.productLink === productLink)
  if (productIndex === -1){

    productIndex = dateObj.stores[storeIndex].productsArr.length

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

    dateObj.stores[storeIndex].productsArr.push(productToAddObj)
  }

  dateObj.stores[storeIndex].products = dateObj.stores[storeIndex].productsArr.length
  dateObj.totalStores = dateObj.stores.length

  return dateObj
}

async function addSaleToDateobject(dateObj: IDateMongo, saleObj: ISaleProduct): Promise<IDateMongo>{

  let newDateObj = dateObj
  const saleDate = getStringDateFromDate(getDateFromString(saleObj.lastSale), 'date')
  const saleCount = Number(dateObj.totalSales) + saleObj.totalSales

  LOGGER(`Adicionando [${saleObj.totalSales}] vendas às [${saleCount}] existentes da data [${saleDate}]`, {from: "SPYBOT", pid: true})

  const storeIndex = dateObj.stores.findIndex(store => store.storeLink === saleObj.storeLink)
  const productIndex = dateObj.stores[storeIndex].productsArr.findIndex(product => product.productLink === saleObj.productLink)

  // STORE UPDATES -------------------------------------------------------------
  let saleStoreObj = dateObj.stores[storeIndex]
  saleStoreObj.products = saleStoreObj.productsArr.length
  saleStoreObj.sales = Number(saleStoreObj.sales + saleObj.totalSales)
  saleStoreObj.revenue = Number((saleStoreObj.revenue + saleObj.totalRevenue).toFixed(2))
  newDateObj.stores[storeIndex] = saleStoreObj
  newDateObj.stores = sortArrayByColumn(newDateObj.stores, "revenue").reverse()

  // PRODUCT UPDATES -----------------------------------------------------------
  let saleProductObj = saleStoreObj.productsArr[productIndex]
  saleProductObj.sales = Number(saleProductObj.sales + saleObj.totalSales)
  saleProductObj.revenue = Number((saleProductObj.revenue + saleObj.totalRevenue).toFixed(2))
  newDateObj.stores[storeIndex].productsArr[productIndex] = saleProductObj
  newDateObj.stores[storeIndex].productsArr = sortArrayByColumn(newDateObj.stores[storeIndex].productsArr, "revenue").reverse()

  // TOP DATE UPDATES ----------------------------------------------------------
  newDateObj.lastSale = saleObj.lastSale
  newDateObj.lastSaleIso = saleObj.lastSaleIso
  newDateObj.totalProducts = newDateObj.stores.map(store => store.products).reduce((pSum, a) => pSum + a, 0)
  newDateObj.totalStores = newDateObj.stores.length
  newDateObj.totalSales = Number(dateObj.totalSales + saleObj.totalSales)
  newDateObj.totalRevenue = Number((dateObj.totalRevenue + saleObj.totalRevenue).toFixed(2))

  return newDateObj
}
