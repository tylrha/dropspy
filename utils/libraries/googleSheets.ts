import { google } from 'googleapis'

export {
  getGoogleSheetsAuthedObj,
  getSheetsRangeValues
}

async function getGoogleSheetsAuthedObj(credPath){

  const auth = new google.auth.GoogleAuth({
    keyFile: credPath,
    scopes: "https://www.googleapis.com/auth/spreadsheets"
  })

  try{
    const client = await auth.getClient()
    const authedClient = google.sheets({ version: 'v4', auth: client })
    return authedClient
  } catch(e){
    return false
  }

}

async function getSheetsRangeValues(authedSheet, sheetId, sheetRange){

  try {
    const sheetRangeValues = await authedSheet.spreadsheets.values.get({ spreadsheetId: sheetId, range: sheetRange })
    return sheetRangeValues.data.values
  } catch (error) {
    console.log(error.message)
    return []
  }
}
