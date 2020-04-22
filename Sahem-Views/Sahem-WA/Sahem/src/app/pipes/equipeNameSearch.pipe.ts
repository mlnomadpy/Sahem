import { PipeTransform, Pipe } from '@angular/core';
import { Equipe } from '../models/University/Labos/Equipe';

@Pipe({
    name: 'equipeNamefilter'
})

export class EquipeNameSearch implements PipeTransform{
    transform(equipes: Equipe[], name: string): Equipe[]{
        if(!equipes || !name){
            return equipes;
        }
        return equipes.filter(equipe =>
            (equipe.acronyme.toLowerCase()+equipe.nom.toLowerCase()).indexOf(name.toLowerCase()) !== -1);
    }
}