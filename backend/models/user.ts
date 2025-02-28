import { Schema, model, Document } from 'mongoose';
import { ILaptop } from './laptobs';

interface TBuyList {
    product: ILaptop[];
}

interface IUser {
    name: string;
    userName: string;
    password: string;
    email: string;
    buyList: TBuyList;
    token: string;
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    userName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    buyList: { type: Object, required: true }, // تغییر از Array به Object
    token: { type: String, required: true }
});

const User = model<IUser>('User', userSchema);

export default User;
