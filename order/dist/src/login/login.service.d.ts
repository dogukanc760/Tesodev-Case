import { Model } from 'mongoose';
import { UserService } from 'src/user/user.service';
import { UserLoginDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';
export declare class LoginService {
    private readonly useRMongo;
    private userService;
    constructor(useRMongo: Model<UserModel>, userService: UserService);
    loginUser(user: UserLoginDto): Promise<any>;
}
