import { PipeTransform, Pipe } from '@angular/core';
import { Laboratoire } from '../models/University/Labos/laboratoire';

@Pipe({
    name: 'laboratoireNamefilter'
})

export class LaboratoireNameSearch implements PipeTransform{
    transform(laboratoires: Laboratoire[], name: string): Laboratoire[]{
        if(!laboratoires || !name){
            return laboratoires;
        }
        return laboratoires.filter(laboratoire =>
            (laboratoire.acronyme.toLowerCase()+laboratoire.nom.toLowerCase()).indexOf(name.toLowerCase()) !== -1);
    }
}