import {
  LOGGER,
  CURRENT_DATETIME,
  SPYBOT_LOOP_INTERVAL,
  DATABASE_DATABASE_SPY,
  DATABASE_LOGIN_URL
} from "../../../configs/configs";

import { checkIfBotIsAllowedToSpy } from "./check-spy-conditions";
import { updateBotInfo, ENUM_UPDATE_BOT_INFO } from "./spy-sheets-api";
import updateDatabasePreSpy from '../database/update-database-pre-spy'
import Spybot from "../models/Spybot";

const MONGOOSE_URL = `${DATABASE_LOGIN_URL}/${DATABASE_DATABASE_SPY}`
import mongoose from 'mongoose'

export default async function initSpyLooping(spybot: Spybot, initialDate?: string){

  spybot.spyCheckedTime = Number(spybot.spyCheckedTime) + 1;
  LOGGER(`Bot ${spybot.botIndex} - checagem de número [${spybot.spyCheckedTime}]`, {from: "SPYBOT", pid: true})

  const isFirstInit = spybot.spyCheckedTime === 1 ? true : false
  const currentDate = isFirstInit ? initialDate : CURRENT_DATETIME('date')
  const hasChangedSpyDate = isFirstInit ? false : spybot.initialSpyDate !== currentDate
  let hasChangedStoreList = false
  if (isFirstInit){spybot.initialSpyDate = initialDate}

  try{
    await spybot.pingBotServer()

    await updateBotInfo(ENUM_UPDATE_BOT_INFO.CHECKED_INFO)

    if (!isFirstInit){
      const isBotAllowedToSpy = await checkIfBotIsAllowedToSpy(spybot.botIndex)
      if (isBotAllowedToSpy !== true){
        LOGGER(`Bot ${spybot.botIndex} - bot não pode espionar [${isBotAllowedToSpy}]`, {from: 'SPYBOT', pid: true})
        await spybot.closeAllPagesAndLetBlankPage()
        loopAgainAfterTime(spybot)
        return
      }
      LOGGER(`Bot ${spybot.botIndex} - pode espionar`, {from: 'SPYBOT', pid: true})
    }

    await spybot.updateBotSpyedStores()

    if (!isFirstInit){
      hasChangedStoreList = await spybot.hasChangeInSpyedStoresList()
      if (hasChangedStoreList){await spybot.handleSpyListChanges()}
    }

    const databaseConnectionResult = await mongoose.connect(MONGOOSE_URL)
    if (!databaseConnectionResult){throw new Error(`Erro ao abrir conexão com banco de dados`)}
    LOGGER(`Bot ${spybot.botIndex} - conexão estabelecida com banco de dados`, {from: 'SPYBOT', pid: true})

    if (isFirstInit || hasChangedSpyDate || hasChangedStoreList){
      await updateDatabasePreSpy(spybot.spyedStoresArr, currentDate)
    }

    if (isFirstInit){await spybot.openSpyStores()}

    await spybot.detectNewSalesInAllStores()

    const closeMongooseResult = mongoose.connection.close()
    if (!closeMongooseResult){throw new Error(`Erro ao fechar conexão com banco de dados`)}
    LOGGER(`Bot ${spybot.botIndex} - conexão fechada com banco de dados`, {from: 'SPYBOT', pid: true})

    loopAgainAfterTime(spybot)

  } catch(e){
    console.log("ERRO")
    LOGGER(`${e.message}`, {from: "SPYBOT", pid: true, isError: true})
  }

}

function loopAgainAfterTime(spybot: Spybot) {

  LOGGER(`Bot ${spybot.botIndex} - checando dnv em ${SPYBOT_LOOP_INTERVAL / 60}min\n`, {from: "SPYBOT", pid: true, isError: true})
  setTimeout(async () => {
    await initSpyLooping(spybot)
  }, SPYBOT_LOOP_INTERVAL * 1000)

}
