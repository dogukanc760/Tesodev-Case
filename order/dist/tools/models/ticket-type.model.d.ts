import { AuditModel } from './audit.model';
import { Document } from 'mongoose';
export interface TicketTypeModel extends Document {
    id: string;
    name: string;
    audit: AuditModel;
}
export declare const TicketTypeSchema: any;
