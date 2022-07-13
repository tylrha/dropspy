import IStoreSheets from '../../../spybot/interfaces/IStoreSheets'

interface ISharedStore extends IStoreSheets {
  salesCount?: number,
  salesRevenue?: number,
}

interface IWorkerShortedInformation {
  workerInfo?: {
    loopInterval?: number,
    startedTime?: string,
    isSpybotActive?: boolean,
    botStep?: string
  },
  spyBotInfo?: {
    lastCheckedTime?: string,
    checkedCount?: number,
    lastSaleTime?: string,
    salesCount?: number,
    salesRevenue?: number,
    spyedStores?: ISharedStore[],
  }
}

interface IWorkerSharedInformation {
  workerProcessPid?: number,
  workerData?: IWorkerShortedInformation
}

export {
  ISharedStore,
  IWorkerShortedInformation,
  IWorkerSharedInformation
}
