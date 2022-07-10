import mongoose from 'mongoose'
import { DATABASE_COLLECTION_DATES } from '../../../../configs/configs'
import {dateSchema, IDate} from './IDate'

const Date = mongoose.model<IDate>(DATABASE_COLLECTION_DATES, dateSchema)

export default Date
