const { join, extname, basename, dirname } = require('path')
const { statSync, readdirSync, copyFileSync, existsSync, mkdirSync } = require('fs')

const ignoredExt = ['.ts', '.js', '.json']
const filesToCopyArr = recFindByExt('./src', 'ts')
const oldFolder = 'src'
const distFolder = 'dist/src'

if (filesToCopyArr.length > 0) {

  for (let x = 0; x < filesToCopyArr.length; x++) {

    const oldFilePath = filesToCopyArr[x]
    const finalPath = oldFilePath.replace(oldFolder, distFolder)

    if (existsSync(oldFilePath)) {

      const newFolderPath = dirname(finalPath)
      const doesFolderExist = existsSync(newFolderPath)

      if (!doesFolderExist) {
        mkdirSync(newFolderPath)
        console.log(`PASTA CRIADA: ${newFolderPath}`)
      }

      copyFileSync(oldFilePath, finalPath)
      console.log(`-> ${finalPath}`)

    }

  }

}

function recFindByExt(base, ext, files, result) {

  let newFiles = files || readdirSync(base)
  let newResult = result || []

  newFiles.forEach((file) => {

    const newbase = join(base, file)
    const isFolder = statSync(newbase).isDirectory()

    if (isFolder) {
      newResult = recFindByExt(newbase, ext, readdirSync(newbase), newResult)
    } else {
      const curExt = extname(file)
      const extensionIndex = ignoredExt.findIndex(igExt => igExt === curExt)
      if (extensionIndex === -1) {newResult.push(newbase)}
    }

  })

  return newResult
}
