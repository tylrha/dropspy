import {
  LOGGER,
  WORKER_RESTART_INTERVAL,
  SPYBOT_APP_USER
} from '../../../../configs/configs';

import Master from '../../../clusters/master/models/Master';
import { Request, Response } from 'express';
import { EMasterCommandsToWorkers } from '../../../clusters/master/interfaces/EMasterCommandsToWorkers';

export default async function restartWorkerRoute(req: Request, res: Response) {

  const index = req?.query?.index as string;

  try {
    const masterCluster: Master = global['MASTER']?.masterCluster;
    if (!masterCluster) { throw new Error('Objeto MASTER ainda não foi definido'); }

    LOGGER('/RESTART', { from: 'SERVER', pid: true });

    if (masterCluster.readyWorkers > 0) {
      masterCluster.sendCommandToWorkers(EMasterCommandsToWorkers.CLOSE_WORKER, {});
      res.send(`WORKER WILL RESTART IN ${WORKER_RESTART_INTERVAL}s`);
    } else {
      res.send(`WORKER WILL BE CREATED IN ${WORKER_RESTART_INTERVAL}s`);
    }

    const finalIndex = index ? index : SPYBOT_APP_USER;

    LOGGER(`CRIANDO NOVA INSTÂNCIA EM ${WORKER_RESTART_INTERVAL}s`, { from: 'SERVER', pid: true });
    setTimeout(() => {
      masterCluster.createWorkerInstance(finalIndex);

      masterCluster.runWhenWorkersAreReady().then(() => {
        LOGGER('Todos os worker foram iniciados', { from: 'SERVER', pid: true });
      });
    }, Number(WORKER_RESTART_INTERVAL) * 1000);

  } catch (e) {
    res.json({ error: e.message });
  }

}
