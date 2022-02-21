import { Length, IsNotEmpty, IsNumberString, IsString } from 'class-validator';
import { ProductModel } from 'tools/models/product.model';

export class OrderDto {
  @IsNotEmpty()
  @Length(2, 40)
  name: string;
  @IsNotEmpty()
  @Length(2, 80)
  img: string;
  @IsNotEmpty()
  customerId: string;
  @IsNotEmpty()
  product:ProductModel[];
  @IsNotEmpty()
  @IsNumberString()
  quantity: number;
  @IsNotEmpty()
  @IsNumberString()
  price: number;
  @IsNotEmpty()
  @IsString()
  status: string;
  @IsNotEmpty()
  @IsString()
  @Length(2, 140)
  address: string;
}