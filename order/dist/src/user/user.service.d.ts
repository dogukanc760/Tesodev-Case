import { ResourceService } from 'libs/services/resource.service';
import { Model } from 'mongoose';
import { UserCreateDto, UserUpdateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';
export declare class UserService extends ResourceService<UserModel, UserCreateDto, UserUpdateDto> {
    constructor(useRMongo: Model<UserModel>);
    convertToHash(value: string): Promise<any>;
    compareHashes(password: any, hashed: any): Promise<any>;
}
