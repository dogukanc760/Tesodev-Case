"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_service_1 = require("../user/user.service");
const jwt = require("jsonwebtoken");
const environment_1 = require("../../tools/environment/environment");
let LoginService = class LoginService {
    constructor(useRMongo, userService) {
        this.useRMongo = useRMongo;
        this.userService = userService;
    }
    async loginUser(user) {
        try {
            const existUser = this.useRMongo.findOne({
                email: user.email
            }).exec();
            if ((await existUser).email) {
                let checkPwd;
                await this.userService.compareHashes(user.password, (await existUser).password).then(resp => {
                    if (resp) {
                        checkPwd = true;
                    }
                    else {
                        checkPwd = false;
                    }
                });
                if (checkPwd) {
                    const authJWT = jwt.sign({ user: existUser }, environment_1.default.jwtText);
                    const data = Object.assign(Object.assign({}, existUser), authJWT);
                    return await { success: true, value: data };
                }
                else {
                    return await { success: false, response: 'wrong pass or username' };
                }
            }
            else {
                return await { success: false, response: 'user does not exist' };
            }
        }
        catch (ex) {
            return await { success: false, response: 'something went wrong' };
        }
    }
};
LoginService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('User')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, user_service_1.UserService])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map