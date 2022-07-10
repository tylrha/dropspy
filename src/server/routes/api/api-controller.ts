import {
  IMPORT_MODULE,
  LOGGER,
  NODE_ENV
} from '../../../../configs/configs'

import Master from '../../../models/Master'

export default async function apieRoute(req, res) {

  const MASTER: Master = global.MASTER

  const {
    numberOfWorkers,
    workersToCreate,
    workersProcessesArr
  } = MASTER

  const responseObj = {
    numberOfWorkers,
    workersToCreate,
    workersProcessesArr
  }
  res.json({ ...responseObj });

}
