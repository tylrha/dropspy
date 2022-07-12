import IStoreSheets from '../../spybot/interfaces/IStoreSheets'

interface IWorkerShortedInformation {
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

interface IWorkerSharedInformation {

  workerProcessPId: number,
  workerInfo?: IWorkerShortedInformation

}

export {IWorkerSharedInformation, IWorkerShortedInformation}