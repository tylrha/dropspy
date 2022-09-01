import { join, extname, basename, dirname } from 'path';
import { Parse } from 'unzipper';
import { createReadStream, createWriteStream, existsSync, mkdirSync, readdirSync, lstatSync, rmSync } from 'fs';

import {
  LOGGER,
  BROWSER_EXTENSIONS_PATH,
  BROWSER_EXTENSIONS_UNZIPED_PATH
} from '../../../configs/configs';

export default async function extractBrowserExtensions() {

  LOGGER(`-> Extraindo extensões do browser: ${BROWSER_EXTENSIONS_PATH} -> ${BROWSER_EXTENSIONS_UNZIPED_PATH}`, { from: 'SPYBOT', pid: true });
  const [allExtractedFolders, allExtractedFiles] = await unzipAllFilesFromFolder(BROWSER_EXTENSIONS_PATH, BROWSER_EXTENSIONS_UNZIPED_PATH);
  LOGGER(`Foram extraídos ao total ${allExtractedFolders} e ${allExtractedFiles} arquivos`, { from: 'SPYBOT', pid: true });
  console.log('');

}

/* ########################################################################## */

async function unzipAllFilesFromFolder(folderToUnzip: string, outputPath: string) {

  LOGGER(`Descomprimindo extensões da pasta: ${folderToUnzip} para ${outputPath}`, { from: 'SPYBOT', pid: true });

  if (!folderToUnzip || !outputPath) { return [0, 0]; }
  if (existsSync(folderToUnzip)) { return [0, 0]; }

  const folderContent = readdirSync(folderToUnzip);
  let allExtractedFolders = 0;
  let allExtractedFiles = 0;

  for (const file of folderContent) {

    const curSource = join(folderToUnzip, file);
    const isFolder = lstatSync(curSource).isDirectory();

    if (!isFolder) {

      const curExtension = extname(curSource);
      if (curExtension !== '.zip') { continue; }

      const fileName = basename(curSource).replace(curExtension, '');
      const outputFolder = join(outputPath, fileName);

      if (existsSync(outputFolder)) {
        LOGGER(`Apagando pasta antiga da extensão: ${file}`, { from: 'SPYBOT', pid: true });
        rmSync(outputFolder, { recursive: true });
      }

      LOGGER(`Descomprimindo o arquivo ${file} - ${outputFolder}`, { from: 'SPYBOT', pid: true });

      if (!existsSync(outputPath)) { mkdirSync(outputPath); }

      const promiseResult = await unzipFile(curSource, outputFolder);
      if (promiseResult !== false) {
        allExtractedFolders += promiseResult[0];
        allExtractedFiles += promiseResult[1];
      }

    }

  }

  return [allExtractedFolders, allExtractedFiles];

}

async function unzipFile(fileToUnzip, outputFolder) {

  try {

    if (!existsSync(fileToUnzip)) { throw new Error('Arquivo não foi encontrado'); }
    if (existsSync(outputFolder)) { throw new Error('A pasta de destino já existe!'); }

    let extractedFiles = 0;
    let extractedFolders = 0;

    const stream = createReadStream(fileToUnzip).pipe(Parse());

    return new Promise((resolve, reject) => {
      try {

        stream.on('entry', (entry) => {

          const finalPath = join(outputFolder, entry.path);
          const fileDirname = dirname(finalPath);
          if (!existsSync(fileDirname)) { createFoldersRecursively(fileDirname); }

          if (entry.type === 'File') {
            extractedFiles += 1;
            const writeStream = createWriteStream(finalPath);
            return entry.pipe(writeStream);
          } else {
            extractedFolders += 1;
          }

        });
        stream.on('finish', () => resolve([extractedFolders, extractedFiles]));
        stream.on('error', (error) => {console.log(error); reject(false);});

      } catch (e) {
        LOGGER(`Erro ao extrair arquivo: ${e.message}`, { from: 'SPYBOT', pid: true, isError: true });
        reject(false);
      }
    });

  } catch (e) {
    LOGGER(`Erro ao extrair arquivo: ${e.message}`, { from: 'SPYBOT', pid: true, isError: true });
    return false;
  }

}

/* ########################################################################## */

function createFoldersRecursively(newFolderPath) {

  if (!newFolderPath) { return; }

  // console.log(`Criando pastas recursivas -> ${newFolderPath}`)

  const foldersArr = newFolderPath.split('\\');
  if (foldersArr.length === 0) { return; }

  let oldFolder = '';

  for (const folder of foldersArr) {

    const newbase = join('./', oldFolder, folder);
    const doesFolderExist = existsSync(newbase);

    if (!doesFolderExist) {
      mkdirSync(newbase);
    }

    oldFolder = newbase;

  }

}
