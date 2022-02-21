import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ResourceService } from 'libs/services/resource.service';
import { Model } from 'mongoose';
import { OrderDto } from 'tools/dtos/order.dto';
import { OrderModel } from 'tools/models/order.model';

@Injectable()
export class OrdersService extends ResourceService<
OrderModel,
OrderDto,
OrderDto
> {
    /**
     *
     */
    constructor(@InjectModel('Order') orderMongo: Model<OrderModel>) {
        super(orderMongo);
        
    }
}
