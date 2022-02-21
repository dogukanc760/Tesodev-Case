import { AuditModel } from './audit.model';
import { RoleModel } from './role.model';
import { Document } from 'mongoose';
export interface GroupModel extends Document {
    _id: string;
    name: string;
    description: string;
    audit: AuditModel;
    roles: RoleModel[];
}
export declare const GroupSchema: any;
