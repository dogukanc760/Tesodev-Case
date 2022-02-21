import {
  Body,
  Controller,
  Delete,
  Get,
  Injectable,
  Param,
  Post,
  Put,
  Query,
  UseFilters,
  HttpService,
  Req,
  Res,
} from '@nestjs/common';
import environment from 'tools/environment/environment';

@Injectable()
export class OrderService {
  /**
   *
   */
  constructor(private httpService: HttpService) {}
  createOrder(@Req() req, @Res() res): Observable<any> {
    return this.httpService
      .post(environment.orderApi, req.body, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        return res.json();
      })
      .catch(err => {
        err.json();
      });
  }

  getAllOrders(@Query() query: any, @Req() req, @Res() res): Observable<any[]> {
    return this.httpService
      .get(environment.orderApi + 'getAllOrders', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        return res.json();
      })
      .catch(err => {
        err.json();
      });
  }

  getOrder(@Param() params, @Req() req, @Res() res): Observable<any[]> {
    return this.httpService
      .get(environment.orderApi + params.id, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        return res.json();
      })
      .catch(err => {
        err.json();
      });
  }

  getOrders(@Param() params): Observable<any[]> {
    return this.httpService
      .get(environment.orderApi + '/' + params.id, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        return res.json();
      })
      .catch(err => {
        err.json();
      });
  }

  updateOrder(@Param('id') id: string, @Body() OrderDto: any): Promise<any> {
    return this.httpService
      .put(environment.orderApi + '/' + id, OrderDto, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        return res.json();
      })
      .catch(err => {
        err.json();
      });
  }

  changeStatus(@Param('id') id: string, @Body() OrderDto: any): Promise<any> {
    return this.httpService
      .put(environment.orderApi + '/' + id, OrderDto, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        return res.json();
      })
      .catch(err => {
        err.json();
      });
  }

  removeOrder(@Param('id') id: string): Promise<any> {
    return this.httpService
      .delete(environment.orderApi + id, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        return res.json();
      })
      .catch(err => {
        err.json();
      });
  }
}
