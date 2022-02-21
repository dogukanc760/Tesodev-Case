import { RoleModel } from 'tools/models/role.model';
import { GroupModel } from 'tools/models/group.model';
export declare class UserCreateDto {
    name: string;
    surname: string;
    image: string;
    password: string;
    email: string;
    birthDay: Date;
}
export declare class UserUpdateDto {
    name: string;
    surname: string;
    image: string;
    password: string;
    email: string;
    birthDay: Date;
    roles: RoleModel[];
    groups: GroupModel[];
}
export declare class UserLoginDto {
    email: string;
    password: string;
}
