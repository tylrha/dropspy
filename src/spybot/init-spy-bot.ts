import { WORKER_MAX_INSTANCES, CURRENT_DATETIME, SPYBOT_APP_USER, LOGGER } from "../../configs/configs"
import { checkIfBotIsAllowedToSpy } from './components/check-spy-conditions'
import { updateBotInfo, ENUM_UPDATE_BOT_INFO } from './components/spy-sheets-api'
import initSpyLooping from "./init-spy-looping"
import Spybot from './models/Spybot'

export default async function initSpyBot(){

  const spybot = new Spybot()

  try {
    console.log("")
    LOGGER(`Bot ${spybot.botIndex} - foi iniciado`, {from: 'SPYBOT', pid: true})

    await updateBotInfo(ENUM_UPDATE_BOT_INFO.INITIAL_INFO)

    const isBotAllowedToSpy = await checkIfBotIsAllowedToSpy(SPYBOT_APP_USER)
    if (isBotAllowedToSpy !== true){throw new Error(`Erro nas condições de espionagem: ${isBotAllowedToSpy}`)}
    LOGGER(`Bot ${spybot.botIndex} - pode espionar`, {from: 'SPYBOT', pid: true})

    await spybot.init_browser()
    const spybotSetupResult = await spybot.setup_spybot()
    if (spybotSetupResult !== true){ throw new Error(`Erro ao preparar browser para espionagem: ${spybotSetupResult}`) }
    LOGGER(`Bot ${spybot.botIndex} - está pronto para espionar`, {from: 'SPYBOT', pid: true})

    await updateBotInfo(ENUM_UPDATE_BOT_INFO.LAST_RESTARTED_TIME)

    const initialDate = CURRENT_DATETIME('date')
    console.log("")
    LOGGER(`Bot ${spybot.botIndex} - iniciando espionagem - ${initialDate}\n`, {from: "SPYBOT", pid: true})
    await initSpyLooping(spybot, initialDate)

  } catch (e) {
    LOGGER(`Erro: ${e.message}`, {from: 'SPYBOT', pid: true, isError: true})
  } finally{
    LOGGER(`Bot ${spybot.botIndex} - terminou de inciar\n`, {from: 'SPYBOT', pid: true})
    return spybot
  }

}
