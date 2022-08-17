import { LOGGER } from "../../../configs/configs";

import IStoreSheets from '../interfaces/IStoreSheets'
import { getStoreFromDatabase } from "./models/Store";
import { generateNewStoreDate, getStoreDatesFromDatabase } from "./models/StoreDate";

export default async function checkIfDatabaseIsUpdated(spyedStoresArr: Array<IStoreSheets>, dateToCheck: string) {

  LOGGER(`Atualizando o banco de dados pré-espionagem`, { from: "SPYBOT", pid: true })

  if (!dateToCheck || !spyedStoresArr) { return }

  for (let x = 0; x < spyedStoresArr.length; x++) {
    const curStoreObj: IStoreSheets = spyedStoresArr[x]
    const queryObj = { storeLink: curStoreObj.storeLink, date: dateToCheck }
    const oldStoreDateObj = await getStoreDatesFromDatabase(queryObj)

    if (oldStoreDateObj.length === 0) {
      LOGGER(`Add store date: ${JSON.stringify(queryObj)}`, { from: "SPYBOT", pid: true })

      let storeDateObj = generateNewStoreDate(queryObj)
      await storeDateObj.save()

      let storeObj = await getStoreFromDatabase({storeLink: curStoreObj.storeLink})
      storeObj.totalDates += 1
      await storeObj.save()

    } else {
      LOGGER(`Store date already added: ${JSON.stringify(queryObj)}`, { from: "SPYBOT", pid: true })
    }
  }

}
