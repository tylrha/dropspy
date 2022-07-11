import {
  IMPORT_MODULE,
  LOGGER,
  NODE_ENV
} from '../../../../configs/configs'
import Master from '../../../clusters/models/Master'

import {Request, Response} from 'express'

export default async function quiteRoute(req: Request, res: Response){

  const masterCluster: Master = global['MASTER'].masterCluster
  const exit = req.query.exit

  res.send('WORKER WAS QUITED\n')
  masterCluster.sendMessageToAllWorkers('quitSpy')

  if (exit === 'true'){process.exit()}

}
