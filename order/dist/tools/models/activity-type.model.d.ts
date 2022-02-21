import { AuditModel } from './audit.model';
import { Document } from 'mongoose';
export interface ActivityTypeModel extends Document {
    id: string;
    name: string;
    audit: AuditModel;
}
export declare const ActivityTypeSchema: any;
