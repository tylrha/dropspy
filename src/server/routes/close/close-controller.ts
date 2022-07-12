import {
  IMPORT_MODULE,
  LOGGER,
  NODE_ENV
} from '../../../../configs/configs'
import Master from '../../../clusters/models/Master'

import { Request, Response } from 'express'

import { EMasterCommandsToWorkers } from '../../../clusters/interfaces/EMasterCommandsToWorkers'

export default async function quiteRoute(req: Request, res: Response) {

  const exit = req.query.exit

  LOGGER(`/CLOSE`, { from: 'SERVER', pid: true })

  try {
    const masterCluster: Master = global['MASTER']?.masterCluster
    if (!masterCluster) { throw new Error("Objeto MASTER ainda não foi definido") }

    if (masterCluster.numberOfReadyWorkers > 0) {
      masterCluster.sendCommandToWorkers(EMasterCommandsToWorkers.CLOSE_WORKER, {})
      if (exit === 'true') { process.exit() }
      res.send('WORKER WAS CLOSE\n')
    } else {
      res.send('THERE ARE NO WORKERS TO CLOSE\n')
    }

  } catch (e) {
    res.json({ error: e.message })
  }

}
