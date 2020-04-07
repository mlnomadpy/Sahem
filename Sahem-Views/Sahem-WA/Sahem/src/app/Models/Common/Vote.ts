import { Creator } from '../User/Creator';
import { Article } from '../Content/Article';

export class Vote{
    _id: String;
    upVote: boolean;
    timeOfVote: Date;
    owner: Creator;
    originArticle: Article;
}