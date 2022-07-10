import { existsSync, readFileSync } from "fs";
import { resolve } from 'path'
import {getPathFromRoot} from './globalPath'

export {
  delay,
  readJson,
  doesFileExists
}

function delay(time: number): Promise<void> {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  });
}

function readJson(jsonPath: string): object {

  const finalPath = getPathFromRoot(jsonPath)

  if (!existsSync(finalPath)) {
    console.log(`Json ${finalPath} não foi encontrado!`)
    return {}
  }

  const rawdata = readFileSync(finalPath);
  return JSON.parse(rawdata.toString());

}

function doesFileExists(filePath: string) {
  return existsSync(filePath)
}
