import { Article } from './Article';
import { RegisteredUser } from '../User/RegisteredUser';

export class Project extends Article{
    description: String;
    fundGoal: Number;
    raisedFunding: Number;
    createdDate: Date;
    endDate: Date;
    fundRaisers: RegisteredUser[];
}