import { HttpService, Injectable, Param, Req, Res } from '@nestjs/common';
import { Observable } from 'rxjs';
import environment from 'tools/environment/environment';
import axios from 'axios';

@Injectable()
export class CustomerService {
  /**
   *
   */
  constructor(private httpService: HttpService) {}

  createUser(@Req() req, @Res() res): Observable<any> {
    return this.httpService
      .post(environment.customerApi + 'register', req.body, {
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

  getAllUsers(@Req() req, @Res() res): Observable<any[]> {
    return this.httpService
      .get(environment.customerApi + 'getAllUsers', {
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

  getUser(@Param() params, @Req() req, @Res() res): Promise<any> {
    return this.httpService
      .get(environment.customerApi + 'getUser' + params.id, {
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

  getUsers(@Param() params, @Req() req, @Res() res): Promise<any[]> {
    return this.httpService
      .get(environment.customerApi + '/by-id/' + params.id, {
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

  updateUser(@Param('id') id: string, @Req() req, @Res() res): Promise<any> {
    return this.httpService
      .put(environment.customerApi + '/' + id, req.body, {
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

  removeUser(@Param('id') id: string): Promise<any> {
    return this.httpService
      .delete(environment.customerApi + id, {
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
