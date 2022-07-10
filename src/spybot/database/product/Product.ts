import mongoose from 'mongoose'
import { DATABASE_COLLECTION_PRODUCTS } from '../../../../configs/configs'
import {productSchema, IProductMongo} from './IProduct'

const Product = mongoose.model<IProductMongo>(DATABASE_COLLECTION_PRODUCTS, productSchema)

export default Product
