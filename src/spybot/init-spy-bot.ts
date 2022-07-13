import { WORKER_MAX_INSTANCES, CURRENT_DATETIME, LOGGER } from "../../configs/configs"
import { checkIfBotIsAllowedToSpy } from './components/check-spy-conditions'
import { updateBotInfo, ENUM_UPDATE_BOT_INFO } from './components/spy-sheets-api'
import initSpyLooping from "./init-spy-looping"
import Spybot from './models/Spybot'

export default async function initSpyBot(spybot: Spybot): Promise<Spybot | string> {

  try {
    console.log("")
    LOGGER(`Bot ${spybot.botIndex} - foi iniciado`, { from: 'SPYBOT', pid: true })

    await updateBotInfo(ENUM_UPDATE_BOT_INFO.INITIAL_INFO, spybot.botIndex)

    const isBotAllowedToSpy = await checkIfBotIsAllowedToSpy(spybot.botIndex)
    if (isBotAllowedToSpy !== true) { throw new Error(`Erro nas condições de espionagem: ${isBotAllowedToSpy}`) }
    LOGGER(`Bot ${spybot.botIndex} - pode espionar`, { from: 'SPYBOT', pid: true })

    await spybot.init_browser()
    const spybotSetupResult = await spybot.setup_spybot()
    if (spybotSetupResult !== true) { throw new Error(`Erro ao preparar browser para espionagem: ${spybotSetupResult}`) }
    LOGGER(`Bot ${spybot.botIndex} - está pronto para espionar`, { from: 'SPYBOT', pid: true })

    await updateBotInfo(ENUM_UPDATE_BOT_INFO.LAST_RESTARTED_TIME, spybot.botIndex)

    const initialDate = CURRENT_DATETIME('date')
    console.log("")
    LOGGER(`Bot ${spybot.botIndex} - iniciando espionagem - ${initialDate}\n`, { from: "SPYBOT", pid: true })
    global.WORKER.workerSharedInfo.workerData.workerInfo.isSpybotActive = true
    await initSpyLooping(spybot, initialDate)
    return spybot

  } catch (e) {

    LOGGER(`Erro ao iniciar spybot: ${e.message}`, { from: 'SPYBOT', pid: true, isError: true })

    if (spybot.botBrowser){
      LOGGER(`Fechando browser pra evitar múltiplas instâncias do mesmo bot`, { from: 'SPYBOT', pid: true, isError: true })
      await spybot.botBrowser.close()
    }

    return e.message

  } finally {

    LOGGER(`Bot ${spybot.botIndex} - terminou de inciar\n`, { from: 'SPYBOT', pid: true })

  }

}
