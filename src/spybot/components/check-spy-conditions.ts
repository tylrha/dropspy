import {
  LOGGER
} from "../../../configs/configs";

import { getAllBotsArr, getBotsOption } from "./spy-sheets-api";

export {
  getBotIndex,
  checkIfBotIsInList,
  checkIfBotIsAllowedToSpy,
  checkIfCurrentBotIsActive
}

async function checkIfBotIsAllowedToSpy(botname: string){
  const allBotsArr = await getAllBotsArr()
  if (!allBotsArr){return "Erro na lista de bots"}

  const isBotInList = checkIfBotIsInList(allBotsArr, botname)
  if (isBotInList !== true){return isBotInList}

  const isCurrentBotActive = checkIfCurrentBotIsActive(allBotsArr, botname)
  if (isCurrentBotActive !== true){return isCurrentBotActive}

  const botsOption = await getBotsOption()
  if (botsOption !== true){return botsOption}

  return true

}

function getBotIndex(botsArr, botname: string){
  return botsArr.findIndex(bot => bot[1] === botname)
}

function checkIfBotIsInList(botsArr, botname: string) {

  const botIndex = getBotIndex(botsArr, botname)

  if (botIndex === -1) {
    return "Bot não foi encontrado na lista"
  } else {
    return true
  }

}

function checkIfCurrentBotIsActive(botsArr, botname: string) {

  const botIndex = getBotIndex(botsArr, botname)
  const shouldCurrentBotRun = botsArr[botIndex][0] === "Ativo"

  if (shouldCurrentBotRun === true) {
    return true
  } else {
    return `O bot atual ${botname} está desativado`
  }

}
