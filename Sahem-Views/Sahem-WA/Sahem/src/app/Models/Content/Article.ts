import { RegisteredUser } from '../User/RegisteredUser';
import { Vote } from '../Common/Vote';
import { Media } from '../Common/Media';

export class Article{
    _id: String;
    owner: RegisteredUser;
    type: String;
    votes: Vote[];
    comments: Comment[];
    media: Media[];
    content: String;

}