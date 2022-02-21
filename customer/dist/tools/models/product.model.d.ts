import { AuditModel } from './audit.model';
import { ProductTypeModel } from './product-type.model';
import { Document } from 'mongoose';
export interface ProductModel extends Document {
    id: string;
    name: string;
    audit: AuditModel;
    type: ProductTypeModel;
}
export declare const ProductSchema: any;
