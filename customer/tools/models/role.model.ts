import * as mongoose from 'mongoose';

import {Document} from 'mongoose';

export interface RoleModel extends Document {
  id: string;
  name: string;
 
}

export const RoleSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: [true, 'Role Name must be unique'],
    required: [true, 'Role Name is required'],
  },
  audit: { type: Object },
});
