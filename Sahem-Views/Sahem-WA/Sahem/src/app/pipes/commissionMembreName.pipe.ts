import { PipeTransform, Pipe } from '@angular/core';
import { CommissionMembre } from '../models/University/commissions/CommissionMembre';

@Pipe({
    name: 'commissionMembreNamefilter'
})

export class CommissionMembreNameSearch implements PipeTransform{
    transform(commissionMembre: CommissionMembre[], name: string): CommissionMembre[]{
        if(!commissionMembre || !name){
            return commissionMembre;
        }
        return commissionMembre.filter(commissionMembre =>
            (commissionMembre.prenom.toLowerCase()+commissionMembre.nom.toLowerCase()).indexOf(name.toLowerCase()) !== -1);
    }
}