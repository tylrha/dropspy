// import { promises as fs , existsSync} from 'fs'

// import Master from '../../../clusters/master/models/Master'
// import { Request, Response } from 'express'
// import { EMasterCommandsToWorkers } from '../../../clusters/master/interfaces/EMasterCommandsToWorkers'
// import { DELAY } from '../../../../configs/configs'

// export default async function screenShotController(req: Request, res: Response) {

//   try{

//     const masterCluster: Master = global['MASTER']?.masterCluster
//     if (!masterCluster) { throw new Error("Objeto MASTER ainda não foi definido") }

//     if (masterCluster.readyWorkers > 0){
//       masterCluster.sendCommandToWorkers(EMasterCommandsToWorkers.GET_WORKER_SCREENSHOT, {})
//       await DELAY(2000)
//     }

//     if (existsSync('./configs/screenShot.png')){
//       const data = await fs.readFile('./configs/screenShot.png')
//       res.writeHead(200, {
//         'Content-Type': 'image/png',
//         'Content-Length': data.length
//       });

//       res.end(data);
//     } else {
//       res.send("Ainda não há screenshots salvos!")
//     }

//   } catch(e){
//     res.send(e.message)
//   }

//   // JSON.parse()

//   // var img = Buffer.from(data, 'base64');

//   // res.send(data)
// }
