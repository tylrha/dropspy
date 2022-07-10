import mongoose, {Schema, Document} from 'mongoose'
import { DATABASE_COLLECTION_STORES } from '../../../../configs/configs'
import {IStore, storeSchema} from './IStore'

const Store = mongoose.model<IStore>(DATABASE_COLLECTION_STORES, storeSchema)

export default Store
