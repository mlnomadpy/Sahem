import { Creator } from '../User/Creator';
import { Conversation } from './Conversation';

export class MessageBox{
    _id: String;
    conversations: Conversation[];
    owner: Creator;
}