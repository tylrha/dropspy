import { WORKER_MAX_INSTANCES, LOGGER, CURRENT_DATETIME, SPYBOT_LOOP_INTERVAL } from '../configs/configs'

import cluster from 'cluster'
import initServer from './server/server';
import Master from './clusters/models/Master'
import Worker from './clusters/models/Worker'

import { IWorkerGlobals } from './clusters/interfaces/IWorkerGlobals'
import { IMasterGlobals } from './clusters/interfaces/IMasterGlobals'
import { EMasterCommandsToWorkers } from './clusters/interfaces/EMasterCommandsToWorkers'

declare global {
  var WORKER: IWorkerGlobals
  var MASTER: IMasterGlobals
}

(async () => {

  if (cluster.isPrimary) {

    await initServer()

    const masterInstance = new Master()
    masterInstance.createWorkerInstances(WORKER_MAX_INSTANCES)

    masterInstance.runWhenWorkersAreReady().then(async (RES) => {
      LOGGER('Todos os worker foram iniciados', { from: 'MASTER', pid: true })

      masterInstance.sendCommandToAllWorkers(EMasterCommandsToWorkers.START_SPY)

      global.MASTER = {
        masterCluster: masterInstance,
      }

    })

  } else if (cluster.isWorker) {

    const newWorker = new Worker(process)
    newWorker.init()

    global.WORKER = {
      workerCluster: newWorker,
      workerInformation: {
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

})()
