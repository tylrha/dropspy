'use strict' // PUPOSE: COPY FOLDERS AND ITS CONTENT TO ANOTHER PLACE

const { mkdirSync, readdirSync, lstatSync, copyFileSync, existsSync, rmSync } = require('fs')
const { join } = require('path')

module.exports = function copyFolderSync(sourceFolder, outputFolder) {

  if (!existsSync(sourceFolder)) { return }

  console.log(`-> Copiando pasta ${sourceFolder} para ${outputFolder}`)

  if (existsSync(outputFolder)) {
    console.log(`Apagando pasta destino antiga: ${outputFolder}`)
    rmSync(outputFolder, { recursive: true })
  }

  const [copiedFolders, copiedFiles] = copyFolderRecursively(sourceFolder, outputFolder)
  console.log(`Pasta foi copiada com ${copiedFolders.length} subpastas e ${copiedFiles.length} arquivos`)
  console.log("")
}

/* ########################################################################## */

function copyFolderRecursively(sourceFolder, outputFolder, oldCopiedFiles, oldCopiedFolders) {

  if (!existsSync(outputFolder)) { mkdirSync(outputFolder) }

  let copiedFiles = oldCopiedFiles || []
  let copiedFolders = oldCopiedFolders || []

  const sourceFolderContentArr = readdirSync(sourceFolder)

  sourceFolderContentArr.forEach(element => {

    const oldPath = join(sourceFolder, element)
    const newPath = join(outputFolder, element)
    const isFile = lstatSync(oldPath).isFile()

    if (isFile) {

      if (!existsSync(newPath)) {
        copyFileSync(oldPath, newPath);
        copiedFiles.push(oldPath)
      }

    } else {


      if (!existsSync(newPath)) {
        copiedFolders.push(oldPath)
      }

      copyFolderRecursively(oldPath, newPath, copiedFiles, copiedFolders);
    }

  });

  return [copiedFolders, copiedFiles]

}

/* ########################################################################## */
