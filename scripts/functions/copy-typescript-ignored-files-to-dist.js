'use strict' // PUPOSE: COPY NON-JAVASCRIPT TO DIST FOLDER SINCE TYPESCRIPT TSC WON'T

const { join, extname, dirname } = require('path')
const { statSync, readdirSync, copyFileSync, existsSync, mkdirSync, readFileSync } = require('fs')

const createFoldersRecursively = require('./createFoldersRecursively')

/* ########################################################################## */

module.exports = function copyTypescriptIgnoredFilesToDist(sourceFolder, distFolder, ignoredExtensionsArr) {

  console.log(`-> Copiando arquivos ignorados pelo typescript de ${sourceFolder} para ${distFolder} exceto esses: [${ignoredExtensionsArr.join(";")}]`)

  const nonJsFilesFromSourceArr = getOnlyAllowedFiles(sourceFolder, ignoredExtensionsArr)
  const copiedFiles = copyFilesToNewFolder(nonJsFilesFromSourceArr, sourceFolder, distFolder)

  console.log(`Foram copiados ${copiedFiles} de ${nonJsFilesFromSourceArr.length} arquivos!`)
  console.log("")
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

  if (!filesToCopyArr || !sourceFolderpath || !outputBasePath) { return 0}
  if (filesToCopyArr.length === 0) { return 0}
  if (!existsSync(sourceFolderpath)) {return 0}

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

/* ########################################################################## */
