import { Document } from 'mongoose';
import { ProductModel } from './product.model';
export interface OrderModel extends Document {
    id: string;
    customerId: string;
    product: ProductModel[];
    quantity: number;
    price: number;
    status: string;
    address: string;
}
export declare const OrderSchema: any;
