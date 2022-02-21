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
const activity_type_model_1 = require("tools/models/activity-type.model");
const activity_model_1 = require("tools/models/activity.model");
const group_model_1 = require("tools/models/group.model");
const inventory_type_model_1 = require("tools/models/inventory-type.model");
const inventory_model_1 = require("tools/models/inventory.model");
const product_type_model_1 = require("tools/models/product-type.model");
const product_model_1 = require("../../tools/models/product.model");
const role_model_1 = require("tools/models/role.model");
const ticket_type_model_1 = require("tools/models/ticket-type.model");
const ticket_model_1 = require("tools/models/ticket.model");
const user_model_1 = require("tools/models/user.model");
const total_controller_1 = require("./total.controller");
const total_service_1 = require("./total.service");
let TotalModule = class TotalModule {
};
TotalModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([
                { name: 'User', schema: user_model_1.UserSchema },
                { name: 'Role', schema: role_model_1.RoleSchema },
                { name: 'Ticket', schema: ticket_model_1.TicketSchema },
                { name: 'TicketType', schema: ticket_type_model_1.TicketTypeSchema },
                { name: 'Product', schema: product_model_1.ProductSchema },
                { name: 'ProductType', schema: product_type_model_1.ProductTypeSchema },
                { name: 'Inventory', schema: inventory_model_1.InventorySchema },
                { name: 'InventoryType', schema: inventory_type_model_1.InventoryTypeSchema },
                { name: 'Group', schema: group_model_1.GroupSchema },
                { name: 'Activity', schema: activity_model_1.ActivitySchema },
                { name: 'ActivityType', schema: activity_type_model_1.ActivityTypeSchema },
            ])],
        controllers: [total_controller_1.TotalController],
        providers: [total_service_1.TotalService]
    })
], TotalModule);
exports.TotalModule = TotalModule;
//# sourceMappingURL=total.module.js.map