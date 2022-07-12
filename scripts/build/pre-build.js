const dotenv = require('dotenv')
dotenv.config()

const { existsSync, readFileSync } = require('fs')
const JSON_CONFIGS_FILE = process.env.npm_package_config_configfile || '-'
const deleteOldDistFolder = require('./delete-old-dist-folder')

/* ########################################################################## */

async function prebuild() {

  console.log("#### PRE-BUILD SCRIPTS #################")

  try {

    if (!existsSync(JSON_CONFIGS_FILE)) {throw new Error("Erro ao ler arquivo de configurações!")}

    const CONFIGS_OBJECT = JSON.parse(readFileSync(JSON_CONFIGS_FILE));
    const DIST_FOLDER = CONFIGS_OBJECT?.project_configs?.dist_folder

    deleteOldDistFolder(DIST_FOLDER)

  } catch (e) {
    console.log(`Erro no pré-building: ${e.message}`)
  }

  console.log("########################################")

}

prebuild()

/* ########################################################################## */
