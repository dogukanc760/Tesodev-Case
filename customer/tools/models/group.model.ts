import * as mongoose from 'mongoose';

import { RoleModel } from './role.model';
import {Document} from 'mongoose';

export interface GroupModel extends Document{
  _id: string;
  name: string;
  description: string;
 
  roles: RoleModel[];
}

export const GroupSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: [true, 'Group Name must be unique'],
    required: [true, 'Group Name is required'],
  },
  description: {
    type: String,
    required: [true, 'Group description is required'],
  },
  audit: { type: Object },
  roles: { type: Array },
});
