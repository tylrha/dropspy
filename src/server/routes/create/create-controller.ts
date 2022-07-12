import {
  IMPORT_MODULE,
  NODE_ENV,
  LOGGER,
  WORKER_RESTART_INTERVAL,
  WORKER_MAX_INSTANCES
} from '../../../../configs/configs'

import Master from '../../../clusters/models/Master'
import { Request, Response } from 'express'
import { EMasterCommandsToWorkers } from '../../../clusters/interfaces/EMasterCommandsToWorkers'

export default async function createWorkerRoute(req: Request, res: Response) {

  const index = req.query.index

  try {
    const masterCluster: Master = global['MASTER']?.masterCluster
    if (!masterCluster) { throw new Error("Objeto MASTER ainda não foi definido") }

    LOGGER(`/CREATE`, { from: 'SERVER', pid: true })

    if (masterCluster.numberOfReadyWorkers >= WORKER_MAX_INSTANCES) {
      res.send(`WORKERS HAVE REACHED THEIR MAX INSTANCE NUMBER!`)
      return
    }

    res.send(`WORKER WILL BE CREATED IN ${WORKER_RESTART_INTERVAL}s`)
    LOGGER(`CRIANDO NOVA INSTÂNCIA EM ${WORKER_RESTART_INTERVAL}s`, { from: 'SERVER', pid: true })
    setTimeout(() => {

      // index
      masterCluster.createWorkerInstances(1)
      masterCluster.runWhenWorkersAreReady().then((RES) => {
        LOGGER('Todos os worker foram iniciados', { from: 'SERVER', pid: true })
        masterCluster.sendCommandToAllWorkers(EMasterCommandsToWorkers.START_SPY)
      })

    }, Number(WORKER_RESTART_INTERVAL) * 1000)

  } catch (e) {
    res.json({ error: e.message })
  }

}
