// import cluster from 'cluster'
// import initMasterCluster from './clusters/master/init-master-cluster'
// import initWorkerCluster from './clusters/worker/init-worker-cluster'

import { LOGGER } from "../configs/configs";

(async () => {

  // if (cluster.isPrimary) {

  //   await initMasterCluster()

  // } else if (cluster.isWorker) {

  //   await initWorkerCluster()

  // }

  LOGGER("TESTANDO LOGER", {from: "MASTER"})
  LOGGER("TESTANDO LOGER", {from: "MASTER", isError: true})

  await LOGGER("TESTANDO LOGER", {from: "MASTER", logger: "mongodb"})
  // await LOGGER("TESTANDO LOGER", {from: "MASTER", logger: "whatsapp"})
  // await LOGGER("TESTANDO LOGER", {from: "MASTER", logger: "telegram"})

})()
