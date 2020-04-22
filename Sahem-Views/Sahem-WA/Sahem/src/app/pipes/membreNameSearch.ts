import { PipeTransform, Pipe } from '@angular/core';
import { Membre } from '../models/University/Labos/Membre';

@Pipe({
    name: 'membreNamefilter'
})

export class MembreNameSearch implements PipeTransform{
    transform(membres: Membre[], name: string): Membre[]{
        if(!membres || !name){
            return membres;
        }
        return membres.filter(membre =>
            (membre.nom.toLowerCase()+membre.prenom.toLowerCase()).indexOf(name.toLowerCase()) !== -1);
    }
}