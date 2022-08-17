import {
  IMPORT_MODULE,
} from '../../../configs/configs'

export default async function getAllRoutesRouter() {

  let pageRoutes = []

  pageRoutes.push(...[
    ["/", await IMPORT_MODULE('/src/server/routes/homepage/home-controller')],
    ["/api", await IMPORT_MODULE('/src/server/routes/api/api-controller')],
    // ["/screenshot", await IMPORT_MODULE('/src/server/routes/screenshot/screenshot-controller')],
    ["/create", await IMPORT_MODULE('/src/server/routes/create/create-controller')],
    ["/restart", await IMPORT_MODULE('/src/server/routes/restart/restart-controller')],
    ["/close", await IMPORT_MODULE('/src/server/routes/close/close-controller')],
  ])

  return pageRoutes

}

