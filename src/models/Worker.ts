import { LOGGER } from '../../configs/configs'
import initSpyBot from '../spybot/init-spy-bot'

export default class Worker {

  public workerProcess: any
  public workerProcessPid: number

  constructor(proc) {
    this.workerProcess = proc
    this.workerProcessPid = proc.pid
  }

  init() {
    this.setupWorkerEvents(this.workerProcess)
    LOGGER(`Worker iniciado`, {from: 'WORKER', pid: true})
    this.sendMessageToMaster('workerIsReady');
    // process.exit(0)
  }

  setupWorkerEvents(proc){

    proc.on('message', async (msg) => {

      LOGGER(`Msg do master pro worker: ${msg.chat}`, {from: 'WORKER', pid: true})

      if (msg.chat && msg.chat === 'startSpy') {
        initSpyBot()
      } else if (msg.chat && msg.chat === 'quitSpy') {
        proc.exit()
        // await closeSpyBot(proc, true)
      }

    });

    proc.on('exit', async () => {
      LOGGER(`Worker foi finalizado com PID = ${proc.pid}`, {from: 'WORKER', pid: true})
    });

  }

  sendMessageToMaster(msg){
    this.workerProcess.send({ chat: msg});
  }

}
