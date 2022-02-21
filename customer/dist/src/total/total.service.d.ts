import { Model } from 'mongoose';
import { GroupModel } from 'tools/models/group.model';
import { RoleModel } from 'tools/models/role.model';
import { UserModel } from 'tools/models/user.model';
export declare class TotalService {
    private readonly userMongo;
    private readonly roleMongo;
    private readonly groupMongo;
    constructor(userMongo: Model<UserModel>, roleMongo: Model<RoleModel>, groupMongo: Model<GroupModel>);
    findAll(): Promise<any>;
}
