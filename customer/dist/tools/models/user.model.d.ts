import { Document } from 'mongoose';
export interface UserModel extends Document {
    id: string;
    name: string;
    surname: string;
    image: string;
    email: string;
    password: string;
}
export declare const UserSchema: any;
