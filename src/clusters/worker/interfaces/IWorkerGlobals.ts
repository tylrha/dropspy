import Worker from '../models/Worker';
import { IWorkerSharedInformation } from './IWorkerSharedInformation';

interface IWorkerGlobals {
  workerCluster?: Worker;
  workerSharedInfo?: IWorkerSharedInformation;
}

export { IWorkerGlobals };
