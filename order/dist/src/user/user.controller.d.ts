import { UserCreateDto, UserUpdateDto } from 'tools/dtos/user.dto';
import { FilterModel } from 'tools/models/filter.model';
import { UserModel } from 'tools/models/user.model';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    createUser(body: UserCreateDto): Promise<UserModel>;
    getAllUsers(query: FilterModel): Promise<UserModel[]>;
    getUser(params: any): Promise<UserModel[]>;
    updateUser(id: string, userUpdateDto: UserUpdateDto): Promise<UserModel>;
    removeUser(id: string): Promise<UserModel>;
}
