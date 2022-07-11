'use strict' // PUPOSE: EXTRACT BROWSER EXTENSION FILES

const { join, extname, basename, dirname } = require('path')
const { statSync, createReadStream, createWriteStream, existsSync, readFileSync, mkdirSync, readdirSync, lstatSync, rmSync } = require("fs");
const { Parse, Extract } = require('unzipper');
const createFoldersRecursively = require('./createFoldersRecursively');

module.exports = async function extractBrowserExtensionsFiles(extensionsFolder, unzipedExtensionsFolder) {
  console.log(`-> Extraindo extensões do browser: ${extensionsFolder} -> ${unzipedExtensionsFolder}`)
  const [allExtractedFolders, allExtractedFiles] = await unzipAllFilesFromFolder(extensionsFolder, unzipedExtensionsFolder)
  console.log(`Foram extraídos ao total ${allExtractedFolders} e ${allExtractedFiles} arquivos`)
  console.log("")
}

/* ########################################################################## */

async function unzipAllFilesFromFolder(folderToUnzip, outputPath) {

  console.log(`Descomprimindo extensões da pasta: ${folderToUnzip} para ${outputPath}`)

  if (!folderToUnzip || !outputPath) { return [0, 0]}
  if (existsSync(!folderToUnzip)) { return [0, 0]}

  const folderContent = readdirSync(folderToUnzip)
  let resultPromisesArr = []
  let allExtractedFolders = 0
  let allExtractedFiles = 0
  
  for (const file of folderContent) {

    const curSource = join(folderToUnzip, file);
    const isFolder = lstatSync(curSource).isDirectory()

    if (!isFolder) {

      const curExtension = extname(curSource)
      if (curExtension !== '.zip') { continue }

      const fileName = basename(curSource).replace(curExtension, "")
      const outputFolder = join(outputPath, fileName)

      if (existsSync(outputFolder)) {
        console.log(`Apagando pasta antiga da extensão: ${file}`)
        rmSync(outputFolder, { recursive: true })
      }

      console.log(`Descomprimindo o arquivo ${file} - ${outputFolder}`)

      if (!existsSync(outputPath)) { mkdirSync(outputPath) }

      const promiseResult = await unzipFile(curSource, outputFolder)
      if (promiseResult !== false){
        allExtractedFolders += promiseResult[0]
        allExtractedFiles += promiseResult[1]
      }

    }

  }

  return [allExtractedFolders,  allExtractedFiles]

}

async function unzipFile(fileToUnzip, outputFolder) {

  try {

    if (!existsSync(fileToUnzip)) { throw new Error("Arquivo não foi encontrado") }
    if (existsSync(outputFolder)) { throw new Error("A pasta de destino já existe!") }

    let extractedFiles = 0
    let extractedFolders = 0

    const stream = createReadStream(fileToUnzip).pipe(Parse());

    return new Promise((resolve, reject) => {
      try {

        stream.on('entry', (entry) => {

          const finalPath = join(outputFolder, entry.path)
          const fileDirname = dirname(finalPath)
          if (!existsSync(fileDirname)){createFoldersRecursively(fileDirname)}
          
          if (entry.type === "File"){
            extractedFiles += 1
            const writeStream = createWriteStream(finalPath);
            return entry.pipe(writeStream);
          } else {
            extractedFolders += 1
          }

        });
        stream.on('finish', () => resolve([extractedFolders, extractedFiles]));
        stream.on('error', (error) => reject(false));

      } catch (e) {
        console.log(`Erro ao extrair arquivo: ${e.message}`)
        reject(false)
      }
    });

  } catch (e) {
    console.log(`Erro ao descomprimir arquivo: ${e.message}`)
    return false
  }

}

/*


      createReadStream(fileToUnzip)
        .pipe(Extract({ path: outputFolder }))
        .on('end', () => resolve(`Arquivo descompresso: ${fileToUnzip}`))
        .on('error', () => reject(`Erro ao descomprimir o arquivo: ${fileToUnzip}`))

*/

/* ########################################################################## */