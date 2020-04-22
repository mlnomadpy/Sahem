import { PipeTransform, Pipe } from '@angular/core';
import { Commission } from '../models/University/commissions/Commission';

@Pipe({
    name: 'commissionNamefilter'
})

export class CommissionNameSearch implements PipeTransform{
    transform(commission: Commission[], name: string): Commission[]{
        if(!commission || !name){
            return commission;
        }
        return commission.filter(commission =>
            (commission.nom.toLowerCase()).indexOf(name.toLowerCase()) !== -1);
    }
}