import { MongoClient } from 'mongodb';

import {
  LOGGER,
  DATABASE_LOGIN_URL
} from '../configs/configs';

export default async function connectDatabase() {

  const client = await MongoClient.connect(DATABASE_LOGIN_URL, {});

  if (client) {
    LOGGER('Banco de dados conectado', { from: 'DTBASE', pid: true });
    return client;
  } else {
    LOGGER('Não foi possível conectar ao banco de dados', { from: 'DTBASE', pid: true });
    return null;
  }

}
