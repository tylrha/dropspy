// PUPOSE: COPY FOLDER TO ANOTHER PLACE SINCE TYPESCRIPT TSC WON'T

const { join, basename } = require('path')
const { existsSync, mkdirSync, readdirSync, lstatSync, copyFileSync } = require('fs')

function copyFolderRecursiveSync(source, target) {

  try{
    const targetFolder = join(target, basename(source));
    if (!existsSync(targetFolder)) {mkdirSync(targetFolder);}

    if (lstatSync(source).isDirectory()) {
      const files = readdirSync(source);

      files.forEach((file) => {
        const curSource = join(source, file);

        if (lstatSync(curSource).isDirectory()) {
          copyFolderRecursiveSync(curSource, targetFolder);
        } else {
          const destSource = join(targetFolder, file);
          copyFileSync(curSource, destSource);
        }
      });
    }
  } catch(e){
    console.log(e.message)
  }
}

copyFolderRecursiveSync('./extensions', './dist')
console.log(`PASTA DE EXTENSÕES COPIADA!`)
