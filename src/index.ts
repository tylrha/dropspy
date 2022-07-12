import cluster from 'cluster'

import { 
  LOGGER, 
  CURRENT_DATETIME, 
  SPYBOT_LOOP_INTERVAL,
  SPYBOT_APP_USER
} from '../configs/configs'

import initServer from './server/server';
import Master from './clusters/models/Master'
import Worker from './clusters/models/Worker'

import { IWorkerGlobals } from './clusters/interfaces/IWorkerGlobals'
import { IMasterGlobals } from './clusters/interfaces/IMasterGlobals'

declare global {
  var WORKER: IWorkerGlobals
  var MASTER: IMasterGlobals
}

(async () => {

  if (cluster.isPrimary) {
    await initMasterCluster()
  } else if (cluster.isWorker) {
    await initWorkerCluster()
  }

})()

async function initMasterCluster(){

  await initServer()

  const masterInstance = new Master()
  masterInstance.createWorkerInstance(SPYBOT_APP_USER)

  masterInstance.runWhenWorkersAreReady().then(async (RES) => {
    LOGGER('Todos os worker foram iniciados', { from: 'MASTER', pid: true })

    global.MASTER = {
      masterCluster: masterInstance,
    }

  })

}

async function initWorkerCluster(){

  const newWorker = new Worker(process)
  await newWorker.init()

  global.WORKER = {
    workerCluster: newWorker,
    workerInformation: {
      workerProcessPId: process.pid,
      workerInfo: {
        loopInterval: SPYBOT_LOOP_INTERVAL/60,
        startedTime: CURRENT_DATETIME(),
        lastRestartedTime: '-',
        lastCheckedTime: '-',

        restartedTimes: 0,
        checkedTimes: 0,

        trackedSales: 0,
        trackedRevenue: 0,

        isSpybotActive: false,
        spyedStores: []
      }

    }
  }
}