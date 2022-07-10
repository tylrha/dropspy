import {
  IMPORT_MODULE,
  LOGGER,
  VERSION,
} from '../../../../configs/configs'
import Master from '../../../models/Master'

export default async function(req, res){

  const MASTER: Master = global.MASTER

  return res.send(`DROPSPY IS RUNNING AT VERSION ${VERSION} - ${MASTER.numberOfWorkers}\n`)
}
