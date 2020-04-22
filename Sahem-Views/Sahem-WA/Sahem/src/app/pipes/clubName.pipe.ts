import { PipeTransform, Pipe } from '@angular/core';
import { Club } from '../models/University/Clubs/Club';

@Pipe({
    name: 'clubNamefilter'
})

export class ClubNameSearch implements PipeTransform{
    transform(club: Club[], name: string): Club[]{
        if(!club || !name){
            return club;
        }
        return club.filter(club =>
            (club.nom.toLowerCase()+club.acronyme.toLowerCase()).indexOf(name.toLowerCase()) !== -1);
    }
}