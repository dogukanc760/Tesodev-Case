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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TotalService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const resource_service_1 = require("../../libs/services/resource.service");
const mongoose_2 = require("mongoose");
const product_model_1 = require("../../tools/models/product.model");
let TotalService = class TotalService {
    constructor(userMongo, roleMongo, ticketMongo, ticketTypeMongo, productMongo, productTypeMongo, inventoryMongo, inventoryTypeMongo, groupMongo, activityMongo, activityTypeMongo) {
        this.userMongo = userMongo;
        this.roleMongo = roleMongo;
        this.ticketMongo = ticketMongo;
        this.ticketTypeMongo = ticketTypeMongo;
        this.productMongo = productMongo;
        this.productTypeMongo = productTypeMongo;
        this.inventoryMongo = inventoryMongo;
        this.inventoryTypeMongo = inventoryTypeMongo;
        this.groupMongo = groupMongo;
        this.activityMongo = activityMongo;
        this.activityTypeMongo = activityTypeMongo;
    }
    async findAll() {
        const userCount = await this.userMongo.countDocuments({}).exec();
        const roleCount = await this.roleMongo.countDocuments({}).exec();
        const ticketCount = await this.ticketMongo.countDocuments({}).exec();
        const ticketTypeCount = await this.ticketTypeMongo
            .countDocuments({})
            .exec();
        const productCount = await this.productMongo.countDocuments({}).exec();
        const productTypeCount = await this.productTypeMongo
            .countDocuments({})
            .exec();
        const inventoryCount = await this.inventoryMongo.countDocuments({}).exec();
        const inventoryTypeCount = await this.inventoryTypeMongo
            .countDocuments({})
            .exec();
        const groupCount = await this.groupMongo.countDocuments({}).exec();
        const activityCount = await this.activityMongo.countDocuments({}).exec();
        const activityTypeCount = await this.activityTypeMongo
            .countDocuments({})
            .exec();
        return await {
            user: userCount,
            role: roleCount,
            ticket: ticketCount,
            ticketType: ticketTypeCount,
            product: productCount,
            productType: productTypeCount,
            inventory: inventoryCount,
            inventoryType: inventoryTypeCount,
            group: groupCount,
            activity: activityCount,
            activityType: activityTypeCount,
        };
    }
};
TotalService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('User')),
    __param(1, mongoose_1.InjectModel('Role')),
    __param(2, mongoose_1.InjectModel('Ticket')),
    __param(3, mongoose_1.InjectModel('TicketType')),
    __param(4, mongoose_1.InjectModel('Product')),
    __param(5, mongoose_1.InjectModel('ProductType')),
    __param(6, mongoose_1.InjectModel('Inventory')),
    __param(7, mongoose_1.InjectModel('InventoryType')),
    __param(8, mongoose_1.InjectModel('Group')),
    __param(9, mongoose_1.InjectModel('Activity')),
    __param(10, mongoose_1.InjectModel('ActivityType')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _c : Object, typeof (_d = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _d : Object, typeof (_e = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _e : Object, typeof (_f = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _f : Object, typeof (_g = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _g : Object, typeof (_h = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _h : Object, typeof (_j = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _j : Object, typeof (_k = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _k : Object, typeof (_l = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _l : Object])
], TotalService);
exports.TotalService = TotalService;
//# sourceMappingURL=total.service.js.map