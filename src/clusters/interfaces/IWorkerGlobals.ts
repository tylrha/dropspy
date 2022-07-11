import Worker from "../models/Worker";

interface IWorkerGlobals {
  workerProcess: NodeJS.Process;
  workerCluster?: Worker;
}

export {IWorkerGlobals}
