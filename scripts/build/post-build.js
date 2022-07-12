const dotenv = require('dotenv')
const {join} = require('path')
const { existsSync, rmSync, readFileSync } = require('fs')

dotenv.config()

const copyTypescriptIgnoredFilesToDistFolder = require('./copy-typescript-ignored-files-to-dist')
const copyFolderRecursively = require('./copy-folder-recursively')

/* ########################################################################## */

async function postBuild(){

  console.log("#### POST-BUILD SCRIPTS #################")

  try{

    const JSON_CONFIGS_FILE = process.env.npm_package_config_configfile || '-'

    if (existsSync(JSON_CONFIGS_FILE)) {

      const CONFIGS_OBJECT = JSON.parse(readFileSync(JSON_CONFIGS_FILE));

      const CONFIGS_FOLDER = CONFIGS_OBJECT?.project_configs?.configs_folder
      const SOURCE_FOLDER = CONFIGS_OBJECT?.project_configs?.source_folder
      const DIST_FOLDER = CONFIGS_OBJECT?.project_configs?.dist_folder

      const ignoredExtensionsArr = ['.ts', '.js']
      copyTypescriptIgnoredFilesToDistFolder(CONFIGS_FOLDER, DIST_FOLDER, ignoredExtensionsArr)
      copyTypescriptIgnoredFilesToDistFolder(SOURCE_FOLDER, DIST_FOLDER, ignoredExtensionsArr)

      const SCRIPTS_FOLDER = CONFIGS_OBJECT?.project_configs?.scripts_folder
      const newScriptsFolder = join(DIST_FOLDER, SCRIPTS_FOLDER)
      copyFolderRecursively(SCRIPTS_FOLDER, newScriptsFolder)

    }


  } catch(e){
    console.log(`ERRO: ${e.message}`)
  }

  console.log("########################################")

}

postBuild()

/* ########################################################################## */

