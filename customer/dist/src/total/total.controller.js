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
exports.TotalController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const all_exception_filters_1 = require("../../libs/filters/all-exception.filters");
const user_dto_1 = require("../../tools/dtos/user.dto");
const filter_model_1 = require("../../tools/models/filter.model");
const total_service_1 = require("./total.service");
let TotalController = class TotalController {
    constructor(totalService) {
        this.totalService = totalService;
    }
    async getAllTotal() {
        return await this.totalService.findAll();
    }
};
__decorate([
    common_2.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TotalController.prototype, "getAllTotal", null);
TotalController = __decorate([
    common_1.Controller('total'),
    __metadata("design:paramtypes", [total_service_1.TotalService])
], TotalController);
exports.TotalController = TotalController;
//# sourceMappingURL=total.controller.js.map