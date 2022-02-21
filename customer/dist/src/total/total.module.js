"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TotalModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const group_model_1 = require("../../tools/models/group.model");
const role_model_1 = require("../../tools/models/role.model");
const user_model_1 = require("../../tools/models/user.model");
const total_controller_1 = require("./total.controller");
const total_service_1 = require("./total.service");
let TotalModule = class TotalModule {
};
TotalModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([
                { name: 'User', schema: user_model_1.UserSchema },
                { name: 'Role', schema: role_model_1.RoleSchema },
                { name: 'Group', schema: group_model_1.GroupSchema },
            ])],
        controllers: [total_controller_1.TotalController],
        providers: [total_service_1.TotalService]
    })
], TotalModule);
exports.TotalModule = TotalModule;
//# sourceMappingURL=total.module.js.map