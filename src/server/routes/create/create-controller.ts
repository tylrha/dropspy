import {
  IMPORT_MODULE,
  NODE_ENV,
  LOGGER,
  WORKER_RESTART_INTERVAL,
  WORKER_MAX_INSTANCES,
  SPYBOT_APP_USER
} from '../../../../configs/configs'

import Master from '../../../clusters/master/models/Master'
import { Request, Response } from 'express'
import { EMasterCommandsToWorkers } from '../../../clusters/master/interfaces/EMasterCommandsToWorkers'

export default async function createWorkerRoute(req: Request, res: Response) {

  const index = req?.query?.index as string

  try {
    const masterCluster: Master = global['MASTER']?.masterCluster
    if (!masterCluster) { throw new Error("Objeto MASTER ainda não foi definido") }

    LOGGER(`/CREATE`, { from: 'SERVER', pid: true })

    if (masterCluster.numberOfReadyWorkers >= WORKER_MAX_INSTANCES) {
      res.send(`WORKERS HAVE REACHED THEIR MAX INSTANCE NUMBER!`)
      return
    }

    let finalIndex = index ? index : SPYBOT_APP_USER
    const isWorkerAlreadyRuning = masterCluster.workersProcessesArr.find(worker => worker.botIndex === finalIndex)

    if (isWorkerAlreadyRuning){
      res.send(`WORKER ${finalIndex} IS ALREADY RUNNING, CHOOSE A DIFERENT BOTINDEX!`)
      return
    }

    res.send(`WORKER ${finalIndex} WILL BE CREATED IN ${WORKER_RESTART_INTERVAL}s`)

    LOGGER(`CRIANDO NOVA INSTÂNCIA EM ${WORKER_RESTART_INTERVAL}s`, { from: 'SERVER', pid: true })
    setTimeout(() => {
      masterCluster.createWorkerInstance(finalIndex)

      masterCluster.runWhenWorkersAreReady().then(async (RES) => {
        LOGGER('Bot foi criado com sucesso', { from: 'SERVER', pid: true })
      })

    }, Number(WORKER_RESTART_INTERVAL) * 1000)

  } catch (e) {
    res.json({ error: e.message })
  }

}
