import {
  IMPORT_MODULE,
  LOGGER,
  VERSION,
} from '../../../../configs/configs'
import Master from '../../../clusters/models/Master'

import {Request, Response} from 'express'

export default async function(req: Request, res: Response){
  const masterCluster: Master = global['MASTER'].masterCluster
  return res.send(`DROPSPY IS RUNNING AT VERSION ${VERSION} - ${masterCluster.numberOfReadyWorkers}\n`)
}
