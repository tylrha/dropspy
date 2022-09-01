import { existsSync, readFileSync } from 'fs';
import { getPathFromRoot } from './globalPath';

export {
  delay,
  readJson,
  doesFileExists,
  sortArrayByColumn
};

/* ########################################################################## */

function delay(time: number): Promise<void> {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

function readJson(jsonPath: string): object {

  const finalPath = getPathFromRoot(jsonPath);

  if (!existsSync(finalPath)) {
    console.log(`Json ${finalPath} não foi encontrado!`);
    return {};
  }

  const rawdata = readFileSync(finalPath);
  return JSON.parse(rawdata.toString());

}

function doesFileExists(filePath: string) {
  return existsSync(filePath);
}

function sortArrayByColumn(arrToSort: any[], keyToSort: string): any[] {

  if (!arrToSort || !keyToSort) { return; }
  let newArr = [...arrToSort];

  newArr = newArr.sort(sortFunction);

  function sortFunction(a, b) {
    if (a[keyToSort] === b[keyToSort]) {
      return 0;
    } else {
      return (a[keyToSort] < b[keyToSort]) ? -1 : 1;
    }
  }

  return newArr;
}

/* ########################################################################## */
