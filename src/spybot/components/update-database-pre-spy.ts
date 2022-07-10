import { LOGGER } from "../../../configs/configs";

import IStoreSheets from '../interfaces/IStoreSheets'
import {getDateInDatabase, generateNewDate, saveDateInDatabase} from '../database/date/date-database-methods'
import {getStoreInDatabase, generateNewStore, saveStoreInDatabase, addDateToStore} from '../database/store/store-database-methods'

export default async function checkIfDatabaseIsUpdated(spyedStoresArr: Array<IStoreSheets>, dateToCheck: string){

  LOGGER(`Atualizando o banco de dados pré-espionagem`, {from: "SPYBOT", pid: true})

  if (!dateToCheck){return}
  const dateInDatabase = await getDateInDatabase(dateToCheck)
  if (!dateInDatabase){
    const objToAddToDatabase = await generateNewDate(dateToCheck)
    await saveDateInDatabase(objToAddToDatabase)
  }

  if (!spyedStoresArr){return}
  for(let x = 0; x < spyedStoresArr.length; x++){

    const curStoreObj: IStoreSheets = spyedStoresArr[x]
    let storeObjectInDatabase = await getStoreInDatabase(curStoreObj.storeLink)

    if (!storeObjectInDatabase) {
      const currentStore = await generateNewStore(curStoreObj, dateToCheck)
      await saveStoreInDatabase(currentStore)
      storeObjectInDatabase = currentStore
    }

    const dateIndex = Array.from(storeObjectInDatabase.dates).findIndex(date => date.date === dateToCheck)
    if (dateIndex === -1) {
      const updatedStoreObject = await addDateToStore(storeObjectInDatabase, dateToCheck)
      await saveStoreInDatabase(updatedStoreObject)
    }

  }


}
