import {
  IMPORT_MODULE,
  LOGGER,
  NODE_ENV
} from '../../../../configs/configs'
import Master from '../../../models/Master'

export default async function quiteRoute(req, res) {

  const MASTER: Master = global.MASTER

  const exit = req.query.exit

  res.send('WORKER WAS QUITED\n')
  MASTER.sendMessageToAllWorkers('quitSpy')

  if (exit === 'true'){
    process.exit()
  }

}
