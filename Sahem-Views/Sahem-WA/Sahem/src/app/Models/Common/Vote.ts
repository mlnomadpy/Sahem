import { RegisteredUser } from '../User/RegisteredUser';
import { Article } from '../Content/Article';

export class Vote{
    _id: String;
    upVote: boolean;
    timeOfVote: Date;
    owner: RegisteredUser;
    originArticle: Article;
}