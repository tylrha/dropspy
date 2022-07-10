import { join, relative } from 'path'

const CURRENT_PATH = __dirname
const BASE_PATH = join(CURRENT_PATH, "../../")

export {
  getPathFromRoot,
  getRelativePath,
  importFromRootPath
}

function getPathFromRoot(relativePath: string): string {
  const rootPath = join(BASE_PATH, relativePath)
  return rootPath
}

function getRelativePath(currentPath: string, globalPath: string): string{
  const comparedPath = getPathFromRoot(globalPath)
  const relativePath = relative(currentPath, comparedPath)
  return relativePath
}

async function importFromRootPath(globalPath: string): Promise<any>{

  const relativePath = getRelativePath(CURRENT_PATH, globalPath)

  try{
    const importedFile = await import(relativePath)
    return importedFile.default
  } catch(e){
    // console.log(e)
    // console.log(relativePath)
    console.log(`Couldnt find file: ${globalPath}\n`)
    return false
  }

}

