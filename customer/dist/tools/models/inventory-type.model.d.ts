import { AuditModel } from './audit.model';
import { Document } from 'mongoose';
export interface InventoryTypeModel extends Document {
    id: string;
    name: string;
    audit: AuditModel;
}
export declare const InventoryTypeSchema: any;
