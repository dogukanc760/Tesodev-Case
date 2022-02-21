import { AuditModel } from './audit.model';
import { Document } from 'mongoose';
export interface ProductTypeModel extends Document {
    id: string;
    name: string;
    audit: AuditModel;
}
export declare const ProductTypeSchema: any;
