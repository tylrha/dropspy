import { CURRENT_DATETIME, LOGGER, WORKER_MAX_INSTANCES } from '../../../configs/configs'
import cluster, { Worker } from 'cluster'
import { EMasterCommandsToWorkers } from '../interfaces/EMasterCommandsToWorkers'
import { EWorkerCommandsToMaster } from '../interfaces/EWorkerCommandsToMaster'
import { IMessageBetweenClusters } from '../interfaces/IMessageBetweenClusters'
import { IWorkerSharedInformation } from '../interfaces/IWorkerSharedInformation'
import { IMasterSharedInformation } from '../interfaces/IMasterSharedInformation'

interface ImasterWorkersArr {
  processPid: number,
  botIndex: string
}

export default class Master {

  public startedTime: string
  public numberOfReadyWorkers: number
  public workersToCreate: number
  public workersProcessesArr: ImasterWorkersArr[]
  public dataFromWorker: IWorkerSharedInformation

  constructor() {
    LOGGER(`Master foi iniciado com sucesso`, { from: 'MASTER', pid: true })

    this.startedTime = CURRENT_DATETIME()
    this.numberOfReadyWorkers = 0
    this.workersToCreate = 0
    this.workersProcessesArr = []
    // this.dataFromWorker
  }

  // ===========================================================================

  createWorkerInstance(botIndex?: string): boolean {

    const currentWorkerNumber = this.workersToCreate + this.numberOfReadyWorkers + 1
    LOGGER(`Criando novo worker: [${currentWorkerNumber}] -> [${botIndex}]`, { from: 'MASTER', pid: true })      

    try{
      if (currentWorkerNumber > WORKER_MAX_INSTANCES){throw new Error(`Número de workers chegou ao limite de ${WORKER_MAX_INSTANCES}`)}
      this.workersToCreate += 1
  
      const currentWorker: Worker = cluster.fork()
      const currentWorkerPid = currentWorker.process.pid
      LOGGER(`Worker [${currentWorkerNumber}] criado com PID = ${currentWorkerPid}`, { from: 'MASTER', pid: true })

      const workersObj = {
        processPid: currentWorkerPid,
        botIndex
      }

      this.workersProcessesArr.push(workersObj)
      this.setupMasterEventsInWorker(currentWorker)

      return true
    }catch(e){
      LOGGER(`Erro ao criar instância de Worker: ${e.message}`, { from: 'MASTER', pid: true })
      return false
    }
  }

  setupMasterEventsInWorker(worker: Worker): void {

    worker.on('message', (msgObj: IMessageBetweenClusters) => {

      const { command, data, message } = msgObj

      if (message) {
        LOGGER(`Msg do worker ${worker.process.pid} pro master: ${message}`, { from: 'MASTER', pid: true })
        return
      }

      if (command) {

        const commandIndex = EWorkerCommandsToMaster[command]
        const commandStr = EWorkerCommandsToMaster[commandIndex]
        LOGGER(`Comando recebido do worker: [${commandStr}]`, { from: 'MASTER', pid: true })

        if (commandIndex === EWorkerCommandsToMaster.SET_WORKER_AS_READY) { this.handleUpdateOnWorkerReadyState() }
        if (commandIndex === EWorkerCommandsToMaster.SEND_WORKER_INFO_TO_MASTER) { this.handleUpdateOnWorkerInformation(data) }
        if (commandIndex === EWorkerCommandsToMaster.GET_MASTER_INFO) { this.handleRequestForMasterInformation(data) }

      }

    });

    worker.on('exit', () => {
      const currentWorkerPid = worker.process.pid
      LOGGER(`Fechou o worker ${currentWorkerPid}`, { from: 'MASTER', pid: true })
      this.numberOfReadyWorkers -= 1

      const curWorkerIndex = this.workersProcessesArr.findIndex(el => el.processPid === currentWorkerPid)
      if (curWorkerIndex > -1) {
        this.workersProcessesArr.splice(curWorkerIndex, 1)
      }
    });

    LOGGER(`Master events foi definido pro worker com PID = ${worker.process.pid}`, { from: 'MASTER', pid: true })
  }

  // ===========================================================================

  private handleUpdateOnWorkerReadyState(): void {
    this.numberOfReadyWorkers += 1
    this.workersToCreate -= 1
  }

  private handleUpdateOnWorkerInformation(newDataObject: IWorkerSharedInformation): void {

    LOGGER(`Recebi informações do worker`, { from: 'MASTER', pid: true })
    this.dataFromWorker = newDataObject
  }

  private handleRequestForMasterInformation(requesterWorker: any){

    LOGGER(`Manda master info para o bot worker com pid = [${requesterWorker.worker}]`, { from: 'MASTER', pid: true })

    const requesterWorkerObj = this.workersProcessesArr.find(workers => workers.processPid === requesterWorker.worker)
    const objToSend: IMasterSharedInformation = {
      startedTime: this.startedTime,
      spybotIndex: requesterWorkerObj.botIndex
    }

    this.sendCommandToAllWorkers(EMasterCommandsToWorkers.SEND_MASTER_INFO_TO_WORKER, objToSend)

  }

  // ===========================================================================

  sendMessageToAllWorkers(message: string): void {

    LOGGER(`Manda mensagem para todos os workers [${message}]`, { from: 'MASTER', pid: true })

    const messageBetweenClusters: IMessageBetweenClusters = {
      message
    }

    for (const id in cluster.workers) {
      cluster.workers[id].send(messageBetweenClusters)
    }
  }

  sendCommandToAllWorkers(cmd: EMasterCommandsToWorkers, data?: object): void {

    const commandStr = EMasterCommandsToWorkers[cmd]
    LOGGER(`Manda comando para todos os workers: [${commandStr}]`, { from: 'MASTER', pid: true })

    let messageBetweenClusters: IMessageBetweenClusters = {
      command: commandStr
    }

    if (data) { messageBetweenClusters.data = data }

    for (const id in cluster.workers) {
      cluster.workers[id].send(messageBetweenClusters)
    }
  }

  // ===========================================================================

  runWhenWorkersAreReady(): Promise<boolean> {

    return new Promise((resolve, reject) => {

      const checkPromiseConditions = () => {
        if (this.numberOfReadyWorkers === this.workersToCreate) {
          resolve(true)
        } else {
          setTimeout(checkPromiseConditions, 1000)
        }
      }

      checkPromiseConditions()

    })

  }

  async getDataFromWorker(): Promise<object> {

    this.dataFromWorker = undefined
    this.sendCommandToAllWorkers(EMasterCommandsToWorkers.GET_WORKER_INFO)

    return new Promise((resolve, reject) => {

      const checkPromiseConditions = () => {
        if (this.dataFromWorker !== undefined) {
          resolve(this.dataFromWorker)
        } else {
          setTimeout(checkPromiseConditions, 1000)
        }
      }

      checkPromiseConditions()

    })

  }

  // ===========================================================================

}
