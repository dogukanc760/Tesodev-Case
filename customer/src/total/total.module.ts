import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { GroupSchema } from 'tools/models/group.model';

import { RoleSchema } from 'tools/models/role.model';

import { UserSchema } from 'tools/models/user.model';
import { TotalController } from './total.controller';
import { TotalService } from './total.service';

@Module({
  imports:[MongooseModule.forFeature([
    { name: 'User', schema: UserSchema },
    { name: 'Role', schema: RoleSchema },
 
    { name: 'Group', schema: GroupSchema },
   
  ])],
  controllers:[TotalController],
  providers: [TotalService]
})
export class TotalModule {}
