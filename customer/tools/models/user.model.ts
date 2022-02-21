import { Document } from 'mongoose';

import * as mongoose from 'mongoose';
import { AddressModel } from './address.model';

export interface UserModel extends Document {
  id: string;
  name: string;
  surname: string;
  image: string;
  email: string;
  password: string;
  address:AddressModel[];
}

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'User name is required'] },
  surname: { type: String, required: [true, 'User surname is required'] },
  image: { type: String },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: [true, 'User email must be unique'],
    required: [true, 'User Email address is required'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'is invalid'],
  },
  password: { type: String, required: [true, 'User password is required'] },
  address:{type:Array},
},{timestamps: true});
