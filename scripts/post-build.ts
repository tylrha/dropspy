import dotenv from 'dotenv'
import { join, extname, dirname } from 'path'
import { readFileSync, writeFileSync, statSync, readdirSync, copyFileSync, existsSync, mkdirSync } from 'fs'

dotenv.config()

const CONFIGS_FOLDER = "./configs"
const ASSETS_FOLDER = "./assets"
const SOURCE_FOLDER = "./src"
const DIST_FOLDER = "./dist"
const ALREADY_COPIED_TS_EXTENSIONS = ['.ts', '.js']

copyTypescriptIgnoredFilesToDist(ASSETS_FOLDER, DIST_FOLDER, ALREADY_COPIED_TS_EXTENSIONS)
copyTypescriptIgnoredFilesToDist(CONFIGS_FOLDER, DIST_FOLDER, ALREADY_COPIED_TS_EXTENSIONS)
copyTypescriptIgnoredFilesToDist(SOURCE_FOLDER, DIST_FOLDER, ALREADY_COPIED_TS_EXTENSIONS)

const FILE_TO_COPY = "./scripts/docker-pre-run.sh"
if (!existsSync(`${DIST_FOLDER}/scripts`)) { mkdirSync(`${DIST_FOLDER}/scripts`) }
copySync(FILE_TO_COPY, join(DIST_FOLDER, FILE_TO_COPY))

/* ########################################################################## */

function copySync(src: string, dest: string) {
  var data = readFileSync(src);
  writeFileSync(dest, data);
}

function copyTypescriptIgnoredFilesToDist(sourceFolder, distFolder, ignoredExtensionsArr) {

  console.log(`-> Copiando arquivos ignorados pelo typescript de ${sourceFolder} para ${distFolder} exceto esses: [${ignoredExtensionsArr.join(";")}]`)

  const nonJsFilesFromSourceArr = getOnlyAllowedFiles(sourceFolder, ignoredExtensionsArr)
  const copiedFiles = copyFilesToNewFolder(nonJsFilesFromSourceArr, sourceFolder, distFolder)

  console.log(`Foram copiados ${copiedFiles} de ${nonJsFilesFromSourceArr.length} arquivos!`)
  console.log("")

}

/* ########################################################################## */

function getOnlyAllowedFiles(baseFolderPath: string, extensionsToIgnoreArr: string[], oldFolderContentArr?: string[], oldFilesArr?: string[]) {

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


function createFoldersRecursively(newFolderPath: string) {

  if (!newFolderPath) { return }

  console.log(`Criando pastas recursivas -> ${newFolderPath}`)

  const foldersArr = newFolderPath.split('\\')
  if (foldersArr.length === 0) { return }

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

