import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  /**
   *
   */
  constructor(private productService: ProductService) {}
  @Post()
  async createProduct(@Body() body: any): Promise<any> {
    return await this.productService.createProduct(body);
  }

  @Get()
  async getAllProducts(@Query() query: any): Promise<any[]> {
    return await this.productService.getAllProducts(query);
  }

  @Get(':id')
  async getProduct(@Param() params): Promise<any[]> {
    return await this.productService.getProduct(params.id);
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() productDto: any,
  ): Promise<any> {
    return await this.productService.updateProduct(id, productDto);
  }

  @Delete(':id')
  async removeProduct(@Param('id') id: string): Promise<any> {
    return await this.productService.removeProduct(id);
  }
}
