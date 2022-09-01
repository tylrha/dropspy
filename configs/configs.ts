import dotenv from 'dotenv';
import { join, basename, dirname } from 'path';
import { readJson } from '../utils/libraries/utils';
import { addTimeToDateObject, converteDateToUTC, getDateInfoObjFromIsoDate, convertDateInfoObjToStringDate } from '../utils/libraries/dates';

dotenv.config();

/* FILES ==================================================================== */
const APP_CONFIGS = readJson('/configs/app-configs.json');

/* ENVIRONMENT ============================================================== */
const DEFALT_NODE_ENV = 'development';
const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : DEFALT_NODE_ENV;

const DIST_FOLDER = APP_CONFIGS['project_configs'].dist_folder?.replace('./', '');
const RUNING_TYPE = basename(dirname(__dirname)) === DIST_FOLDER ? 'production' : 'development';

/* FUNCTIONS ================================================================ */

const GET_RANDOM_NUMBER = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
import LOGGER from '../utils/logger/logger';
import { delay as DELAY } from '../utils/libraries/utils';
import { importFromRootPath as IMPORT_MODULE, getPathFromRoot as ROOT_PATH } from '../utils/libraries/globalPath';

const CURRENTE_DATE = (): Date => {
  let curDateObj: Date;

  if (NODE_ENV === 'production') {
    const _heroku_difference_time_hours = -3;
    curDateObj = addTimeToDateObject(new Date(), _heroku_difference_time_hours);
  } else {
    curDateObj = new Date();
  }

  return curDateObj;
};

const CURRENT_DATETIME = (option?: 'date' | 'time') => {

  const utcDate = converteDateToUTC(CURRENTE_DATE());
  const isoDate = utcDate.toISOString();
  const dateInfoObj = getDateInfoObjFromIsoDate(isoDate);
  return convertDateInfoObjToStringDate(dateInfoObj, option);

};

/* GOOGLE =================================================================== */
const EMAILS_JSON = readJson('/configs/alihunter-emails.json') as [];
const _max_emails = Array.from(EMAILS_JSON).length - 1;
const _email_index = GET_RANDOM_NUMBER(0, _max_emails);
const ALIHUNTER_USER = EMAILS_JSON[_email_index];

/* DATABASE ================================================================= */

const DATABASE_LOGIN_URL = `mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_BASEURL}`;
const DATABASE_DATABASE_SPY = process.env.DATABASE_NAME;
const DATABASE_COLLECTION_DATES = process.env.DATABASE_COLLECTION_DATES;
const DATABASE_COLLECTION_STORES = process.env.DATABASE_COLLECTION_STORES;
const DATABASE_COLLECTION_PRODUCTS = process.env.DATABASE_COLLECTION_PRODUCTS;
const DATABASE_COLLECTION_BOTS = process.env.DATABASE_COLLECTION_BOTS;
const DATABASE_COLLECTION_ADMIN = process.env.DATABASE_COLLECTION_ADMIN;
const DATABASE_COLLECTION_STORES_BY_DATES = process.env.DATABASE_COLLECTION_STORES_BY_DATE;
const DATABASE_COLLECTION_LABELS = process.env.DATABASE_COLLECTION_LABELS;

/* SPY ====================================================================== */
const _min_minutes = NODE_ENV === DEFALT_NODE_ENV ? 1 : 4;
const _max_minutes = NODE_ENV === DEFALT_NODE_ENV ? 1 : 9;

if (!global.RANDOM_NUMBER) { global.RANDOM_NUMBER = GET_RANDOM_NUMBER(_min_minutes, _max_minutes); }
const SPYBOT_LOOP_INTERVAL = Number(global.RANDOM_NUMBER * 60);
const SPYBOT_APP_USER = process.env.SPYBOT_APP_USER || '';

/* WORKER =================================================================== */

const WORKER_RESTART_INTERVAL = APP_CONFIGS['worker_configs'].restart_interval;
const WORKER_MAX_INSTANCES = APP_CONFIGS['worker_configs'].max_instances;

/* BROWSER ================================================================== */
const _browser_extensions_path = APP_CONFIGS['browser_configs'].browser_extensions_zip_folder;
const _browser_extensions_extracted_path = APP_CONFIGS['browser_configs'].browser_extensions_unziped_folder;
const BROWSER_EXTENSIONS_PATH = RUNING_TYPE === 'development' ? _browser_extensions_path : join(DIST_FOLDER, _browser_extensions_path);
const BROWSER_EXTENSIONS_UNZIPED_PATH = RUNING_TYPE === 'development' ? _browser_extensions_extracted_path : join(DIST_FOLDER, _browser_extensions_extracted_path);

const _browser_session_path = APP_CONFIGS['browser_configs'].browser_session_folder;
const _browser_session_extracted_path = APP_CONFIGS['browser_configs'].browser_session_unziped_folder;

const BROWSER_SESSION_PATH = RUNING_TYPE === 'development' ? _browser_session_path : join(DIST_FOLDER, _browser_session_path);
const BROWSER_SESSION_UNZIPED_PATH = RUNING_TYPE === 'development' ? _browser_session_extracted_path : join(DIST_FOLDER, _browser_session_extracted_path);

const BROWSER_HEADLESS_MODE = APP_CONFIGS['browser_configs'].headless_mode;

/* GENERAL ================================================================== */

const VERSION = process.env.npm_package_version || '#';
const REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379';

/* SERVER =================================================================== */
const _appname = APP_CONFIGS['project_configs'].appname;
const SERVER_PORT = process.env.PORT || APP_CONFIGS['server_configs'].default_port;
const SERVER_TOKEN = process.env.SERVER_TOKEN || '';
const SERVER_BASE = NODE_ENV === DEFALT_NODE_ENV ? `http://localhost:${SERVER_PORT}` : `https://${_appname}-${SPYBOT_APP_USER.replace('p', '')}.herokuapp.com`;

const USE_SAVED_ALIHUNTER_SESSIONS = APP_CONFIGS['project_configs'].use_saved_alihunter_sessions;

/* EXPORT =================================================================== */

export {

  APP_CONFIGS,

  DEFALT_NODE_ENV,
  NODE_ENV,
  DIST_FOLDER,
  RUNING_TYPE,

  GET_RANDOM_NUMBER,
  CURRENTE_DATE,
  LOGGER,
  DELAY,
  IMPORT_MODULE,
  ROOT_PATH,
  CURRENT_DATETIME,

  ALIHUNTER_USER,

  DATABASE_LOGIN_URL,
  DATABASE_DATABASE_SPY,
  DATABASE_COLLECTION_DATES,
  DATABASE_COLLECTION_STORES,
  DATABASE_COLLECTION_PRODUCTS,
  DATABASE_COLLECTION_BOTS,
  DATABASE_COLLECTION_ADMIN,
  DATABASE_COLLECTION_STORES_BY_DATES,
  DATABASE_COLLECTION_LABELS,

  SPYBOT_LOOP_INTERVAL,
  SPYBOT_APP_USER,

  WORKER_RESTART_INTERVAL,
  WORKER_MAX_INSTANCES,

  BROWSER_EXTENSIONS_PATH,
  BROWSER_EXTENSIONS_UNZIPED_PATH,
  BROWSER_SESSION_PATH,
  BROWSER_SESSION_UNZIPED_PATH,

  BROWSER_HEADLESS_MODE,

  VERSION,
  REDIS_URL,

  SERVER_PORT,
  SERVER_TOKEN,
  SERVER_BASE,
  USE_SAVED_ALIHUNTER_SESSIONS
};
