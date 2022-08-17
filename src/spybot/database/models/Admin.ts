import mongoose, { Schema } from 'mongoose'
import { DATABASE_COLLECTION_ADMIN } from '../../../../configs/configs'

const adminSchema = new Schema({}, { strict: false, collection: DATABASE_COLLECTION_ADMIN })
const Admin = mongoose.model(DATABASE_COLLECTION_ADMIN, adminSchema)

export { Admin }
