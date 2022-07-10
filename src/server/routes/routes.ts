import {
  IMPORT_MODULE,
} from '../../../configs/configs'

export default async function getAllRoutesRouter() {

  let pageRoutes = []

  pageRoutes.push(...[
    ["/", await IMPORT_MODULE('/src/server/routes/homepage/home-controller')],
    ["/restart", await IMPORT_MODULE('/src/server/routes/restart/restart-controller')],
    ["/quit", await IMPORT_MODULE('/src/server/routes/quit/quit-controller')],
    ["/api", await IMPORT_MODULE('/src/server/routes/api/api-controller')]
  ])

  return pageRoutes

}

