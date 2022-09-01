import {
  SERVER_PORT,
  CURRENT_DATETIME,
  VERSION,
  LOGGER
} from '../../configs/configs';

import express from 'express';
import getAllRoutes from './routes/routes';

export default async function initServer() {

  const server = express();

  const router = express.Router();
  const allRoutes = await getAllRoutes();

  for (const curRoute of allRoutes) {
    const [route, controller] = curRoute;
    router.get(`${route}`, controller);
  }

  server.use('/', router);

  server.listen(SERVER_PORT, async () => {
    LOGGER(`SERVER STARTED AT PORT ${SERVER_PORT} - [${VERSION}] - ${CURRENT_DATETIME()}`, { from: 'SERVER', pid: true });
  }).setTimeout(0);

}
