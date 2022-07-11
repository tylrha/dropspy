const dotenv = require('dotenv')
dotenv.config()

const { existsSync, rmSync, readFileSync } = require('fs')
const JSON_CONFIGS_FILE = process.env.npm_package_config_configfile || '-'

/* ########################################################################## */

async function prebuild(){

  console.log("#### PRE-BUILD SCRIPTS #################")

  if (existsSync(JSON_CONFIGS_FILE)) {
  
    const CONFIGS_OBJECT = JSON.parse(readFileSync(JSON_CONFIGS_FILE));
    const DIST_FOLDER = CONFIGS_OBJECT?.project_configs?.dist_folder
  
    if (DIST_FOLDER && existsSync(DIST_FOLDER)) {
      rmSync(DIST_FOLDER, { recursive: true });
      console.log(`PASTA APAGADA: ${DIST_FOLDER}`)
    } else {
      console.log(`PASTA NÃO EXISTE: ${DIST_FOLDER}`)
    }
  
  }
  
  console.log("########################################")

}

prebuild()

/* ########################################################################## */