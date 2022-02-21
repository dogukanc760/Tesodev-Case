import { AuditModel } from './audit.model';
import { Document } from 'mongoose';
export interface RoleModel extends Document {
    id: string;
    name: string;
    audit: AuditModel;
}
export declare const RoleSchema: any;
