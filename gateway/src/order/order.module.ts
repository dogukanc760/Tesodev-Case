import { Module, HttpModule } from '@nestjs/common';
import { OrderService } from './order.service';

@Module({
  imports:[HttpModule],
  providers: [OrderService]
})
export class OrderModule {}
