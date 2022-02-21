import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
export declare class TokenMiddleware implements NestMiddleware {
    static forRoutes(arg0: {
        path: string;
    }): Function | import('@nestjs/common').Type<any>;
    use(req: Request, res: Response, next: Function): void;
}
