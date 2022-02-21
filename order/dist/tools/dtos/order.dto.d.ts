import { ProductModel } from 'tools/models/product.model';
export declare class OrderDto {
    name: string;
    img: string;
    customerId: string;
    product: ProductModel[];
    quantity: number;
    price: number;
    status: string;
    address: string;
}
