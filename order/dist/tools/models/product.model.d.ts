import { Document } from 'mongoose';
export interface ProductModel extends Document {
    id: string;
    name: string;
    img: string;
}
export declare const ProductSchema: any;
