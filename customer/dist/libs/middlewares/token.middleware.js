"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const environment_1 = require("../../tools/environment/environment");
let TokenMiddleware = class TokenMiddleware {
    static forRoutes(arg0) {
        throw new Error('Method not implemented.');
    }
    use(req, res, next) {
        const authJWT = req.headers.authorization;
        if (req.baseUrl !== '/api/login') {
            if (!authJWT) {
                next();
                throw new common_1.HttpException('Jwt could not found!', common_1.HttpStatus.FORBIDDEN);
            }
            else {
                try {
                    const user = jwt.verify(authJWT.slice(7, authJWT.length), environment_1.default.jwtText);
                    if (user) {
                        req['user'] = user;
                        next();
                    }
                    else {
                        throw new common_1.HttpException('something went wrong!', common_1.HttpStatus.BAD_REQUEST);
                    }
                }
                catch (error) {
                    throw new common_1.HttpException(error.message, common_1.HttpStatus.BAD_GATEWAY);
                }
            }
        }
        else {
            next();
            return;
        }
    }
};
TokenMiddleware = __decorate([
    common_1.Injectable()
], TokenMiddleware);
exports.TokenMiddleware = TokenMiddleware;
//# sourceMappingURL=token.middleware.js.map