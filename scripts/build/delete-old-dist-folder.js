const { existsSync, rmSync } = require('fs')

module.exports = function deleteOldDistFolder(old_dist){

  if (!old_dist){return}

  console.log(`-> Apagando pasta antiga de dist ${old_dist}`)

  if (existsSync(old_dist)) {
    rmSync(old_dist, { recursive: true });
    console.log(`Pasta foi apagada com sucesso!`)
  } else {
    console.log(`A pasta não precisou ser apagado porque não existe!`)
  }

  console.log("")

}
