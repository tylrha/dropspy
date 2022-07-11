import { CURRENT_DATETIME, DATABASE_LOGIN_URL, LOGGER } from '../configs/configs'

import {
  addDateToStore,
  generateNewStore,
  addProductToStore,
  saveStoreInDatabase,
  getStoreInDatabase
} from '../src/spybot/database/store/store-database-methods'

import {
  addProductToDate,
  generateNewDate,
  getDateInDatabase,
  saveDateInDatabase
} from '../src/spybot/database/date/date-database-methods'

import {
  addDateToProduct,
  generateNewProduct,
  getProductInDatabase,
  saveProductInDatabase
} from '../src/spybot/database/product/product-database-methods'

import Spybot from '../src/spybot/models/Spybot'
import mongoose from 'mongoose'

(async () => {

  try {

    const mongooseUrl = `${DATABASE_LOGIN_URL}/TESTANDO`
    mongoose.connect(mongooseUrl)
    LOGGER(mongooseUrl, { from: "SPYBOT" })

    const spybot = new Spybot()
    await spybot.updateBotSpyedStores()

    const storeToAdd = spybot.botSpyedStoresArr[0]
    const currentDate = CURRENT_DATETIME('date')

    const productToAdd = {
      storeName: "google",
      storeLink: "www.google.com",
      productName: "shoes",
      productLink: "shoes.com",
      productPrice: 85
    }

    let productObjectInDatabase = await getProductInDatabase(productToAdd.productLink)
    if (!productObjectInDatabase){
      const objToAddToDatabase = await generateNewProduct(productToAdd, currentDate)
      await saveProductInDatabase(objToAddToDatabase)
      productObjectInDatabase = objToAddToDatabase
    }

    const dateIndex = Array.from(productObjectInDatabase.dates).findIndex(date => date.date === currentDate)
    if (dateIndex === -1) {
      const updatedProductObj = await addDateToProduct(productObjectInDatabase, currentDate)
      await saveProductInDatabase(updatedProductObj)
    }


/*
    let dateObjectInDatabase = await getDateInDatabase(currentDate)
    if (!dateObjectInDatabase){
      const objToAddToDatabase = await generateNewDate(currentDate)
      await saveDateInDatabase(objToAddToDatabase)
      dateObjectInDatabase = objToAddToDatabase
    }

    const productToAddObj = { storeName: "quiero", storeLink: "www.google.com", productName: 'sutia', productLink: "www.google.com", productPrice: 95 }
    const productIndex = Array.from(dateObjectInDatabase.products).findIndex(product => product.productLink === productToAddObj.productLink)
    if (productIndex === -1) {
      const updatedStoreObject = await addProductToDate(dateObjectInDatabase, productToAddObj)
      await saveDateInDatabase(updatedStoreObject)
    }
*/

/*
    let storeObjectInDatabase = await getStoreInDatabase(storeToAdd.storeLink)

    if (!storeObjectInDatabase) {
      const currentStore = await generateNewStore(storeToAdd, currentDate)
      await saveStoreInDatabase(currentStore)
      storeObjectInDatabase = currentStore
    }

    const dateIndex = Array.from(storeObjectInDatabase.dates).findIndex(date => date.date === currentDate)
    if (dateIndex === -1) {
      const updatedStoreObject = await addDateToStore(storeObjectInDatabase, currentDate)
      await saveStoreInDatabase(updatedStoreObject)
    }

    const productToAddObj = { productName: 'sutia', productLink: "www.google.com", productPrice: 95 }
    const productIndex = Array.from(storeObjectInDatabase.products).findIndex(product => product.productLink === productToAddObj.productLink)
    if (productIndex === -1) {
      const updatedStoreObject = await addProductToStore(storeObjectInDatabase, productToAddObj)
      await saveStoreInDatabase(updatedStoreObject)
    }
*/

    LOGGER("FINALIZADO!", { from: "SPYBOT" })

  } catch (e) {
    console.log(e.message)
  }

})()


