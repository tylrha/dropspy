import { LOGGER } from '../../../configs/configs'
import cluster, {Worker} from 'cluster'
import { EMasterCommandsToWorkers } from '../interfaces/EMasterCommandsToWorkers'
import { EWorkerCommandsToMaster } from '../interfaces/EWorkerCommandsToMaster'
import { IMessageBetweenClusters } from '../interfaces/IMessageBetweenClusters'

export default class Master {

  public numberOfReadyWorkers: number
  public workersToCreate: number
  public workersProcessesArr: number[]
  public dataFromWorker: object

  constructor() {
    LOGGER(`Master foi iniciado com sucesso`, {from: 'MASTER', pid: true})

    this.numberOfReadyWorkers = 0
    this.workersToCreate = 0
    this.workersProcessesArr = []
  }

  // ===========================================================================

  createWorkerInstances(workersToCreate: number): void {

    this.workersToCreate = workersToCreate

    for (let x = 0; x <= workersToCreate - 1; x++) {
      const currentWorker: Worker = cluster.fork()

      const currentWorkerPid = currentWorker.process.pid
      LOGGER(`Worker [${x + 1}] criado com PID = ${currentWorkerPid}`, {from: 'MASTER', pid: true})
      this.workersProcessesArr.push(currentWorkerPid)
      this.setupMasterEvents(currentWorker)
    }
  }

  runWhenWorkersAreReady(): Promise<boolean> {

    return new Promise((resolve, reject) => {

      const checkPromiseConditions = () => {
        if (this.numberOfReadyWorkers === this.workersToCreate) {
          this.workersToCreate = 0
          resolve(true)
        } else {
          setTimeout(checkPromiseConditions, 1000)
        }
      }

      checkPromiseConditions()

    })

  }

  async getDataFromWorker(): Promise<object>{

    this.dataFromWorker = undefined
    await this.sendCommandToAllWorkers(EMasterCommandsToWorkers.GET_WORKER_INFO)

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

  async sendMessageToAllWorkers(message: string) {

    LOGGER(`Manda mensagem para todos os workers [${message}]`, {from: 'MASTER', pid: true})

    const messageBetweenClusters: IMessageBetweenClusters = {
      message
    }

    for (const id in cluster.workers) {
      cluster.workers[id].send(messageBetweenClusters)
    }
  }

  async sendCommandToAllWorkers(cmd: EMasterCommandsToWorkers, data?: object): Promise<void>{

    const commandStr = EMasterCommandsToWorkers[cmd]
    LOGGER(`Manda comando para todos os workers: [${commandStr}]`, {from: 'MASTER', pid: true})

    let messageBetweenClusters: IMessageBetweenClusters = {
      command: commandStr
    }

    if (data) { messageBetweenClusters.data = data }

    for (const id in cluster.workers) {
      cluster.workers[id].send(messageBetweenClusters)
    }
  }

  setupMasterEvents(worker: Worker): void {

    worker.on('message', (msgObj: IMessageBetweenClusters) => {

      const {command, data, message} = msgObj

      if (command){
        const commandIndex = EWorkerCommandsToMaster[command]
        if (commandIndex === EWorkerCommandsToMaster.WORKER_IS_READY){this.handleReadyWorkerCommand()}
        if (commandIndex === EWorkerCommandsToMaster.UPDATE_WORKER_INFO){this.handleUpdateWorkerinfoCommand(data)}
      }

      if (message){
        LOGGER(`Msg do worker ${worker.process.pid} pro master: ${message}`, {from: 'MASTER', pid: true})
      }

    });

    worker.on('exit', () => {
      const currentWorkerPid = worker.process.pid
      LOGGER(`Fechou o worker ${currentWorkerPid}`, {from: 'MASTER', pid: true})
      this.numberOfReadyWorkers -= 1

      const curWorkerIndex = this.workersProcessesArr.findIndex(el => el === currentWorkerPid)
      if (curWorkerIndex > -1){
        this.workersProcessesArr.splice(curWorkerIndex, 1)
      }
    });

    LOGGER(`Master events foi definido pro worker com PID = ${worker.process.pid}`, {from: 'MASTER', pid: true})
  }

  // ===========================================================================

  private handleReadyWorkerCommand(): void{
    this.numberOfReadyWorkers += 1
  }

  private handleUpdateWorkerinfoCommand(newDataObject): void{
    this.dataFromWorker = newDataObject
  }

}
