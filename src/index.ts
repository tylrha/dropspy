import cluster from 'cluster'
import initMasterCluster from './clusters/master/init-master-cluster'
import initWorkerCluster from './clusters/worker/init-worker-cluster'

(async () => {

  if (cluster.isPrimary) {

    await initMasterCluster()

  } else if (cluster.isWorker) {

    await initWorkerCluster()

  }

})()
