import {
  DELAY,
  IMPORT_MODULE,
  LOGGER,
  NODE_ENV
} from '../../../../configs/configs'

import Master from '../../../clusters/master/models/Master'

import {Request, Response} from 'express'

export default async function apieRoute(req: Request, res: Response) {

  LOGGER(`/API`, {from: 'SERVER', pid: true})

  try{
    const masterCluster: Master = global['MASTER']?.masterCluster
    if (!masterCluster){throw new Error("Objeto MASTER ainda não foi definido")}

    const {
      numberOfReadyWorkers,
      workersToCreate,
      workersProcessesArr
    } = global['MASTER']?.masterCluster

    let responseObj = {
      numberOfReadyWorkers,
      workersToCreate,
      workersProcessesArr
    }

    if (masterCluster.numberOfReadyWorkers > 0){
      LOGGER(`Esperando dados dos workers!`, {from: "SERVER", pid: true})
      masterCluster.workersProcessesArr = await masterCluster.getDataFromWorker()
    }

    res.json({ ...responseObj });

  }catch(e){
    res.json({error: e.message})
  }

}
