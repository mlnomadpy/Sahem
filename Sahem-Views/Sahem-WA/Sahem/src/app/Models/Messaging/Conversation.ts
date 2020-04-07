import { Creator } from '../User/Creator';
import { Message } from './Message';

export class Conversation{
    _id: String;
    messages: Message[];
    participants: Creator[];
}