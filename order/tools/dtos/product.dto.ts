import { Length, IsNotEmpty } from 'class-validator';

export class ProductDto {
  @IsNotEmpty()
  @Length(2, 40)
  name: string;
  @IsNotEmpty()
  @Length(2, 80)
  img: string;
}
