import { AuditModel } from './audit.model';
import { InventoryTypeModel } from './inventory-type.model';
import { ProductModel } from './product.model';
import { Document } from 'mongoose';
export interface InventoryModel extends Document {
    id: string;
    barcode: number;
    description: string;
    audit: AuditModel;
    type: InventoryTypeModel;
    product: ProductModel;
}
export declare const InventorySchema: any;
