import { CURRENT_DATETIME, DELAY, LOGGER, WORKER_MAX_INSTANCES } from '../../../../configs/configs'
import cluster, { Worker } from 'cluster'
import { EMasterCommandsToWorkers } from '../interfaces/EMasterCommandsToWorkers'
import { EWorkerCommandsToMaster } from '../../worker/interfaces/EWorkerCommandsToMaster'
import { IMessageBetweenClusters } from '../../interfaces/IMessageBetweenClusters'
import { IWorkerSharedInformation, IWorkerShortedInformation } from '../../worker/interfaces/IWorkerSharedInformation'
import { IMasterSharedInformation } from '../interfaces/IMasterSharedInformation'

interface ImasterWorkersArr {
  processPid: number,
  id: number,
  botIndex: string,
  dataFromWorker?: IWorkerShortedInformation
}

export default class Master {

  public startedTime: string
  public numberOfReadyWorkers: number
  public workersToCreate: number
  public workersProcessesArr: ImasterWorkersArr[]

  constructor() {
    LOGGER(`Master foi iniciado com sucesso`, { from: 'MASTER', pid: true })

    this.startedTime = CURRENT_DATETIME()
    this.numberOfReadyWorkers = 0
    this.workersToCreate = 0
    this.workersProcessesArr = []
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
      const currentWorkerId = currentWorker.id

      LOGGER(`Worker [${currentWorkerNumber}] criado com PID = ${currentWorkerPid} e ID = [${currentWorkerId}]`, { from: 'MASTER', pid: true })

      const workersObj = {
        processPid: currentWorkerPid,
        id: currentWorkerId,
        botIndex,
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

    LOGGER(`Worker disse que está pronto!`, { from: 'MASTER', pid: true })

    this.numberOfReadyWorkers += 1

  }

  private handleUpdateOnWorkerInformation(newDataObject: IWorkerSharedInformation): void {

    LOGGER(`Recebi informações do worker`, { from: 'MASTER', pid: true })

    const workerProcessPid = newDataObject.workerProcessPid
    const workerIndex = this.workersProcessesArr.findIndex(worker => worker.processPid === workerProcessPid)

    if (workerIndex > -1){

      const workerInfo = newDataObject.workerData

      this.workersProcessesArr[workerIndex].dataFromWorker = {
        ...workerInfo
      }
    }

  }

  private handleRequestForMasterInformation(requesterWorker: any){

    LOGGER(`Manda master info para o bot worker com pid = [${requesterWorker.worker}]`, { from: 'MASTER', pid: true })

    const requesterWorkerObj = this.workersProcessesArr.find(workers => workers.processPid === requesterWorker.worker)

    const objToSend: IMasterSharedInformation = {
      startedTime: this.startedTime,
      spybotIndex: requesterWorkerObj.botIndex
    }

    this.sendCommandToWorkers(EMasterCommandsToWorkers.SEND_MASTER_INFO_TO_WORKER, objToSend, requesterWorkerObj.id)

  }

  // ===========================================================================

  sendMessageToWorkers(message: string, specificWorkerId?: number): void {

    LOGGER(`Manda mensagem para todos os workers [${message}]`, { from: 'MASTER', pid: true })

    const messageBetweenClusters: IMessageBetweenClusters = {
      message
    }

    for (const id in cluster.workers) {
      cluster.workers[id].send(messageBetweenClusters)
    }
  }

  sendCommandToWorkers(cmd: EMasterCommandsToWorkers, data: object, specificWorkerId?: number): void {

    const commandStr = EMasterCommandsToWorkers[cmd]
    LOGGER(`Manda comando para todos os workers: [${commandStr}]`, { from: 'MASTER', pid: true })

    let messageBetweenClusters: IMessageBetweenClusters = {
      command: commandStr
    }

    if (data) { messageBetweenClusters.data = data }

    for (const id in cluster.workers) {
      cluster.workers[id].send(messageBetweenClusters)

      cluster.workers
    }
  }

  // ===========================================================================

  runWhenWorkersAreReady(): Promise<boolean> {

    return new Promise((resolve, reject) => {

      const checkPromiseConditions = () => {

        if (this.numberOfReadyWorkers === this.workersToCreate) {
          this.workersToCreate -= 1
          resolve(true)
        } else {
          setTimeout(checkPromiseConditions, 1000)
        }
      }

      checkPromiseConditions()

    })

  }

  async getDataFromWorker(): Promise<ImasterWorkersArr[]> {

    for(let x = 0; x < this.workersProcessesArr.length; x++){

      const curWorker = this.workersProcessesArr[x]
      const curWorkerPid = curWorker.processPid
      const curWorkerIndex = this.workersProcessesArr.findIndex(worker => worker.processPid === curWorkerPid)

      LOGGER(`${x} - Obtendo dados do worker com pid = [${curWorkerPid}] e index = ${curWorkerIndex}`, { from: 'SERVER', pid: true })

      this.workersProcessesArr[curWorkerIndex].dataFromWorker = {}
      this.sendCommandToWorkers(EMasterCommandsToWorkers.GET_WORKER_INFO, {}, curWorkerPid)

      await this.waitForGetWorkerInfo(curWorkerIndex)
    }

    return this.workersProcessesArr
  }

  private async waitForGetWorkerInfo(workerIndex: number): Promise<void>{

    return new Promise((resolve, reject) => {

      const checkPromiseConditions = () => {

        const currentWorkerInfoObj = this.workersProcessesArr[workerIndex].dataFromWorker

        if (Object.keys(currentWorkerInfoObj).length > 0) {
          resolve()
        } else {
          setTimeout(checkPromiseConditions, 1000)
        }
      }

      checkPromiseConditions()

    })
  }

  // ===========================================================================

}
