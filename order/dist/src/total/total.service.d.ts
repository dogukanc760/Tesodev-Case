import { Model } from 'mongoose';
import { ActivityTypeModel } from 'tools/models/activity-type.model';
import { ActivityModel } from 'tools/models/activity.model';
import { GroupModel } from 'tools/models/group.model';
import { InventoryTypeModel } from 'tools/models/inventory-type.model';
import { InventoryModel } from 'tools/models/inventory.model';
import { ProductTypeModel } from 'tools/models/product-type.model';
import { ProductModel } from 'tools/models/product.model';
import { RoleModel } from 'tools/models/role.model';
import { TicketTypeModel } from 'tools/models/ticket-type.model';
import { TicketModel } from 'tools/models/ticket.model';
import { UserModel } from 'tools/models/user.model';
export declare class TotalService {
    private readonly userMongo;
    private readonly roleMongo;
    private readonly ticketMongo;
    private readonly ticketTypeMongo;
    private readonly productMongo;
    private readonly productTypeMongo;
    private readonly inventoryMongo;
    private readonly inventoryTypeMongo;
    private readonly groupMongo;
    private readonly activityMongo;
    private readonly activityTypeMongo;
    constructor(userMongo: Model<UserModel>, roleMongo: Model<RoleModel>, ticketMongo: Model<TicketModel>, ticketTypeMongo: Model<TicketTypeModel>, productMongo: Model<ProductModel>, productTypeMongo: Model<ProductTypeModel>, inventoryMongo: Model<InventoryModel>, inventoryTypeMongo: Model<InventoryTypeModel>, groupMongo: Model<GroupModel>, activityMongo: Model<ActivityModel>, activityTypeMongo: Model<ActivityTypeModel>);
    findAll(): Promise<any>;
}
