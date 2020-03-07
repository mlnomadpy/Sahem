import { Country } from './Country';
import { City } from './City';
import { State } from './State';

export class Location{
    _id: String;
    country: Country;
    state: State;
    city: City;
    line1: String;
    line2: String;
    zipCode: String;
    position: Position;
}