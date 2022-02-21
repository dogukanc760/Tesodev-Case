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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TotalService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const resource_service_1 = require("../../libs/services/resource.service");
const mongoose_2 = require("mongoose");
const user_dto_1 = require("../../tools/dtos/user.dto");
const group_model_1 = require("../../tools/models/group.model");
const role_model_1 = require("../../tools/models/role.model");
const user_model_1 = require("../../tools/models/user.model");
let TotalService = class TotalService {
    constructor(userMongo, roleMongo, groupMongo) {
        this.userMongo = userMongo;
        this.roleMongo = roleMongo;
        this.groupMongo = groupMongo;
    }
    async findAll() {
        const userCount = await this.userMongo.countDocuments({}).exec();
        const roleCount = await this.roleMongo.countDocuments({}).exec();
        const groupCount = await this.groupMongo.countDocuments({}).exec();
        return await {
            user: userCount,
            role: roleCount,
            group: groupCount,
        };
    }
};
TotalService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('User')),
    __param(1, mongoose_1.InjectModel('Role')),
    __param(2, mongoose_1.InjectModel('Group')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object])
], TotalService);
exports.TotalService = TotalService;
//# sourceMappingURL=total.service.js.map