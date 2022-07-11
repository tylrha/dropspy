import {
  IMPORT_MODULE,
  NODE_ENV,
  LOGGER,
  WORKER_RESTART_INTERVAL
} from '../../../../configs/configs'

import Master from '../../../clusters/models/Master'
import {Request, Response} from 'express'

export default async function restartWorkerRoute(req: Request, res: Response) {


  try {
    const masterCluster: Master = global['MASTER']?.masterCluster
    if (!masterCluster) { throw new Error("Objeto MASTER ainda não foi definido") }

    LOGGER(`Reiniciando workers: ${masterCluster.numberOfReadyWorkers}`, {from: 'SERVER', pid: true})
    res.send(`WORKER WILL RESTART IN ${WORKER_RESTART_INTERVAL/60}min`)
  
    if (masterCluster.numberOfReadyWorkers > 0){masterCluster.sendMessageToAllWorkers('quitSpy')}
  
    LOGGER(`CRIANDO NOVA INSTÂNCIA EM ${WORKER_RESTART_INTERVAL/60}min`, {from: 'SERVER', pid: true})
    setTimeout(() => {
      masterCluster.createWorkerInstances(1)
  
      masterCluster.runWhenWorkersAreReady().then((RES) => {
        LOGGER('Todos os worker foram iniciados', {from: 'SERVER', pid: true})
        masterCluster.sendMessageToAllWorkers("startSpy")
      })
    }, Number(WORKER_RESTART_INTERVAL) * 1000)

  } catch (e) {
    res.json({ error: e.message })
  }

}
