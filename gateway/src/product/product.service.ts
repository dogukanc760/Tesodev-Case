import {
  Body,
  Controller,
  Delete,
  Get,
  HttpService,
  Injectable,
  Param,
  Post,
  Put,
  Query,
  UseFilters,
} from '@nestjs/common';
import environment from 'tools/environment/environment';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  /**
   *
   */
  constructor(private httpService: HttpService) {}
  
   createProduct(@Body() body: any): Observable<any> {
    return this.httpService
      .post(environment.productApi , body, {
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

  
   getAllProducts(@Query() query: any): Observable<any[]> {
    return this.httpService
    .get(environment.productApi , {
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

  async getProduct(@Param() params): Promise<any[]> {
    return this.httpService
      .get(environment.productApi  + params.id, {
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


  
  async updateProduct(
    @Param('id') id: string,
    @Body() productDto: any,
  ): Promise<any> {
    return this.httpService
    .put(environment.productApi + '/' + id, productDto, {
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

  async removeProduct(@Param('id') id: string): Promise<any> {
    return this.httpService
    .delete(environment.productApi + id, {
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
