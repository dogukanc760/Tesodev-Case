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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const resource_service_1 = require("../../libs/services/resource.service");
const mongoose_2 = require("mongoose");
const user_dto_1 = require("../../tools/dtos/user.dto");
const user_model_1 = require("../../tools/models/user.model");
const environment_1 = require("../../tools/environment/environment");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const hashText = environment_1.default.hashText;
let UserService = class UserService extends resource_service_1.ResourceService {
    constructor(useRMongo) {
        super(useRMongo);
    }
    async convertToHash(value) {
        let hashPwd;
        await bcrypt.hash(`${hashText}${value}`, saltRounds).then(hash => {
            hashPwd = hash;
        });
        return await hashPwd;
    }
    async compareHashes(password, hashed) {
        const match = await bcrypt.compareSync(`${hashText}${password}`, hashed);
        return await match;
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('User')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map