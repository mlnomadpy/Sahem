import { RegisteredUser } from '../User/RegisteredUser';
import { Message } from './Message';

export class Conversation{
    _id: String;
    messages: Message[];
    participants: RegisteredUser[];
}