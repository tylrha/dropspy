import mongoose, { Schema } from "mongoose";
import {
  VERSION,
  CURRENT_DATETIME,
  SPYBOT_LOOP_INTERVAL,
  LOGGER,
  ALIHUNTER_USER,
  DATABASE_COLLECTION_BOTS,
  DATABASE_DATABASE_SPY,
  DATABASE_COLLECTION_ADMIN,
  DATABASE_COLLECTION_STORES,
  DATABASE_LOGIN_URL
} from "../../../configs/configs";

import getOsUsageData from "../../../utils/functions/getOsUsageData";
import { Admin } from "../database/models/Admin";
import { getBotFromDatabase, getBotsFromDatabase } from "../database/models/Bot";
import { getStoreFromDatabase } from "../database/models/Store";

enum ENUM_UPDATE_BOT_INFO {
  INITIAL_INFO,
  LAST_RESTARTED_TIME,
  CHECKED_INFO,
  LAST_SALE_TIME,
  CLEAN_INFO
}

export {
  checkIfBotIsAllowedToSpyInDatabase,
  updateBotInfoInDatabase,
  getSpyedStoresInDatabase,
  ENUM_UPDATE_BOT_INFO
}

/* -------------------------------------------------------------------------- */

async function checkIfBotIsAllowedToSpyInDatabase(botIndex: string){

  const botObj = await getBotFromDatabase({botNumber: botIndex})
  const isBotAllowed = botObj.status === 'active'
  if (!isBotAllowed){return `O bot está desativado`}

  const adminInfo: any = await Admin.findOne({name: "options"})
  const isSpyAllowed = adminInfo.botStatus === "active"
  if (!isSpyAllowed){return `Os bots estão em ${adminInfo.botStatus}`}

  return true

}

async function getSpyedStoresInDatabase(botIndex: string){

  const botObj = await getBotFromDatabase({botNumber: botIndex})

  const spyedStores = botObj.spyedStores
  let finalSpyedStores = []
  for (let x = 0; x < spyedStores.length; x++){
    const completStore = await getStoreFromDatabase({storeLink: spyedStores[x]})
    const {storeLink, storeName, storeCategory} = completStore
    finalSpyedStores.push({storeLink, storeName, storeCategory})
  }

  return finalSpyedStores

}

async function updateBotInfoInDatabase(infoToUpdate: ENUM_UPDATE_BOT_INFO, botIndex: string){

  let botObj = await getBotFromDatabase({botNumber: botIndex})

  switch(infoToUpdate) {
    case ENUM_UPDATE_BOT_INFO.INITIAL_INFO:
      botObj.version = VERSION
      botObj.alihunterAuth = `${ALIHUNTER_USER['email']} / ${ALIHUNTER_USER['type']}`
      botObj.loopInterval = Number(SPYBOT_LOOP_INTERVAL)/60
      botObj.lastSetupDateTime = "#"
      botObj.lastCheckDateTime = "#"
      botObj.lastSaleDateTime = "#"
      botObj.cpuUsage = "#"
      botObj.memoryUsage = "#"
      break;
    case ENUM_UPDATE_BOT_INFO.LAST_RESTARTED_TIME:
      botObj.lastSetupDateTime = CURRENT_DATETIME()
      break;
    case ENUM_UPDATE_BOT_INFO.CHECKED_INFO:
      const {usedCpu, usedRAM, totalRAM} = await getOsUsageData()
      botObj.cpuUsage = usedCpu
      botObj.memoryUsage = `${usedRAM}/${totalRAM}`
      botObj.lastCheckDateTime = CURRENT_DATETIME()
      break;
    case ENUM_UPDATE_BOT_INFO.LAST_SALE_TIME:
      botObj.lastSaleDateTime = CURRENT_DATETIME()
      break;
    case ENUM_UPDATE_BOT_INFO.CLEAN_INFO:
      botObj.alihunterAuth = "#"
      botObj.loopInterval = 0
      botObj.lastSetupDateTime = "#"
      botObj.lastCheckDateTime = "#"
      botObj.lastSaleDateTime = "#"
      botObj.cpuUsage = "#"
      botObj.memoryUsage = "#"
      break;
    default:
      // code block
  }


  LOGGER(`Atualizando informações do bot na planilha - ${ENUM_UPDATE_BOT_INFO[infoToUpdate]}`, {from: "SPYBOT", pid: true})
  const updateResponse = await botObj.save()

  return updateResponse

}
