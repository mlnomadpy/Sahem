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
    progress: number;
    
    getThumbLink() {
        // TODO
    }
    getHeaderLink() {
        // TODO
    }
    calculateTimeLeft() {
        // TODO
    }
    public calculateProjectProgress() {
        return this.calculateFunds() * 100 / this.fundGoal;
    }
    public calculateFunds() {
        var reached = 0;
        this.funds.forEach(fund => {
            reached += fund.amount;
        });
        return reached;
    }
    public getTimeRemaining(date) {
        var t = Date.parse(date) - Date.now();
        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
}