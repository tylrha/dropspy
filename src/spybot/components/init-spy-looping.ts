import { LOGGER, CURRENT_DATETIME, SPYBOT_LOOP_INTERVAL, DATABASE_LOGIN_URL } from "../../../configs/configs";
import { checkIfBotIsAllowedToSpy } from "./check-spy-conditions";
import { updateBotInfo, ENUM_UPDATE_BOT_INFO } from "./spy-sheets-api";
import updateDatabasePreSpy from '../database/update-database-pre-spy'
import Spybot from "../models/Spybot";

const MONGOOSE_URL = `${DATABASE_LOGIN_URL}/TESTANDO`
import mongoose from 'mongoose'

export default async function initSpyLooping(spybot: Spybot, initialDate?: string){

  spybot.spyCheckedTime = Number(spybot.spyCheckedTime) + 1;
  LOGGER(`Bot ${spybot.botIndex} - checagem de número [${spybot.spyCheckedTime}]`, {from: "SPYBOT", pid: true})

  const isFirstInit = initialDate ? true : false
  const currentDate = isFirstInit ? initialDate : CURRENT_DATETIME('date')
  const hasChangedSpyDate = isFirstInit ? false : spybot.initialSpyDate !== currentDate
  let hasChangedStoreList = false
  if (!isFirstInit){
    await spybot.updateBotSpyedStores()
    hasChangedStoreList = await spybot.hasChangeInSpyedStoresList()
  }
  if (isFirstInit){spybot.initialSpyDate = initialDate}

  try{
    await spybot.pingBotServer()

    await updateBotInfo(ENUM_UPDATE_BOT_INFO.CHECKED_INFO)

    if (!isFirstInit){
      const isBotAllowedToSpy = await checkIfBotIsAllowedToSpy(spybot.botIndex)
      if (isBotAllowedToSpy !== true){throw new Error(`Erro nas condições de espionagem: ${isBotAllowedToSpy}`)}
      LOGGER(`Bot ${spybot.botIndex} - pode espionar`, {from: 'SPYBOT', pid: true})
    }

    const databaseConnectionResult = await mongoose.connect(MONGOOSE_URL)
    if (!databaseConnectionResult){throw new Error(`Erro ao abrir conexão com banco de dados`)}
    LOGGER(`Bot ${spybot.botIndex} - conexão estabelecida com banco de dados`, {from: 'SPYBOT', pid: true})

    await spybot.updateBotSpyedStores()

    if (isFirstInit || hasChangedSpyDate || hasChangedStoreList){
      await updateDatabasePreSpy(spybot.spyedStoresArr, currentDate)
    }

    if (isFirstInit){
      await spybot.openSpyStores()
    }

    await spybot.detectNewSalesInAllStores()

    const closeMongooseResult = mongoose.connection.close()
    if (!closeMongooseResult){throw new Error(`Erro ao fechar conexão com banco de dados`)}
    LOGGER(`Bot ${spybot.botIndex} - conexão fechada com banco de dados`, {from: 'SPYBOT', pid: true})

    loopAgainAfterTime(spybot)

  } catch(e){
    LOGGER(`${e.message}`, {from: "SPYBOT", pid: true, isError: true})
  }

}

function loopAgainAfterTime(spybot: Spybot) {

  LOGGER(`Bot ${spybot.botIndex} - checando dnv em ${SPYBOT_LOOP_INTERVAL / 60}min\n`, {from: "SPYBOT", pid: true, isError: true})
  setTimeout(async () => {
    await initSpyLooping(spybot)
  }, SPYBOT_LOOP_INTERVAL * 1000)

}
