import mongoose, { Schema, Document } from 'mongoose'
import { DATABASE_COLLECTION_LABELS, LOGGER } from '../../../../configs/configs'

/* -------------------------------------------------------------------------- */

interface ILabel {
  name: string,
  synonyms: string[],
  type: string,
  compare: string,
}

interface ILabelMongo extends ILabel, Document{

}

// type ILabel = Omit<ILabelMongo, '_id' | '__v'>
type ILabelUnion = ILabel | ILabelMongo

const labelSchema: Schema = new Schema(
  {
    name: String,
    synonyms: [String],
    type: String,
    compare: String,
  },
  {
    versionKey: false
  }
)

const Label = mongoose.model<ILabelMongo>(DATABASE_COLLECTION_LABELS, labelSchema)

/* -------------------------------------------------------------------------- */

async function saveNewLabel(labelObj: ILabelMongo){
  return await labelObj.save()
}

function generateNewLabel(labelObj: ILabel): ILabelMongo{

  LOGGER(`Gerando objeto de etiqueta [${labelObj.name}]`, {from: "DTBASE", pid: true})

  return new Label(labelObj)
}


async function getLabelsFromDatabase(labelsQuery: any): Promise<ILabelMongo[]>{

  LOGGER(`Obtendo etiquetas`, {from: "DTBASE", pid: true})

  try{
    const labelsObj = await Label.find(labelsQuery)
    return labelsObj
  } catch(e){
    LOGGER(`ERRO: ${e.message}`, {from: "DTBASE", pid: true})
    return null
  }
}

async function getLabelFromDatabase(labelName: string): Promise<ILabelMongo>{

  LOGGER(`Obtendo etiqueta: [${labelName}]`, {from: "DTBASE", pid: true})

  try{
    const labelObj = await Label.findOne({name: labelName})
    return labelObj
  } catch(e){
    LOGGER(`ERRO: ${e.message}`, {from: "DTBASE", pid: true})
    return null
  }
}

/* -------------------------------------------------------------------------- */

export {

  ILabelMongo,
  ILabel,
  ILabelUnion,
  labelSchema,
  Label,

  saveNewLabel,
  generateNewLabel,
  getLabelsFromDatabase,
  getLabelFromDatabase

}
