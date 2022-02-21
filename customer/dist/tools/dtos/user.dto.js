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
exports.UserLoginDto = exports.UserUpdateDto = exports.UserCreateDto = void 0;
const role_model_1 = require("../models/role.model");
const group_model_1 = require("../models/group.model");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class UserCreateDto {
}
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.Length(2, 20),
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UserCreateDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UserCreateDto.prototype, "surname", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UserCreateDto.prototype, "image", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UserCreateDto.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], UserCreateDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty(),
    class_validator_1.IsDateString(),
    __metadata("design:type", Date)
], UserCreateDto.prototype, "birthDay", void 0);
exports.UserCreateDto = UserCreateDto;
class UserUpdateDto {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UserUpdateDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UserUpdateDto.prototype, "surname", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UserUpdateDto.prototype, "image", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UserUpdateDto.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UserUpdateDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", Date)
], UserUpdateDto.prototype, "birthDay", void 0);
exports.UserUpdateDto = UserUpdateDto;
class UserLoginDto {
}
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UserLoginDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty(),
    __metadata("design:type", String)
], UserLoginDto.prototype, "password", void 0);
exports.UserLoginDto = UserLoginDto;
//# sourceMappingURL=user.dto.js.map