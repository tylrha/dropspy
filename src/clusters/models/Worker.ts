import { CURRENT_DATETIME, LOGGER } from '../../../configs/configs'
import initSpyBot from '../../spybot/init-spy-bot'
import Spybot from '../../spybot/models/Spybot'

import { EMasterCommandsToWorkers } from '../interfaces/EMasterCommandsToWorkers'
import { EWorkerCommandsToMaster } from '../interfaces/EWorkerCommandsToMaster'
import { IMessageBetweenClusters } from '../interfaces/IMessageBetweenClusters'

export default class Worker {

  public workerProcess: NodeJS.Process
  public isSpybotActive: boolean
  public spybotInstance: Spybot

  constructor(proc: NodeJS.Process) {
    this.workerProcess = proc
    this.isSpybotActive = false
    // this.spybotInstance
  }

  // ===========================================================================

  init(): void {
    this.setupWorkerEvents(this.workerProcess)
    LOGGER(`Worker iniciado`, { from: 'WORKER', pid: true })
    this.sendCommandToMaster(EWorkerCommandsToMaster.WORKER_IS_READY);
  }

  // ===========================================================================

  sendMessageToMaster(msg: string): void {
    LOGGER(`Enviando mensagem para o master: [${msg}]`, { from: 'WORKER', pid: true })

    const messageBetweenClusters: IMessageBetweenClusters = {
      message: msg
    }

    this.workerProcess.send(messageBetweenClusters);
  }

  sendCommandToMaster(cmd: EWorkerCommandsToMaster, data?: object): void {
    const commandStr = EWorkerCommandsToMaster[cmd]
    LOGGER(`Enviando comando para o master: [${commandStr}]`, { from: 'WORKER', pid: true })

    let messageBetweenClusters: IMessageBetweenClusters = {
      command: commandStr
    }

    if (data) { messageBetweenClusters.data = data }

    this.workerProcess.send(messageBetweenClusters);
  }

  setupWorkerEvents(proc: NodeJS.Process): void {

    proc.on('message', async (msgObj: IMessageBetweenClusters) => {

      const {command, data, message} = msgObj

      if (message){
        LOGGER(`Msg do master pro worker: ${message}`, { from: 'WORKER', pid: true })
        return
      }

      if(command){
        const commandIndex = EMasterCommandsToWorkers[command]

        if (commandIndex === EMasterCommandsToWorkers.START_SPY) { await this.initSpybot() }
        if (commandIndex === EMasterCommandsToWorkers.QUIT_SPY) { await this.closeSpybot() }
        if (commandIndex === EMasterCommandsToWorkers.RESTART_SPY) { await this.restartSpybot() }
        if (commandIndex === EMasterCommandsToWorkers.GET_WORKER_INFO) { await this.getWorkerInfo() }
        if (commandIndex === EMasterCommandsToWorkers.QUIT_WORKER) { await this.quitWorker() }

      }

    });

    proc.on('exit', async () => {
      LOGGER(`Worker foi finalizado com PID = ${proc.pid}`, { from: 'WORKER', pid: true })
    });

  }

  // ===========================================================================

  private async initSpybot(): Promise<void> {
    LOGGER(`Inicia spybot`, { from: 'WORKER', pid: true })

    this.spybotInstance = await initSpyBot()
    this.isSpybotActive = true
  }

  private async closeSpybot(): Promise<void> {
    LOGGER(`Fecha spybot`, { from: 'WORKER', pid: true })
    this.spybotInstance.close()

    this.spybotInstance = undefined
    this.isSpybotActive = false
  }

  private async restartSpybot(): Promise<void> {
    LOGGER(`Reinicia spybot`, { from: 'WORKER', pid: true })
    global.WORKER.workerInformation.restartedTimes += 1
    global.WORKER.workerInformation.lastRestartedTime = CURRENT_DATETIME()
  }

  // ===========================================================================

  private async getWorkerInfo(): Promise<void> {
    LOGGER(`Obtem informações de espionagem`, { from: 'WORKER', pid: true })
    const objToSend = global.WORKER.workerInformation
    this.sendCommandToMaster(EWorkerCommandsToMaster.UPDATE_WORKER_INFO, objToSend)
  }

  private async quitWorker(): Promise<void> {
    LOGGER(`Fechar worker`, { from: 'WORKER', pid: true })
    this.workerProcess.exit()
  }

}
