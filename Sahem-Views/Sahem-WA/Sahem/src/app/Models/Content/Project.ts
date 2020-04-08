import { Article } from './Article';
import { Creator } from '../User/Creator';
import { Rewards } from './Rewards';

export class Project extends Article {
    
    description: String;
    category: String;
    fundGoal: Number;
    raisedFunds: Number;
    endDate: Date;
    funders: Creator[];
    rewards: Rewards[];

}