import { RoleModel } from './role.model';
import { Document } from 'mongoose';
export interface GroupModel extends Document {
    _id: string;
    name: string;
    description: string;
    roles: RoleModel[];
}
export declare const GroupSchema: any;
