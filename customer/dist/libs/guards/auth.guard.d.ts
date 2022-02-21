import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GroupModel } from 'tools/models/group.model';
import { RoleModel } from 'tools/models/role.model';
export declare class AuthGuard implements CanActivate {
    private reflector;
    constructor(reflector: Reflector);
    canActivate(context: ExecutionContext): boolean;
    isAllowed(allowedRoles: any, userRoles: RoleModel[], userGroups: GroupModel[]): boolean;
}
