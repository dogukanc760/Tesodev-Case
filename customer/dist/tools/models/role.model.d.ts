import { Document } from 'mongoose';
export interface RoleModel extends Document {
    id: string;
    name: string;
}
export declare const RoleSchema: any;
