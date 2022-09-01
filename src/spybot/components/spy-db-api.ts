import {
  VERSION,
  CURRENT_DATETIME,
  SPYBOT_LOOP_INTERVAL,
  LOGGER,
  ALIHUNTER_USER,
} from '../../../configs/configs';

import getOsUsageData from '../../../utils/functions/getOsUsageData';
import { Admin } from '../database/models/Admin';
import { getBotFromDatabase } from '../database/models/Bot';
import { getStoreFromDatabase } from '../database/models/Store';

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
};

/* -------------------------------------------------------------------------- */

async function checkIfBotIsAllowedToSpyInDatabase(botIndex: string) {

  const botObj = await getBotFromDatabase({ botNumber: botIndex });
  const isBotAllowed = botObj.status === 'active';
  if (!isBotAllowed) { return 'O bot está desativado'; }

  const adminInfo: any = await Admin.findOne({ name: 'options' });
  const isSpyAllowed = adminInfo.botStatus === 'active';
  if (!isSpyAllowed) { return `Os bots estão em ${adminInfo.botStatus}`; }

  return true;

}

async function getSpyedStoresInDatabase(botIndex: string) {

  const botObj = await getBotFromDatabase({ botNumber: botIndex });

  const spyedStores = botObj.spyedStores;
  const finalSpyedStores = [];
  for (let x = 0; x < spyedStores.length; x++) {
    const completStore = await getStoreFromDatabase({ storeLink: spyedStores[x] });
    const { storeLink, storeName, storeCategory } = completStore;
    finalSpyedStores.push({ storeLink, storeName, storeCategory });
  }

  return finalSpyedStores;

}

async function updateBotInfoInDatabase(infoToUpdate: ENUM_UPDATE_BOT_INFO, botIndex: string) {

  const botObj = await getBotFromDatabase({ botNumber: botIndex });

  const { usedCpu, usedRAM, totalRAM } = await getOsUsageData();

  switch (infoToUpdate) {
  case ENUM_UPDATE_BOT_INFO.INITIAL_INFO:
    botObj.version = VERSION;
    botObj.alihunterAuth = `${ALIHUNTER_USER['email']} / ${ALIHUNTER_USER['type']}`;
    botObj.loopInterval = Number(SPYBOT_LOOP_INTERVAL) / 60;
    botObj.lastSetupDateTime = '#';
    botObj.lastCheckDateTime = '#';
    botObj.lastSaleDateTime = '#';
    botObj.cpuUsage = '#';
    botObj.memoryUsage = '#';
    break;
  case ENUM_UPDATE_BOT_INFO.LAST_RESTARTED_TIME:
    botObj.lastSetupDateTime = CURRENT_DATETIME();
    break;
  case ENUM_UPDATE_BOT_INFO.CHECKED_INFO:
    botObj.cpuUsage = usedCpu;
    botObj.memoryUsage = `${usedRAM}/${totalRAM}`;
    botObj.lastCheckDateTime = CURRENT_DATETIME();
    break;
  case ENUM_UPDATE_BOT_INFO.LAST_SALE_TIME:
    botObj.lastSaleDateTime = CURRENT_DATETIME();
    break;
  case ENUM_UPDATE_BOT_INFO.CLEAN_INFO:
    botObj.alihunterAuth = '#';
    botObj.loopInterval = 0;
    botObj.lastSetupDateTime = '#';
    botObj.lastCheckDateTime = '#';
    botObj.lastSaleDateTime = '#';
    botObj.cpuUsage = '#';
    botObj.memoryUsage = '#';
    break;
  default:
    // code block
  }


  LOGGER(`Atualizando informações do bot na planilha - ${ENUM_UPDATE_BOT_INFO[infoToUpdate]}`, { from: 'SPYBOT', pid: true });
  const updateResponse = await botObj.save();

  return updateResponse;

}
