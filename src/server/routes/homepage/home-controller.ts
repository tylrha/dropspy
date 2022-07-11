import {
  IMPORT_MODULE,
  LOGGER,
  VERSION,
} from '../../../../configs/configs'
import Master from '../../../clusters/models/Master'

import {Request, Response} from 'express'

export default async function(req: Request, res: Response){

  try{
    const masterCluster: Master = global['MASTER']?.masterCluster
    if (!masterCluster){throw new Error("Objeto MASTER ainda não foi definido")}

    const {
      numberOfReadyWorkers,
    } = masterCluster

    res.send(`DROPSPY IS RUNNING AT VERSION ${VERSION} - ${numberOfReadyWorkers}\n`)

  }catch(e){
    res.json({error: e.message})
  }

}
