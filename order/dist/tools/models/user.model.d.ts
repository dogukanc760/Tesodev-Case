import { AuditModel } from './audit.model';
import { RoleModel } from './role.model';
import { GroupModel } from './group.model';
import { Document } from 'mongoose';
export interface UserModel extends Document {
    id: string;
    name: string;
    surname: string;
    image: string;
    email: string;
    password: string;
    birthDay: Date;
    audit: AuditModel;
    roles: RoleModel[];
    groups: GroupModel[];
}
export declare const UserSchema: any;
