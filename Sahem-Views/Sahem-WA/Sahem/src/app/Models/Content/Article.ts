import { Creator } from '../User/Creator';
import { Vote } from '../Common/Vote';
import { Media } from '../Common/Media';

export class Article {
    _id: String;
    owner: Creator;
    type: string;
    title: string;
    votes: Vote[];
    comments: Comment[];
    media: Media[];
    content: string;
    createdAt: Date;

}