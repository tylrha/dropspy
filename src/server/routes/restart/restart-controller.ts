import {
  IMPORT_MODULE,
  NODE_ENV,
  LOGGER
} from '../../../../configs/configs'

import Master from '../../../clusters/models/Master'
import {Request, Response} from 'express'

export default async function restartWorkerRoute(req: Request, res: Response) {

  const masterCluster: Master = global['MASTER'].masterCluster

  LOGGER(`Reiniciando workers: ${masterCluster.numberOfReadyWorkers}`, {from: 'SERVER', pid: true})
  res.send('WORKER RESTARTED')

  if (masterCluster.numberOfReadyWorkers > 0){masterCluster.sendMessageToAllWorkers('quitSpy')}

  LOGGER("CRIANDO NOVA INSTÂNCIA EM 10s", {from: 'SERVER', pid: true})
  setTimeout(() => {
    masterCluster.createWorkerInstances(1)

    masterCluster.runWhenWorkersAreReady().then((RES) => {
      LOGGER('Todos os worker foram iniciados', {from: 'SERVER', pid: true})
      masterCluster.sendMessageToAllWorkers("startSpy")
    })
  }, 10000)

}
