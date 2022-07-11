const dotenv = require('dotenv')
const {join} = require('path')
const { existsSync, rmSync, readFileSync } = require('fs')

dotenv.config()

const extractBrowserExtensionsToDistFolder = require('./functions/extract-browser-extensions-files')
const copyTypescriptIgnoredFilesToDistFolder = require('./functions/copy-typescript-ignored-files-to-dist')
const copyFolder = require('./functions/copy-folder')

/* ########################################################################## */

async function postBuild(){

  try{

    console.log("#### POST-BUILD SCRIPTS #################")

    const JSON_CONFIGS_FILE = process.env.npm_package_config_configfile || '-'
    
    if (existsSync(JSON_CONFIGS_FILE)) {

      const CONFIGS_OBJECT = JSON.parse(readFileSync(JSON_CONFIGS_FILE));

      const SOURCE_FOLDER = CONFIGS_OBJECT?.project_configs?.source_folder
      const DIST_FOLDER = CONFIGS_OBJECT?.project_configs?.dist_folder
      const EXTENSIONS_FOLDER = CONFIGS_OBJECT?.browser_configs?.browser_extensions_zip_folder
      const UNZIPED_EXTENSIONS_FOLDER = CONFIGS_OBJECT?.browser_configs?.browser_extensions_unziped_folder

      const ignoredExtensionsArr = ['.ts', '.js', '.zip']
      copyTypescriptIgnoredFilesToDistFolder(SOURCE_FOLDER, DIST_FOLDER, ignoredExtensionsArr)

      console.log("Esperando 10s para não dar problema nas próximas funções")
      await extractBrowserExtensionsToDistFolder(EXTENSIONS_FOLDER, UNZIPED_EXTENSIONS_FOLDER) 

      const newUnzipedExtensionsFolder = join(DIST_FOLDER, UNZIPED_EXTENSIONS_FOLDER)
      copyFolder(UNZIPED_EXTENSIONS_FOLDER, newUnzipedExtensionsFolder)

    }
    
    console.log("########################################")
    
  } catch(e){
    console.log(`ERRO: ${e.message}`)
  }

}

postBuild()

/* ########################################################################## */

