'use strict' // PUPOSE: REMOVE OLD DIST FOLDER

const { existsSync, rmSync, readFileSync } = require('fs')

const JSON_CONFIGS_FILE = './configs/app-configs.json'

if (existsSync(JSON_CONFIGS_FILE)) { 
  const CONFIGS_OBJECT = readFileSync(JSON_CONFIGS_FILE);
  const DIST_FOLDER = JSON.parse(CONFIGS_OBJECT).project_configs.dist_folder
  deleteFolder(DIST_FOLDER)
}

/* ########################################################################## */

function deleteFolder(folderToDelete){
  
  if (existsSync(folderToDelete)){
    rmSync(folderToDelete, {recursive: true});
    console.log(`PASTA APAGADA: ${folderToDelete}`)
  } else {
    console.log(`PASTA NÃO EXISTE: ${folderToDelete}`)
  }
}

/* ########################################################################## */