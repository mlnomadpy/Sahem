import { Article } from './Article';
import { Creator } from '../User/Creator';

export class Project extends Article{
    description: String;
    fundGoal: Number;
    raisedFunding: Number;
    createdDate: Date;
    endDate: Date;
    fundRaisers: Creator[];
}