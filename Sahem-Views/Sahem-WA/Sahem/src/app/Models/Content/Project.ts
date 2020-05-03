import { Article } from './Article';
import { Creator } from '../User/Creator';
import { Rewards } from './Rewards';
import { Image } from '../Common/Image';
import { Fund } from './Fund';

export class Project extends Article {

    description: String;
    category: String;
    fundGoal: Number;
    raisedFunds: Number;
    funds: Fund[];
    endDate: Date;
    funders: Creator[];
    rewards: Rewards[];
    header_image: Image;
    thumbnail: Image;

}