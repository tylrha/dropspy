import {
  IMPORT_MODULE,
  LOGGER,
  NODE_ENV
} from '../../../../configs/configs'
import Master from '../../../clusters/models/Master'

import { Request, Response } from 'express'

export default async function quiteRoute(req: Request, res: Response) {

  const exit = req.query.exit

  try {
    const masterCluster: Master = global['MASTER']?.masterCluster
    if (!masterCluster) { throw new Error("Objeto MASTER ainda não foi definido") }

    res.send('WORKER WAS QUITED\n')
    masterCluster.sendMessageToAllWorkers('quitSpy')

    if (exit === 'true') { process.exit() }

  } catch (e) {
    res.json({ error: e.message })
  }

}
