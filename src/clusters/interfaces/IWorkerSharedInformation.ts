import IStoreSheets from '../../spybot/interfaces/IStoreSheets'

interface IWorkerSharedInformation {
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

export {IWorkerSharedInformation}