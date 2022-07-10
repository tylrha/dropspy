const { join, extname, basename, dirname } = require('path')
const { existsSync, rmSync } = require('fs')

const distFolder = './dist'
const doesFolderExist = existsSync(distFolder)

if (doesFolderExist){
  console.log(`PASTA APAGADO: ${distFolder}`)
  rmSync(distFolder, {recursive: true});
}

// rd /s /q dist >nul 2>&1|echo.>nul
