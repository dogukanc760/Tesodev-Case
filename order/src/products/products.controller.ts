import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseFilters,
} from '@nestjs/common';
import { FilterModel } from 'tools/models/filter.model';
import { AllExceptionFilter } from 'libs/filters/all-exception.filters';
import { ProductsService } from './products.service';
import { ProductDto } from 'tools/dtos/product.dto';
import { ProductModel } from 'tools/models/product.model';

@Controller('product')
// custom filter exception handler declared here
//@UseFilters(AllExceptionFilter)
export class ProductController {
  constructor(private productService: ProductsService) {}

  @Post()
  async createProduct(@Body() body: ProductDto): Promise<ProductModel> {
    return await this.productService.create(body);
  }

  @Get()
  async getAllProducts(@Query() query: FilterModel): Promise<ProductModel[]> {
    return await this.productService.findAll(query);
  }

  @Get(':id')
  async getProduct(@Param() params): Promise<ProductModel[]> {
    return await this.productService.findOne(params.id);
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() productDto: ProductDto,
  ): Promise<ProductModel> {
    return await this.productService.update(id, productDto);
  }

  @Delete(':id')
  async removeProduct(@Param('id') id: string): Promise<ProductModel> {
    return await this.productService.delete(id);
  }
}
