import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, Res } from '@nestjs/common';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  /**
   *
   */
  constructor(private customerService: CustomerService) {}

  @Post()
  async createUser(@Body() body: any, @Req() req, @Res() res): Promise<any> {
    
    return await this.customerService.createUser(req.body, res);
  }

  @Get()
  async getAllUsers(@Query() query: any, @Req() req, @Res() res): Promise<any[]> {
    return await this.customerService.getAllUsers(req.body, res);
  }

  @Get(':id')
  async getUser(@Param() params,@Req() req, @Res() res): Promise<any[]> {
    return await this.customerService.getUser(req, res);
  }

  @Get('/by-id/:id')
  async getUsers(@Param() params, @Req() req, @Res() res): Promise<any[]> {
    return await this.customerService.getAllUsers(req.params, res);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() userUpdateDto: any,@Req() req, @Res() res
  ): Promise<any> {
    return await this.customerService.updateUser(req.params, req.body, res);
  }

  @Delete(':id')
  async removeUser(@Param('id') id: string, @Req() req, @Res() res): Promise<any> {
    return await this.customerService.delete(req.params,res);
  }


}
