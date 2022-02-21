import * as mongoose from 'mongoose';

import {Document} from 'mongoose';
import { ProductModel } from './product.model';

export interface OrderModel extends Document{
  id: string;
  customerId: string;
  product:ProductModel[];
  quantity: number;
  price: number;
  status: string;
  address: string;


}

export const OrderSchema = new mongoose.Schema({
  customerId: {
    type: String,
    unique: [true, 'Product Name must be unique'],
    required: [true, 'Product Name is required'],
  },
  product:{type:Array},
  quantity: {type:Number, default:1},
  price: {type:Number, default:1},
  status: {type:String, default:'Pending...'},
  address: {type:String,  required: [true, 'Product Name is required'],}
  
}, {timestamps:true});
