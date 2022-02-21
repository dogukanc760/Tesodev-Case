import { OrderService } from './order.service';
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

@Controller('order')
export class OrderController {
  /**
   *
   */
  constructor(private orderService: OrderService) {}

  @Post()
  async createOrder(@Body() body: any): Promise<any> {
    return await this.orderService.createOrder(body);
  }

  @Get()
  async getAllOrders(@Query() query: any): Promise<any[]> {
    return await this.orderService.getAllOrders(query);
  }

  @Get(':id')
  async getOrder(@Param() params): Promise<any[]> {
    return await this.orderService.getOrder(params.id);
  }

  @Get('/by-id/:id')
  async getOrders(@Param() params): Promise<any[]> {
    return await this.orderService.getOrders(params.id);
  }

  @Put(':id')
  async updateOrder(
    @Param('id') id: string,
    @Body() OrderDto: any,
  ): Promise<any> {
    return await this.orderService.updateOrder(id, OrderDto);
  }

  @Put('/changeStatus/:id')
  async changeStatus(
    @Param('id') id: string,
    @Body() OrderDto: any,
  ): Promise<any> {
    return await this.orderService.updateOrder(id, OrderDto);
  }

  @Delete(':id')
  async removeOrder(@Param('id') id: string): Promise<any> {
    return await this.orderService.removeOrder(id);
  }
}
