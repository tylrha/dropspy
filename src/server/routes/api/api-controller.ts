import {
  DELAY,
  IMPORT_MODULE,
  LOGGER,
  NODE_ENV
} from '../../../../configs/configs'

import Master from '../../../clusters/models/Master'

import {Request, Response} from 'express'
import { EMasterCommandsToWorkers } from '../../../clusters/interfaces/EMasterCommandsToWorkers'

export default async function apieRoute(req: Request, res: Response) {

  try{
    const masterCluster: Master = global['MASTER']?.masterCluster
    if (!masterCluster){throw new Error("Objeto MASTER ainda não foi definido")}

    const {
      numberOfReadyWorkers,
      workersToCreate,
      workersProcessesArr
    } = masterCluster

    const dataFromWorker = await masterCluster.getDataFromWorker()

    const responseObj = {
      numberOfReadyWorkers,
      workersToCreate,
      workersProcessesArr,
      dataFromWorker
    }

    res.json({ ...responseObj });

  }catch(e){
    res.json({error: e.message})
  }

}
