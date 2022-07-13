import mongoose from 'mongoose'

import {
  LOGGER,
  CURRENT_DATETIME,
  SPYBOT_LOOP_INTERVAL,
  DATABASE_DATABASE_SPY,
  DATABASE_LOGIN_URL
} from "../../configs/configs";

import { checkIfBotIsAllowedToSpy } from "./components/check-spy-conditions";
import { updateBotInfo, ENUM_UPDATE_BOT_INFO } from "./components/spy-sheets-api";
import updateDatabasePreSpy from './database/update-database-pre-spy'
import Spybot from "./models/Spybot";

export default async function initSpyLooping(spybot: Spybot, initialDate?: string){

  global.WORKER.workerSharedInfo.workerData.spyBotInfo.lastCheckedTime = CURRENT_DATETIME()
  global.WORKER.workerSharedInfo.workerData.spyBotInfo.checkedCount += 1
  spybot.botCheckedTimes += 1;

  LOGGER(`Bot ${spybot.botIndex} - checagem de número [${spybot.botCheckedTimes}]`, {from: "SPYBOT", pid: true})

  const isFirstInit = spybot.botCheckedTimes === 1 ? true : false
  const currentDate = isFirstInit ? initialDate : CURRENT_DATETIME('date')
  const hasChangedSpyDate = isFirstInit ? false : spybot.botInitialSpyDate !== currentDate
  let hasChangedStoreList = false
  if (isFirstInit){spybot.botInitialSpyDate = initialDate}

  try{
    await spybot.pingBotServer()

    await updateBotInfo(ENUM_UPDATE_BOT_INFO.CHECKED_INFO, spybot.botIndex)

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

    const databaseConnectionResult = await mongoose.connect(`${DATABASE_LOGIN_URL}/${DATABASE_DATABASE_SPY}`)
    if (!databaseConnectionResult){throw new Error(`Erro ao abrir conexão com banco de dados`)}
    LOGGER(`Bot ${spybot.botIndex} - conexão estabelecida com banco de dados`, {from: 'SPYBOT', pid: true})

    if (isFirstInit || hasChangedSpyDate || hasChangedStoreList){
      await updateDatabasePreSpy(spybot.botSpyedStoresArr, currentDate)
    }

    if (isFirstInit){await spybot.openSpyStores()}

    await spybot.detectNewSalesInAllStores()

    const closeMongooseResult = mongoose.connection.close()
    if (!closeMongooseResult){throw new Error(`Erro ao fechar conexão com banco de dados`)}
    LOGGER(`Bot ${spybot.botIndex} - conexão fechada com banco de dados`, {from: 'SPYBOT', pid: true})

    loopAgainAfterTime(spybot)

  } catch(e){
    global.WORKER.workerSharedInfo.workerData.workerInfo.isSpybotActive = false
    LOGGER(`ERRO: ${e.message}`, {from: "SPYBOT", pid: true, isError: true})
  }

}

function loopAgainAfterTime(spybot: Spybot) {

  LOGGER(`Bot ${spybot.botIndex} - checando dnv em ${SPYBOT_LOOP_INTERVAL / 60}min\n`, {from: "SPYBOT", pid: true, isError: true})
  setTimeout(async () => {
    await initSpyLooping(spybot)
  }, SPYBOT_LOOP_INTERVAL * 1000)

}
