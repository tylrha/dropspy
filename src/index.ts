import { WORKER_MAX_INSTANCES, LOGGER } from '../configs/configs'

import cluster from 'cluster'
import initServer from './server/server';
import Master from './models/Master'
import Worker from './models/Worker'

if (cluster.isPrimary) {

  global.MASTER = new Master(WORKER_MAX_INSTANCES)

  global.MASTER.init()
  global.MASTER.runWhenWorkersAreReady()
    .then((RES) => {
      LOGGER('Todos os worker foram iniciados', {from: 'MASTER', pid: true})
      global.MASTER.sendMessageToAllWorkers("startSpy")
      initServer()
    })

} else {

  const newWorker = new Worker(process)
  newWorker.init()

}
