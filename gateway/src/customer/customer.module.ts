import { HttpModule, Module } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Module({
  imports: [HttpModule],
  providers: [CustomerService],
})
export class CustomerModule {}
