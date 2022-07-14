import {
  LOGGER,
  CURRENT_DATETIME,
  SPYBOT_LOOP_INTERVAL,
} from '../../../configs/configs'

import Worker from './models/Worker'

import { IWorkerGlobals } from './interfaces/IWorkerGlobals'

declare global {
  var WORKER: IWorkerGlobals
}

export default async function initWorkerCluster(){

  const newWorker = new Worker(process)
  await newWorker.initWorker()

  setTimeout(async () => {
    await newWorker.startSpybot()
  }, 5000);

  global.WORKER = {
    workerCluster: newWorker,
    workerSharedInfo: {
      workerProcessPid: process.pid,
      workerData: {
        workerInfo: {
          loopInterval: SPYBOT_LOOP_INTERVAL/60,
          startedTime: CURRENT_DATETIME(),
          isSpybotActive: false,
        },
        spyBotInfo: {
          lastCheckedTime: '-',
          checkedCount: 0,
          lastSaleTime: '-',
          salesCount: 0,
          salesRevenue: 0,
          spyedStores: []
        }
      }
    }
  }
}
