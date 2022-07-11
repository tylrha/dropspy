'use strict' // PUPOSE: COPY NON-JAVASCRIPT TO DIST FOLDER SINCE TYPESCRIPT TSC WON'T

const { join } = require('path')
const { existsSync, mkdirSync } = require('fs')


module.exports = function createFoldersRecursively(newFolderPath) {

  if (!newFolderPath) { return }
  
  console.log(`Criando pastas recursivas -> ${newFolderPath}`)
  
  const foldersArr = newFolderPath.split('\\')
  if (!foldersArr.length === 0) { return }

  let oldFolder = ""

  for (const folder of foldersArr) {

    const newbase = join("./", oldFolder, folder)
    const doesFolderExist = existsSync(newbase)

    if (!doesFolderExist) {
      mkdirSync(newbase)
    }

    oldFolder = newbase

  }

}
