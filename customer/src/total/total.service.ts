import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ResourceService } from 'libs/services/resource.service';
import { Model } from 'mongoose';
import { UserCreateDto, UserUpdateDto } from 'tools/dtos/user.dto';

import { GroupModel } from 'tools/models/group.model';

import { RoleModel } from 'tools/models/role.model';

import { UserModel } from 'tools/models/user.model';

@Injectable()
export class TotalService {
  constructor(
    @InjectModel('User') private readonly userMongo: Model<UserModel>,
    @InjectModel('Role') private readonly roleMongo: Model<RoleModel>,
   
 
    @InjectModel('Group') private readonly groupMongo: Model<GroupModel>,

  ) {}

  async findAll(): Promise<any> {
    const userCount = await this.userMongo.countDocuments({}).exec();
    const roleCount = await this.roleMongo.countDocuments({}).exec();
 
    
    const groupCount = await this.groupMongo.countDocuments({}).exec();
 

    return await {
      user: userCount,
      role: roleCount,
   
      group: groupCount,
   
    };
  }
}
