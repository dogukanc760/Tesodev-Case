import { Document } from 'mongoose';

import * as mongoose from 'mongoose';

export interface AddressModel extends Document {
  id: string;
  addressLine: string;
  city: string;
  country: string;
  cityCode: string;
}

export const AddressSchema = new mongoose.Schema({
    addressLine: { type: String, required: [true, 'Address is required'] },
    city: { type: String, required: [true, 'City is required'] },
    country: { type: String , required: [true, 'Country is required']},
    cityCode: { type: String , required: [true, 'City Code is required']},
},{timestamps: true});
