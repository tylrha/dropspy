import cluster from 'cluster'

import {
  LOGGER,
  CURRENT_DATETIME,
  SPYBOT_LOOP_INTERVAL,
  SPYBOT_APP_USER,
  NODE_ENV,
  RUNING_TYPE,
} from '../configs/configs'

import initMasterCluster from './clusters/master/init-master-cluster'
import initWorkerCluster from './clusters/worker/init-worker-cluster'

(async () => {

  if (cluster.isPrimary) {
    await initMasterCluster()
  } else if (cluster.isWorker) {
    await initWorkerCluster()
  }

})()


