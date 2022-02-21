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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const group_model_1 = require("../../tools/models/group.model");
const role_model_1 = require("../../tools/models/role.model");
let AuthGuard = class AuthGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const allowedRoles = this.reflector.get('roles', context.getHandler());
        if (!allowedRoles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user.user;
        const allowed = this.isAllowed(allowedRoles, user.role, user.groups);
        if (!allowed) {
            throw new common_1.HttpException('Forbidden', common_1.HttpStatus.FORBIDDEN);
        }
        return true;
    }
    isAllowed(allowedRoles, userRoles, userGroups) {
        const allUsersRoles = [];
        userRoles.map(data => {
            allUsersRoles.push(data.name);
        });
        userGroups.map(data => {
            allUsersRoles.push(data.roles["name"]);
        });
        const hasRole = allUsersRoles.some(role => allowedRoles.includes(role));
        return hasRole;
    }
};
AuthGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [core_1.Reflector])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map