import { RegisteredUser } from '../User/RegisteredUser';

export class Message{
    _id: String;
    sentTime: Date;
    receivedTime: Date;
    owner: RegisteredUser;
}