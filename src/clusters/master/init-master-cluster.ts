import {
  LOGGER,
  SPYBOT_APP_USER,
  NODE_ENV,
  RUNING_TYPE,
} from '../../../configs/configs'

import initServer from '../../server/server';
import Master from './models/Master'

import { IMasterGlobals } from './interfaces/IMasterGlobals'
import connectDatabase from '../../connectDatabase';

declare global {
  var MASTER: IMasterGlobals
}

export default async function initMasterCluster(){

  LOGGER(`Executando DROPSPY em ambiente [${NODE_ENV}] e [${RUNING_TYPE}]`, { from: 'MASTER', pid: true })

  await initServer()

  const masterInstance = new Master()
  masterInstance.createWorkerInstance(SPYBOT_APP_USER)


  masterInstance.runWhenWorkersAreReady().then(async (RES) => {
    LOGGER('Todos os worker foram iniciados\n', { from: 'MASTER', pid: true })

    global.MASTER = {
      masterCluster: masterInstance
    }

  })

}
