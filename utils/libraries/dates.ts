export {
  getDateInfoObjFromStringDate,
  getDateInfoObjFromIsoDate,

  addTimeToDateObject,
  getCurrentDateTimeString,

  getDateFromString,
  getIsoDateFromString,
  getStringDateFromDate,

  convertDateInfoObjToStringDate,
  converteDateToUTC
}

/* ########################################################################## */

const DATETIME_SEPARATOR = " "
const DATE_SEPARATOR = "/"
const TIME_SEPARATOR = ":"

const ISODATE_DATETIME_SEPARATOR = "T"
const ISODATE_DATE_SEPARATOR = "-"
const ISODATE_TIME_SEPARATOR = ":"
const ISODATE_SECONDS_SEPARATOR = "."

/* ########################################################################## */

function getDateInfoObjFromStringDate(dateString: string) {

  const dateStringArr: Array<string> = dateString.split(DATETIME_SEPARATOR)

  const dateArr = dateStringArr[0].split(DATE_SEPARATOR)
  const day: number = Number(dateArr[0])
  const month: number = Number(dateArr[1]) - 1
  const year: number = Number(dateArr[2])

  let timeArr: Array<Number> = [0, 0];
  if (dateStringArr.length > 1) {
    timeArr = dateStringArr[1].split(TIME_SEPARATOR).map(str => Number(str))
  }

  const hour: number = Number(timeArr[0])
  const minutes: number = Number(timeArr[1])
  const seconds: string = "00"

  return {
    day: Number(day) < 10 ? `0${day}` : day,
    month: Number(month) + 1 ? `0${Number(month) + 1}` : Number(month) + 1,
    year,
    hour,
    minutes,
    seconds
  }
}

function getDateInfoObjFromIsoDate(isoDate: string) {

  const dateObjArr = isoDate.split(ISODATE_DATETIME_SEPARATOR)
  const dateArr = dateObjArr[0]
  const [year, month, day] = dateArr.split(ISODATE_DATE_SEPARATOR)

  const timeArr = dateObjArr[1]
  const [hour, minutes, seconds] = timeArr.split(ISODATE_TIME_SEPARATOR)

  return {
    day,
    month: month,
    year,
    hour,
    minutes,
    seconds: seconds.split(ISODATE_SECONDS_SEPARATOR)[0]
  }
}

/* ########################################################################## */

function addTimeToDateObject(dataObj: Date, hoursToAdd: number): Date{

  const hoursToSubtract = (hoursToAdd * 60) * 60 * 1000
  return new Date(dataObj.getTime() + hoursToSubtract)

}

function getCurrentDateTimeString(option?: 'date' | 'time') {

  const currentDate = new Date()
  const utcDate = converteDateToUTC(currentDate)

  const isoDate = utcDate.toISOString()

  const dateInfoObj = getDateInfoObjFromIsoDate(isoDate)
  return convertDateInfoObjToStringDate(dateInfoObj, option)

}

function getDateFromString(dateString: string): Date {

  const dateInfoObj = getDateInfoObjFromStringDate(dateString)
  const {
    day,
    month,
    year,
    hour,
    minutes,
    seconds
  } = dateInfoObj

  const oldDateObj = new Date(year, Number(month) - 1, Number(day), hour, minutes, Number(seconds))
  const dateObj = converteDateToUTC(oldDateObj);
  return dateObj
}

function getIsoDateFromString(dateString: string) {

  const dateInfoObj = getDateInfoObjFromStringDate(dateString)
  const {
    day,
    month,
    year,
    hour,
    minutes,
    seconds
  } = dateInfoObj

  const fixedHour = Number(hour) < 10 ? `0${hour}` : hour
  const fixedMinutes = Number(minutes) < 10 ? `0${minutes}` : minutes
  const fixedSeconds = Number(seconds) < 10 ? `0${seconds}` : seconds

  const isoDate = `${year}${ISODATE_DATE_SEPARATOR}${month}${ISODATE_DATE_SEPARATOR}${day}`
  const isoTime = `${fixedHour}${ISODATE_TIME_SEPARATOR}${fixedMinutes}${ISODATE_TIME_SEPARATOR}${fixedSeconds}${ISODATE_SECONDS_SEPARATOR}000Z`

  const isoDateString = `${isoDate}${ISODATE_DATETIME_SEPARATOR}${isoTime}`
  return isoDateString
}

function getStringDateFromDate(oldDate: Date, option?: 'date' | 'time') {

  const dateInfoObj = getDateInfoObjFromIsoDate(oldDate.toISOString())
  return convertDateInfoObjToStringDate(dateInfoObj, option)

}

/* ########################################################################## */

function convertDateInfoObjToStringDate(dateInfoObj: object, option?: 'date' | 'time'): string {

  const currentDate = `${dateInfoObj['day']}${DATE_SEPARATOR}${dateInfoObj['month']}${DATE_SEPARATOR}${dateInfoObj['year']}`
  const currentTime = `${dateInfoObj['hour']}${TIME_SEPARATOR}${dateInfoObj['minutes']}${TIME_SEPARATOR}${dateInfoObj['seconds']}`

  if (option === "date") {
    return currentDate
  } else if (option === "time") {
    return currentTime
  } else {
    return currentDate + DATETIME_SEPARATOR + currentTime
  }

}

function converteDateToUTC(oldDateObj: Date): Date {
  return new Date(Date.UTC(oldDateObj.getFullYear(), oldDateObj.getMonth(), oldDateObj.getDate(), oldDateObj.getHours(), oldDateObj.getMinutes(), oldDateObj.getSeconds()));
}

/* ########################################################################## */

/*
  console.log(dates.getCurrentDateTimeString('date'))
  console.log(dates.getCurrentDateTimeString('time'))
  console.log(dates.getCurrentDateTimeString())
  console.log("\n\n")

  const dateStr = "03/07/2022 22:49:00"
  const dateFromString = dates.getDateFromString(dateStr)
  const isoDateFromString = dates.getIsoDateFromString(dateStr)
  const stringFromDate = dates.getStringDateFromDate(dateFromString)

  console.log(dateStr)
  console.log(dateFromString)
  console.log(dateFromString.toISOString())
  console.log(isoDateFromString)
  console.log(stringFromDate)
*/
