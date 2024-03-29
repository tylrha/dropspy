import {
  LOGGER
} from '../../../../configs/configs';

import Master from '../../../clusters/master/models/Master';

import { Request, Response } from 'express';

export default async function apieRoute(req: Request, res: Response) {

  console.log('');
  LOGGER('/API', { from: 'SERVER', pid: true });

  try {
    const masterCluster: Master = global['MASTER']?.masterCluster;
    if (!masterCluster) { throw new Error('Objeto MASTER ainda não foi definido'); }

    const readyWorkers = global['MASTER']?.masterCluster?.readyWorkers;
    const workersToCreate = global['MASTER']?.masterCluster?.workersToCreate;
    const workersProcessesArr = global['MASTER']?.masterCluster?.workersProcessesArr;

    const responseObj = {
      readyWorkers,
      workersToCreate,
      workersProcessesArr
    };

    if (masterCluster.readyWorkers > 0) {
      LOGGER('Esperando dados dos workers!', { from: 'SERVER', pid: true });
      masterCluster.workersProcessesArr = await masterCluster.getDataFromWorker();
      LOGGER('Informações foram recebidas dos workers!', { from: 'SERVER', pid: true });
    }
    res.json({ ...responseObj });

  } catch (e) {
    res.json({ error: e.message });
  }

  console.log('');

}
