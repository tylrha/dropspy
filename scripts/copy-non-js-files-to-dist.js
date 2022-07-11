'use strict' // PUPOSE: COPY NON-JAVASCRIPT TO DIST FOLDER SINCE TYPESCRIPT TSC WON'T

const { join, extname, dirname } = require('path')
const { statSync, readdirSync, copyFileSync, existsSync, mkdirSync, readFileSync } = require('fs')

const JSON_CONFIGS_FILE = './configs/app-configs.json'
const IGNORED_EXTENSIONS = ['.ts', '.js']

if (existsSync(JSON_CONFIGS_FILE)) {
  const CONFIGS_OBJECT = readFileSync(JSON_CONFIGS_FILE);
  const SOURCE_FOLDER = JSON.parse(CONFIGS_OBJECT).project_configs.source_folder
  const DIST_FOLDER = JSON.parse(CONFIGS_OBJECT).project_configs.dist_folder
  copyNonJsSourceFilesToDist(SOURCE_FOLDER, DIST_FOLDER)
}

function copyNonJsSourceFilesToDist(sourceFolder, distFolder) {

  console.log(`Copiando arquivos de ${sourceFolder} para ${distFolder} exceto esses: [${IGNORED_EXTENSIONS.join(";")}]\n`)

  const nonJsFilesFromSourceArr = getOnlyAllowedFiles(sourceFolder, IGNORED_EXTENSIONS)
  const copiedFiles = copyFilesToNewFolder(nonJsFilesFromSourceArr, sourceFolder, distFolder)

  console.log(`\nForam copiados ${copiedFiles} de ${nonJsFilesFromSourceArr.length} arquivos!`)
}

/* ########################################################################## */

function getOnlyAllowedFiles(baseFolderPath, extensionsToIgnoreArr, oldFolderContentArr, oldFilesArr) {

  const folderContentArr = oldFolderContentArr || readdirSync(baseFolderPath)
  let allowedFilesArr = oldFilesArr || []

  folderContentArr.forEach((file) => {

    const newbase = join(baseFolderPath, file)
    const isFolder = statSync(newbase).isDirectory()

    if (isFolder) {

      allowedFilesArr = getOnlyAllowedFiles(newbase, extensionsToIgnoreArr, readdirSync(newbase), allowedFilesArr)
    } else {
      const curExt = extname(file)
      const extensionIndex = extensionsToIgnoreArr.findIndex(igExt => igExt === curExt)

      if (extensionIndex === -1) {allowedFilesArr.push(newbase)}
    }

  })

  return allowedFilesArr
}

function copyFilesToNewFolder(filesToCopyArr, sourceFolderpath, outputBasePath) {

  if (!filesToCopyArr || !sourceFolderpath || !outputBasePath) { return }
  if (filesToCopyArr.length === 0) { return }
  if (!existsSync(sourceFolderpath)) {return}

  let copiedFiles = 0

  for (let x = 0; x < filesToCopyArr.length; x++) {

    const currentFile = filesToCopyArr[x]
    const newFilePath = join(outputBasePath, currentFile)

    if (existsSync(currentFile)) {

      const newFolderPath = dirname(newFilePath)
      const doesFolderExist = existsSync(newFolderPath)
      const doesFileExist = existsSync(newFilePath)

      if (doesFileExist){console.log(`Existente: ${newFilePath}`); continue}
      if (!doesFolderExist) {createFoldersRecursively(newFolderPath)}

      copiedFiles += 1
      copyFileSync(currentFile, newFilePath)
      console.log(`Copiado: ${newFilePath}`)

    }

  }

  return copiedFiles
}

function createFoldersRecursively(newFolderPath){

  if (!newFolderPath){return}

  const foldersArr = newFolderPath.split('\\')
  if (!foldersArr.length === 0){return}

  let oldFolder = ""

  for(const folder of foldersArr){

    const newbase = join("./", oldFolder, folder)
    const doesFolderExist = existsSync(newbase)

    if (!doesFolderExist) {  
      mkdirSync(newbase)
    }

    oldFolder = newbase

  }

}

/* ########################################################################## */
