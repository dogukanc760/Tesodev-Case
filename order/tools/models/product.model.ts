import * as mongoose from 'mongoose';

import {Document} from 'mongoose';

export interface ProductModel extends Document{
  id: string;
  name: string;
  img: string;

}

export const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: [true, 'Product Name must be unique'],
    required: [true, 'Product Name is required'],
  },
  img: {type:String, default:''}
}, {timestamps:true});
