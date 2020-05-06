import { Article } from './Article';
import { Creator } from '../User/Creator';
import { Rewards } from './Rewards';
import { Image } from '../Common/Image';
import { Fund } from './Fund';

export class Project extends Article {
    _id: string;
    title: string;
    description: string;
    category: string;
    fundGoal: number;
    raisedFunds: number;
    funds: Fund[];
    endDate: Date;
    funders: Creator[];
    rewards: Rewards[];
    header_image: Image;
    thumbnail: Image;
    createdAt: Date;

    getThumbLink() {
        // TODO
    }
    getHeaderLink() {
        // TODO
    }
    calculateTimeLeft() {
        // TODO
    }
    calculateProjectProgress() {
        return this.calculateFunds() * 100 / this.fundGoal;
    }
    calculateFunds() {
        var reached = 0;
        this.funds.forEach(fund => {
            reached += fund.amount;
        });
        return reached;
    }
}