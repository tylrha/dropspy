import dotenv from 'dotenv'
dotenv.config()

import {join} from 'path'
import {readdirSync, statSync, existsSync} from 'fs'

/* FILES ==================================================================== */

import {readJson} from '../utils/libraries/utils'
const APP_CONFIGS = readJson('/configs/app-configs.json')

/* FUNCTIONS ================================================================ */

import LOGGER from '../utils/functions/logger'
import {delay as DELAY} from '../utils/libraries/utils'
import {importFromRootPath as IMPORT_MODULE, getPathFromRoot as ROOT_PATH} from '../utils/libraries/globalPath'
import {getCurrentDateTime as CURRENT_DATETIME} from '../utils/libraries/dates'

/* GOOGLE =================================================================== */

const ALIHUNTER_GMAIL_USERNAME = APP_CONFIGS['alihunter_configs'].gmail_username
const ALIHUNTER_GMAIL_PASSWORD = APP_CONFIGS['alihunter_configs'].gmail_password

/* DATABASE ================================================================= */

const DATABASE_BASEURL = APP_CONFIGS['database_configs'].database_baseurl
const DATABASE_USERNAME = APP_CONFIGS['database_configs'].database_username
const DATABASE_PASSWORD = APP_CONFIGS['database_configs'].database_password
const DATABASE_LOGIN_URL = `mongodb+srv://${DATABASE_USERNAME}:${DATABASE_PASSWORD}@${DATABASE_BASEURL}`

const DATABASE_DATABASE_SPY = APP_CONFIGS['database_configs'].database_spy
const DATABASE_COLLECTION_DATES = APP_CONFIGS['database_configs'].collection_spy_dates
const DATABASE_COLLECTION_STORES = APP_CONFIGS['database_configs'].collection_spy_stores
const DATABASE_COLLECTION_PRODUCTS = APP_CONFIGS['database_configs'].collection_spy_products

/* GOOGLE SHEET ============================================================= */

const GSHEET_IM_SPY_ID = APP_CONFIGS['google_sheets_configs'].im_spy_id
const GSHEET_IM_SPY_STORES_SHEET_NAME = APP_CONFIGS['google_sheets_configs'].im_spy_stores_sheet_name
const GSHEET_IM_SPY_BOTS_SHEET_NAME = APP_CONFIGS['google_sheets_configs'].im_spy_bots_sheet_name
const GSHEET_IM_SPY_DASHBOARD_SHEET_NAME = APP_CONFIGS['google_sheets_configs'].im_spy_dashboard_sheet_name

const GSHEET_IM_SPY_BOTS_CONTROLL_CELL = APP_CONFIGS['google_sheets_configs'].im_spy_bots_bots_controll_cell
const GSHEET_IM_SPY_CURRENT_SERVER_CELL = APP_CONFIGS['google_sheets_configs'].im_spy_dashboard_current_server_cell
const GSHEET_IM_SPY_API_URL = APP_CONFIGS['google_sheets_configs'].im_spy_api_url

/* SPY ====================================================================== */

const randBetweenTwoNumbers = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
if (!global.RANDOM_NUMBER){global.RANDOM_NUMBER = randBetweenTwoNumbers(1, 2)}
const SPYBOT_LOOP_INTERVAL = Number(global.RANDOM_NUMBER * 60)
const SPYBOT_APP_USER = process.env.SPYBOT_APP_USER

/* WORKER =================================================================== */

const WORKER_RESTART_INTERVAL = APP_CONFIGS['worker_configs'].restart_interval
const WORKER_MAX_INSTANCES = APP_CONFIGS['worker_configs'].max_instances

/* BROWSER ================================================================== */

const _getBrowserExtensionsString = () => {
  const _unzipedExtensionsFolder = APP_CONFIGS['browser_configs'].browser_extensions_unziped_folder
  const _doesFolderExist = existsSync(_unzipedExtensionsFolder)
  if (!_doesFolderExist){return ""}

  const _folderContentArr = readdirSync(_unzipedExtensionsFolder)
  return _folderContentArr.filter(item => statSync(join(_unzipedExtensionsFolder, item)).isDirectory()).map(extFolder =>  ROOT_PATH(join(_unzipedExtensionsFolder, extFolder))).join()
}

const BROWSER_EXTENSIONS = _getBrowserExtensionsString()
const BROWSER_HEADLESS_MODE = APP_CONFIGS['browser_configs'].headless_mode
const BROWSER_WIDTH = APP_CONFIGS['browser_configs'].browser_width
const BROWSER_HEIGHT = APP_CONFIGS['browser_configs'].browser_height

/* GENERAL ================================================================== */

const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : "development"
const VERSION = process.env.npm_package_version || "#"
const REDIS_URL = process.env.REDIS_URL || "redis://127.0.0.1:6379";

/* SERVER =================================================================== */

const SERVER_PORT = process.env.PORT || APP_CONFIGS['server_configs'].default_port
const SERVER_TOKEN = process.env.SERVER_TOKEN || ''
const SERVER_BASE = NODE_ENV === "production" ? `https://dropspy-${SPYBOT_APP_USER.replace("p", "")}.herokuapp.com` : `http://localhost:${SERVER_PORT}`

/* EXPORT =================================================================== */

export {

  APP_CONFIGS,

  LOGGER,
  DELAY,
  IMPORT_MODULE,
  ROOT_PATH,
  CURRENT_DATETIME,

  ALIHUNTER_GMAIL_USERNAME,
  ALIHUNTER_GMAIL_PASSWORD,

  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_BASEURL,
  DATABASE_LOGIN_URL,

  DATABASE_DATABASE_SPY,
  DATABASE_COLLECTION_DATES,
  DATABASE_COLLECTION_STORES,
  DATABASE_COLLECTION_PRODUCTS,

  GSHEET_IM_SPY_ID,
  GSHEET_IM_SPY_STORES_SHEET_NAME,
  GSHEET_IM_SPY_BOTS_SHEET_NAME,
  GSHEET_IM_SPY_DASHBOARD_SHEET_NAME,
  GSHEET_IM_SPY_BOTS_CONTROLL_CELL,
  GSHEET_IM_SPY_CURRENT_SERVER_CELL,
  GSHEET_IM_SPY_API_URL,

  SPYBOT_LOOP_INTERVAL,
  SPYBOT_APP_USER,

  WORKER_RESTART_INTERVAL,
  WORKER_MAX_INSTANCES,

  BROWSER_HEADLESS_MODE,
  BROWSER_WIDTH,
  BROWSER_HEIGHT,
  BROWSER_EXTENSIONS,

  NODE_ENV,
  VERSION,
  REDIS_URL,

  SERVER_PORT,
  SERVER_TOKEN,
  SERVER_BASE,

}

/*

// const DATABASE_DATABASE_WPP = APP_CONFIGS['database_configs'].database_wpp
// const DATABASE_DATABASE_GENERAL = APP_CONFIGS['database_configs'].database_general
// const DATABASE_COLLECTION_VARIABLES = APP_CONFIGS['database_configs'].collection_variables

// const DATABASE_DATABASE_SPY = APP_CONFIGS['database_configs'].database_spy
// const DATABASE_COLLECTION_SPY_PRODUCTS = APP_CONFIGS['database_configs'].collection_spy_products
// const DATABASE_COLLECTION_SPY_STORES = APP_CONFIGS['database_configs'].collection_spy_stores
// const DATABASE_COLLECTION_SPY_DATES = APP_CONFIGS['database_configs'].collection_spy_dates

// const GSHEET_IM_GERAL_ID = APP_CONFIGS['google_sheets_configs'].im_geral_id
// const GSHEET_IM_GERAL_WPP_STATUS_CELL = APP_CONFIGS['google_sheets_configs'].im_geral_wpp_status_cell

// const GSHEET_IM_SPY_ID = APP_CONFIGS['google_sheets_configs'].im_spy_id
// const GSHEET_IM_SPY_STORES_SHEET_NAME = APP_CONFIGS['google_sheets_configs'].im_spy_stores_sheet_name
// const GSHEET_IM_SPY_STORES_QUANTITY = APP_CONFIGS['google_sheets_configs'].im_spy_stores_quantity

// const GSHEET_IM_SPY_BOTS_SHEET_NAME = APP_CONFIGS['google_sheets_configs'].im_spy_bots_sheet_name
// const GSHEET_IM_SPY_BOTS_QUANTITY = APP_CONFIGS['google_sheets_configs'].im_spy_bots_quantity

WPP_IM_GROUP_CHATID=559185174224-1617326973@g.us

TEL_IM_GROUP_CHATID=-628533591
TEL_BOT_TOKEN=5188998877:AAGFJ2CILN3diZU__jdT1jbsnC8mEsEKVYI
NTBA_FIX_319=1

DATABASE_USERNAME=imsuperuser
DATABASE_PASSWORD=imsuperpass
DATABASE_BASEURL=cluster0.tc8lz.mongodb.net

*/
