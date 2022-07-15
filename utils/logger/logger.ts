import clc from 'cli-color'
import { getCurrentDateTimeString } from '../libraries/dates'

import telegramLogger from './components/telegram-logger'
import whatsappLogger from './components/whatsapp-logger'
import mongodbLogger from './components/mongodb-logger'

const TEXT_COLORS_ARR = [
  ['DEFAULT', clc.bgBlue.bold, clc.blue],
  ['WARM', clc.bgYellow, clc.yellow],
  ['ERROR', clc.bgRed, clc.red]
]

const FROM_ARR = [
  "MASTER",
  "SERVER",
  "WORKER",
  "SPYBOT",
  "DTBASE",
  "DEFAULT"
] as const

type T_FROM = typeof FROM_ARR[number]

const FROM_COLORS_ARR = [
  [FROM_ARR[0], clc.bgGreen.bold, clc.green],
  [FROM_ARR[1], clc.bgCyan.bold, clc.cyan],
  [FROM_ARR[2], clc.bgMagenta.bold, clc.magenta],
  [FROM_ARR[3], clc.bgBlue.bold, clc.blue],
  [FROM_ARR[4], clc.bgBlackBright.bold, clc.blackBright],
  [FROM_ARR[5], clc.white, clc.black]
]

const LOGGER_ARR = [
  "mongodb",
  "telegram",
  "whatsapp"
] as const

type T_LOGGER = typeof LOGGER_ARR[number]

interface loggerOptions {
  logger?: T_LOGGER,
  from?: T_FROM,
  pid?: boolean,
  datetime?: boolean,
  isError?: boolean,
  isWarm?: boolean,
  byTextType?: boolean
}

const DEFAULT_SEPARATOR = "|"
const NODE_ENV = process.env.NODE_ENV || "development"
const SHOULD_SKIP_COLLORED_LOGGER = (opt) => NODE_ENV === "production" || (opt && opt.logger)

// ########################################################################## //
// ########################################################################## //
// ########################################################################## //

export default async function logger(message: any, options?: loggerOptions) {

  if (!message) { return }

  // SET DEFAULT SETTINGS ==============================
  const fromPart = options?.from ? getFromPart(options) : getFromPart({...options, from: "DEFAULT"})
  const pidPart = options?.pid ? getPidPart(options) : ""
  const dateTimePart = options?.datetime ? getDateTimePart(options) : ""
  const isPart = (options?.isError || options?.isWarm) ? getIsPart(options) : ""
  const msgPart = getColoredText(message, options)

  const finalMessage = `${fromPart}${pidPart}${dateTimePart}${isPart}${msgPart}`

  // LOGS IN PRODUCTION ENVIRONMENTS ===================
  if (options && options.logger) {

    if (options.logger === 'whatsapp') {
      await whatsappLogger(message)
    } else if (options.logger === 'telegram') {
      await telegramLogger(message)
    } else if (options.logger === 'mongodb') {
      await mongodbLogger(message)
    } else {
      console.log(`${options.logger}: ` + finalMessage)
    }

  } else {
    console.log(finalMessage)
  }

}

// ########################################################################## //
// ########################################################################## //
// ########################################################################## //

function getFromPart(options: loggerOptions) {

  try {

    const { from } = options
    if (!from) { throw new Error("From não foi definido") }

    const fromMaxCharacters = 7
    const correctedFrom = from.length < fromMaxCharacters ? from + ' '.repeat(Number(fromMaxCharacters - from.length)) : from
    const fromRow = `${correctedFrom}`
    const fromOtherRow = ` ${DEFAULT_SEPARATOR} `

    if (SHOULD_SKIP_COLLORED_LOGGER(options)) { return fromRow + fromOtherRow }

    const collorFunction = getCollorFunctionDependingOnChoices(options)
    const fromRowColored = collorFunction(fromRow) + getColoredText(fromOtherRow, options)
    return fromRowColored

  } catch (e) {
    console.log(e.message)
    return ""
  }

}

function getPidPart(options: loggerOptions) {

  try {
    const { pid } = options
    if (!pid) { throw new Error("pid não foi definido") }

    const pidMaxCharacters = 5
    const pidStr = process.pid.toString().substring(0, pidMaxCharacters);
    const correctedPid = pidStr.length < pidMaxCharacters ? ' '.repeat(Number(pidMaxCharacters - pidStr.length)) + pidStr : pidStr
    const pidRow = `${correctedPid} ${DEFAULT_SEPARATOR} `
    if (SHOULD_SKIP_COLLORED_LOGGER(options)) { return pidRow }

    const collorFunction = getCollorFunctionDependingOnChoices(options)
    const pidRowColored = collorFunction(pidRow)
    return pidRowColored

  } catch (e) {
    return ""
  }

}

function getDateTimePart(options: loggerOptions) {

  try {
    const { datetime } = options
    if (!datetime) { throw new Error("datetime não foi definido") }

    const dateTimeRow = `${getCurrentDateTimeString('time')} ${DEFAULT_SEPARATOR} `
    if (SHOULD_SKIP_COLLORED_LOGGER(options)) { return dateTimeRow }

    const collorFunction = getCollorFunctionDependingOnChoices(options)
    const dateTimeRowColored = collorFunction(dateTimeRow)
    return dateTimeRowColored

  } catch (e) {
    return ""
  }

}

function getIsPart(options: loggerOptions) {

  try {

    let whichIs = options.isError ? "ERROR  " : "WARM   "
    const isRow = `${whichIs} ${DEFAULT_SEPARATOR} `
    if (SHOULD_SKIP_COLLORED_LOGGER(options)) { return isRow }

    const collorFunction = getCollorFunctionDependingOnChoices(options)
    const isRowColored = collorFunction(isRow)
    return isRowColored

  } catch (e) {
    return ""
  }

}




// ########################################################################## //
// ########################################################################## //
// ########################################################################## //

function getCollorFunction(colorsArr, option, colIndex?: number) {
  if (!colorsArr || !option) { return }
  const index = colorsArr.findIndex(arr => arr[0] === option)
  const colArrIndex = colIndex ? colIndex : 1
  if (index > -1) { return colorsArr[index][colArrIndex] }
}

function getCurrentTextType(option) {
  const { isError, isWarm } = option
  if (isError) { return "ERROR" }
  if (isWarm) { return "WARM" }
  return "DEFAULT"
}

function getColoredText(text: string, options: loggerOptions) {

  try {

    const textRow = `${text}`
    if (SHOULD_SKIP_COLLORED_LOGGER(options)) { return textRow }

    const collorFunction = getCollorFunctionDependingOnChoices(options)
    const textRowColored = collorFunction(textRow)
    return textRowColored

  } catch (e) {
    console.log(e)
    return ""
  }
}

function getCollorFunctionDependingOnChoices(options: loggerOptions) {

  let collorFunction;

  if (options && options.isError) {
    collorFunction = getCollorFunction(TEXT_COLORS_ARR, "ERROR", 2)
  } else if (options && options.isWarm) {
    collorFunction = getCollorFunction(TEXT_COLORS_ARR, "WARM", 2)
  } else if (options && options.byTextType) {
    collorFunction = getCollorFunction(TEXT_COLORS_ARR, getCurrentTextType(options))
  } else if (options && options.from) {
    collorFunction = getCollorFunction(FROM_COLORS_ARR, options.from, 2)
  } else {
    collorFunction = getCollorFunction(FROM_COLORS_ARR, "DEFAULT", 2)
  }

  return collorFunction
}

// ########################################################################## //
// ########################################################################## //
// ########################################################################## //
