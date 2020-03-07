import { RegisteredUser } from '../User/RegisteredUser';
import { Conversation } from './Conversation';

export class MessageBox{
    _id: String;
    conversations: Conversation[];
    owner: RegisteredUser;
}