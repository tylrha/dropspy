import Worker from "../models/Worker";
import IStoreSheets from '../../spybot/interfaces/IStoreSheets'

interface IWorkerInformation {
  loopInterval?: number,

  startedTime?: string,
  lastRestartedTime?: string,
  lastCheckedTime?: string,

  restartedTimes?: number,
  checkedTimes?: number,

  trackedSales?: number,
  trackedRevenue?: number,

  spyedStores?: IStoreSheets[],
  isSpybotActive?: boolean
}

interface IWorkerGlobals {
  workerCluster?: Worker;
  workerInformation?: IWorkerInformation
}

export {IWorkerGlobals}
