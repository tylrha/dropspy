import Worker from "../models/Worker";
import {IWorkerSharedInformation} from './IWorkerSharedInformation'

interface IWorkerGlobals {
  workerCluster?: Worker;
  workerInformation?: IWorkerSharedInformation
}

export {IWorkerGlobals}
