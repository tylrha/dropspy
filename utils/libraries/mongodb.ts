import {MongoClient} from 'mongodb'

export {
  initMongoClient,
  findObjInCollection,
  AddObjToCollection,
  updateObjInCollection,
  deleteObjInCollection
}

async function initMongoClient(db_url: string, db_options: object): Promise<MongoClient | false> {
  try {
    const mongo = MongoClient;
    return await mongo.connect(db_url, db_options);
  } catch (e) {
    console.log(e)
    return false;
  }
}

async function findObjInCollection(dbClient, dbName, collection, objToSearch) {

  try {

    if (!dbClient){throw new Error("Banco de dados não definido")}

    const db = await dbClient.db(dbName)
    const col = await db.collection(collection)
    const findObj = await col.find(objToSearch).toArray()

    if (findObj.length > 0) {
      return findObj
    } else {
      return false
    }

  } catch (error) {
    console.log(error)
    return false
  }

}


async function AddObjToCollection(dbClient, dbName, collection, objToSend, hideMessage?: boolean) {

  try {

    if (!dbClient){throw new Error("Banco de dados não definido")}

    const db = await dbClient.db(dbName)
    const col = await db.collection(collection)
    const addedDocument = await col.insertOne(objToSend);

    if (addedDocument) {
      if (!hideMessage) {console.log(`Documento enviado com sucesso`)}
      return true
    } else {
      if (!hideMessage) {console.log(`Erro ao enviar documento`)}
      return false
    }

  } catch (error) {
    console.log(error)
    if (!hideMessage) {console.log(`${error.message}`)}
    return false
  }

}


async function updateObjInCollection(dbClient, dbName, collection, objToSearch, newObj) {

  try {

    if (!dbClient){throw new Error("Banco de dados não definido")}

    const db = await dbClient.db(dbName)
    const col = await db.collection(collection)

    const updateObjResponse =  await col.updateOne(objToSearch, { '$set': newObj });

    if (updateObjResponse) {
      return true
    } else {
      return false
    }

  } catch (error) {
    console.log(error)
    return false
  }

}

async function deleteObjInCollection(dbClient, dbName, collection, objToSearch) {

  try {

    if (!dbClient){throw new Error("Banco de dados não definido")}

    const db = await dbClient.db(dbName)
    const col = await db.collection(collection)

    const delObj =  await col.deleteOne(objToSearch);

    if (delObj) {
      return true
    } else {
      return false
    }

  } catch (error) {
    console.log(error)
    return false
  }

}

