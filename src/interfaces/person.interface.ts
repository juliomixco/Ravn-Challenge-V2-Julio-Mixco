import { Vehicle } from './vehicle.interface';
import { Species } from './species.interface';
import { Planet } from './planet.interface';

export interface Person {
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
  url: string;
  created: string;
  edited: string;
  homeworld: Planet;
  films: string[];
  species: Species[];
  vehicles: Vehicle[];
  starships: string[];
}

export interface PeopleData {
  allPersons: Person[];
}
