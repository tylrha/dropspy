'use strict' // PUPOSE: EXTRACT BROWSER EXTENSION FILES

const { join, extname, basename } = require('path')
const { createReadStream, existsSync, readFileSync, mkdirSync, readdirSync, lstatSync, rmSync } = require("fs");
const { Extract } = require('unzipper')

const JSON_CONFIGS_FILE = './configs/app-configs.json'

if (existsSync(JSON_CONFIGS_FILE)) { 
  const CONFIGS_OBJECT = readFileSync(JSON_CONFIGS_FILE);
  const EXTENSIONS_FOLDER = JSON.parse(CONFIGS_OBJECT).browser_configs.browser_extensions_zip_folder
  const UNZIPED_EXTENSIONS_FOLDER = JSON.parse(CONFIGS_OBJECT).browser_configs.browser_extensions_unziped_folder

  unzipAllFilesFromFolder(EXTENSIONS_FOLDER, UNZIPED_EXTENSIONS_FOLDER)
}

/* ########################################################################## */

function unzipAllFilesFromFolder(folderToUnzip, outputPath){

  console.log(`Descomprimindo extensões da pasta: ${folderToUnzip} para ${outputPath}`)

  if (!folderToUnzip || !outputPath){return}
  if (existsSync(!folderToUnzip)){return}

  const folderContent = readdirSync(folderToUnzip)
  
  for (const file of folderContent) {

    console.log(`Verificando o item: ${file}`)

    const curSource = join(folderToUnzip, file);
    const isFolder = lstatSync(curSource).isDirectory()
    
    if (!isFolder){
  
      const curExtension = extname(curSource)
      if (curExtension !== '.zip'){continue}
  
      const fileName = basename(curSource).replace(curExtension, "")
      const outputFolder = join(outputPath, fileName)
  
      if (existsSync(outputFolder)) { 
        console.log(`Apagando pasta antiga da extensão: ${file}`)
        rmSync(outputFolder, {recursive: true})
      }
  
      console.log(`Descomprimindo o arquivo ${file} - ${outputFolder}`)
      
      if (existsSync(outputPath)){mkdirSync(outputPath)}
      unzipFile(curSource, outputFolder)
    }
  
  }
  
}

function unzipFile(fileToUnzip, outputFolder){
  try {

    if (!existsSync(fileToUnzip)) { throw new Error("Arquivo não foi encontrado") }
    if (existsSync(outputFolder)) { throw new Error("A pasta de destino já existe!") }

    createReadStream(fileToUnzip).pipe(Extract({ path: outputFolder }))
    console.log(`Arquivo descompresso: ${fileToUnzip}`)
  } catch (e) {
    console.log(`Erro ao descomprimir arquivo: ${e.message}`)
  }
}

/* ########################################################################## */