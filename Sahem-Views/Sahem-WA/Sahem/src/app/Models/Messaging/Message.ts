import { Creator } from '../User/Creator';

export class Message{
    _id: String;
    sentTime: Date;
    receivedTime: Date;
    owner: Creator;
}