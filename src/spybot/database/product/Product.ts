import mongoose from 'mongoose'
import { DATABASE_COLLECTION_PRODUCTS } from '../../../../configs/configs'
import {productSchema, IProduct} from './IProduct'

const Product = mongoose.model<IProduct>(DATABASE_COLLECTION_PRODUCTS, productSchema)

export default Product
