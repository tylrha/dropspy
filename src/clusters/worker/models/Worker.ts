import { CURRENT_DATETIME, LOGGER, SPYBOT_LOOP_INTERVAL } from '../../../../configs/configs'
import Spybot from '../../../spybot/models/Spybot'

import { EMasterCommandsToWorkers } from '../../master/interfaces/EMasterCommandsToWorkers'
import { EWorkerCommandsToMaster } from '../interfaces/EWorkerCommandsToMaster'
import { IMessageBetweenClusters } from '../../interfaces/IMessageBetweenClusters'
import { IMasterSharedInformation } from '../../master/interfaces/IMasterSharedInformation'

export default class Worker {

  public workerProcess: NodeJS.Process
  public isSpybotActive: boolean
  public spybotInstance: Spybot
  public spybotIndex: string
  public dataFromMaster: IMasterSharedInformation

  constructor(proc: NodeJS.Process) {
    this.workerProcess = proc
    this.isSpybotActive = false
    // this.spybotInstance
    // this.dataFromMaster
  }

  // ===========================================================================

  async initWorker(): Promise<void> {

    try {

    LOGGER(`Worker iniciado`, { from: 'WORKER', pid: true })
    this.setupWorkerEvents(this.workerProcess)
    this.sendCommandToMaster(EWorkerCommandsToMaster.SET_WORKER_AS_READY);

    } catch (e) {
      LOGGER(`Erro ao criar worker: ${e.message}`, { from: 'WORKER', pid: true, isError: true })
    }

  }

  private setupWorkerEvents(proc: NodeJS.Process): void {

    proc.on('message', async (msgObj: IMessageBetweenClusters) => {

      const {command, data, message} = msgObj

      if (message){
        LOGGER(`Msg do master pro worker: ${message}`, { from: 'WORKER', pid: true })
        return
      }

      if(command){

        const commandIndex = EMasterCommandsToWorkers[command]
        const commandStr = EMasterCommandsToWorkers[commandIndex]
        LOGGER(`Comando recebido do master: [${commandStr}]`, { from: 'WORKER', pid: true })

        if (commandIndex === EMasterCommandsToWorkers.START_SPY) { await this.handleStartSpybotRequest() }
        if (commandIndex === EMasterCommandsToWorkers.CLOSE_WORKER) { await this.handleCloseWorkerRequest() }
        if (commandIndex === EMasterCommandsToWorkers.GET_WORKER_INFO) { await this.handleRequestForWorkerInformation() }
        if (commandIndex === EMasterCommandsToWorkers.SEND_MASTER_INFO_TO_WORKER) { await this.handleUpdateOnMasterInformation(data) }

      }

    });

    proc.on('exit', async () => {
      LOGGER(`Worker foi finalizado com PID = ${proc.pid}`, { from: 'WORKER', pid: true })
    });

  }

  // ===========================================================================

  private async handleStartSpybotRequest(): Promise<void>{
    await this.startSpybot()
  }

  private async handleCloseWorkerRequest(): Promise<void>{
    await this.closeWorker()
  }

  private async handleRequestForWorkerInformation(): Promise<void> {

    LOGGER(`Obtem informações de espionagem`, { from: 'WORKER', pid: true })
    const objToSend = global.WORKER?.workerSharedInfo || {}
    this.sendCommandToMaster(EWorkerCommandsToMaster.SEND_WORKER_INFO_TO_MASTER, objToSend)

  }

  private async handleUpdateOnMasterInformation(masterInformation: IMasterSharedInformation){

    LOGGER(`Recebi informações do master`, { from: 'WORKER', pid: true })
    this.dataFromMaster = masterInformation

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

  // ===========================================================================

  private async getDataFromMaster(): Promise<IMasterSharedInformation> {

    LOGGER(`Obtendo dados do master`, { from: 'WORKER', pid: true })

    this.dataFromMaster = undefined
    this.sendCommandToMaster(EWorkerCommandsToMaster.GET_MASTER_INFO, {worker: this.workerProcess.pid})

    return new Promise((resolve, reject) => {

      const checkPromiseConditions = () => {
        if (this.dataFromMaster !== undefined) {
          LOGGER(`Dados recebidos do master: ${JSON.stringify(this.dataFromMaster)}`, { from: 'WORKER', pid: true })
          resolve(this.dataFromMaster)
        } else {
          setTimeout(checkPromiseConditions, 1000)
        }
      }

      checkPromiseConditions()

    })

  }

  private async getCurrentBotIndexFromMasterData(): Promise<string>{

    const dataFromMaster = await this.getDataFromMaster()

    const workerIndex = dataFromMaster.workersArr.findIndex(worker => worker.processPid === this.workerProcess.pid)

    if (workerIndex > -1){
      const spybotIndex = dataFromMaster.workersArr[workerIndex].botIndex
      return spybotIndex
    }

  }

  // ===========================================================================

  async startSpybot(): Promise<void> {

    try{

      this.spybotIndex = await this.getCurrentBotIndexFromMasterData()
      if (!this.spybotIndex){throw new Error(`Erro ao inicar spybot, index não encontrado`)}

      console.log("")
      LOGGER(`Inicia spybot com index = [${this.spybotIndex}]`, { from: 'WORKER', pid: true })
      global.WORKER.workerSharedInfo.workerData.workerInfo.botStep = "Iniciando bot"
      const spybot = new Spybot(this.spybotIndex)
      this.spybotInstance = spybot
      this.isSpybotActive = true

      const spybotResult = await spybot.initSpyBot()
      if (typeof spybotResult === "string"){throw new Error(spybotResult)}

    }catch(e){

      LOGGER(`Erro ao iniciar spybot no worker: ${e.message}`, { from: 'WORKER', pid: true, isError: true })
      global.WORKER.workerSharedInfo.workerData.workerInfo.botStep = `Erro ao iniciar spybot no worker, esperando delay: ${e.message}`

      LOGGER(`Tentando novamente em ${SPYBOT_LOOP_INTERVAL}s\n`, {from: "WORKER", pid: true})
      setTimeout(async () => {
        await this.startSpybot()
      }, SPYBOT_LOOP_INTERVAL * 1000)

    }
  }

  async closeSpybot(){

    LOGGER(`Fechando spybot do worker`, {from: "WORKER", pid: true})

    if (this.spybotInstance){
      await this.spybotInstance.close()
    }

  }

  // ===========================================================================

  async closeWorker(): Promise<void> {
    LOGGER(`Fecha spybot`, { from: 'WORKER', pid: true })

    try{

      if (this.spybotInstance){
        await this.spybotInstance.close()
        this.spybotInstance = undefined
        this.isSpybotActive = false
        LOGGER(`Spybot foi fechado com sucesso`, { from: 'WORKER', pid: true })
      }

      LOGGER(`Fechar worker`, { from: 'WORKER', pid: true })
      this.workerProcess.exit()

    }catch(e){
      LOGGER(`Erro ao fechar spybot: ${e.message}`, { from: 'WORKER', pid: true, isError: true })
    }
  }

  // ===========================================================================

}
