// import { getCurrentServer } from "../../../local/spy-sheets-api";
// import fetchJsonUrl from "../../functions/fetch-json-url";

// export default async function telegramLogger(message){

//   const serverBase = process.env.NODE_ENV === "production" ? await getCurrentServer() : "http://localhost:3000"
//   const telegramLoggerUrl = `${serverBase}/api/telegram/logger?message=${message}`
//   const serverResponse = await fetchJsonUrl(telegramLoggerUrl)
//   return serverResponse.jobResult

// }
