import { AuditModel } from './audit.model';
import { ActivityTypeModel } from './activity-type.model';
import { Document } from 'mongoose';
export interface ActivityModel extends Document {
    id: string;
    name: string;
    audit: AuditModel;
    type: ActivityTypeModel;
}
export declare const ActivitySchema: any;
