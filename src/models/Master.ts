import { LOGGER } from '../../configs/configs'
import cluster from 'cluster'

export default class Master {

  public numberOfWorkers: number
  public workersToCreate: number
  public workersProcessesArr: number[]

  constructor(workersToCreate) {
    this.numberOfWorkers = 0
    this.workersToCreate = workersToCreate
    this.workersProcessesArr = []
  }

  init() {
    LOGGER(`Master foi iniciado com sucesso`, {from: 'MASTER', pid: true})
    this.createWorkerInstances(this.workersToCreate)
  }

  createWorkerInstances(workersToCreate) {
    for (let x = 0; x <= workersToCreate - 1; x++) {
      const currentWorker = cluster.fork()
      const currentWorkerPid = currentWorker.process.pid
      LOGGER(`Worker [${x + 1}] criado com PID = ${currentWorkerPid}`, {from: 'MASTER', pid: true})
      this.workersProcessesArr.push(currentWorkerPid)
      this.setupMasterEvents(currentWorker)
    }

    this.workersToCreate = 0
  }

  setupMasterEvents(worker) {
    worker.on('message', (msg) => {
      if (msg.chat && msg.chat === 'workerIsReady') {
        this.numberOfWorkers += 1
      } else {
        LOGGER(`Msg do worker ${worker.process.pid} pro master: ${msg.chat}`, {from: 'MASTER', pid: true})
      }
    });

    worker.on('exit', () => {
      const currentWorkerPid = worker.process.pid
      LOGGER(`Fechou o worker ${currentWorkerPid}`, {from: 'MASTER', pid: true})
      this.numberOfWorkers -= 1

      const curWorkerIndex = this.workersProcessesArr.findIndex(el => el === currentWorkerPid)
      if (curWorkerIndex > -1){
        this.workersProcessesArr.splice(curWorkerIndex, 1)
      }
    });

    LOGGER(`Master events foi definido pro worker com PID = ${worker.process.pid}`, {from: 'MASTER', pid: true})
  }

  async sendMessageToAllWorkers(message) {
    for (const id in cluster.workers) {
      cluster.workers[id].send({ chat: message })
    }
  }

  runWhenWorkersAreReady(): Promise<boolean> {

    return new Promise((resolve, reject) => {

      const checkPromiseConditions = () => {
        if (this.numberOfWorkers === this.workersToCreate) {
          resolve(true)
        } else {
          setTimeout(checkPromiseConditions, 1000)
        }
      }

      checkPromiseConditions()

    })

  }


}
