import {
  IMPORT_MODULE,
  NODE_ENV,
  LOGGER
} from '../../../../configs/configs'

import Master from '../../../models/Master'

export default async function restartWorkerRoute(req, res) {

  const MASTER: Master = global.MASTER

  LOGGER(`Número de workers: ${MASTER.numberOfWorkers}`, {from: 'SERVER', pid: true})
  res.send('WORKER RESTARTED')

  if (MASTER.numberOfWorkers > 0){MASTER.sendMessageToAllWorkers('quitSpy')}

  LOGGER("CRIANDO NOVA INSTÂNCIA EM 10s")
  setTimeout(() => {
    MASTER.createWorkerInstances(1)

    MASTER.runWhenWorkersAreReady()
    .then((RES) => {
      LOGGER('Todos os worker foram iniciados', {from: 'SERVER', pid: true})
      MASTER.sendMessageToAllWorkers("startSpy")
    })
  }, 10000)

}
