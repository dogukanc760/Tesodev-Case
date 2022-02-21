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

import { OrderDto } from 'tools/dtos/order.dto';
import { OrderModel } from 'tools/models/order.model';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private orderService: OrdersService) {}

  @Post()
  async createOrder(@Body() body: OrderDto): Promise<OrderModel> {
    return await this.orderService.create(body);
  }

  @Get()
  async getAllOrders(@Query() query: FilterModel): Promise<OrderModel[]> {
    return await this.orderService.findAll(query);
  }

  @Get(':id')
  async getOrder(@Param() params): Promise<OrderModel[]> {
    return await this.orderService.findOne(params.id);
  }

  @Get('/by-id/:id')
  async getOrders(@Param() params): Promise<OrderModel[]> {
    return await this.orderService.findAll(params.id);
  }

  @Put(':id')
  async updateOrder(
    @Param('id') id: string,
    @Body() OrderDto: OrderDto,
  ): Promise<OrderModel> {
    return await this.orderService.update(id, OrderDto);
  }

  @Put('/changeStatus/:id')
  async changeStatus(
    @Param('id') id: string,
    @Body() OrderDto: OrderDto,
  ): Promise<OrderModel> {
    return await this.orderService.update(id, OrderDto);
  }

  @Delete(':id')
  async removeOrder(@Param('id') id: string): Promise<OrderModel> {
    return await this.orderService.delete(id);
  }
}
