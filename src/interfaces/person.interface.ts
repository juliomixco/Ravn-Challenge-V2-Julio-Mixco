import { Planet } from './planet.interface';
import { Species } from './species.interface';
import { Vehicle } from './vehicle.interface';

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
  films: string[];
  starships: string[];
  homeworld: Planet;
  species: Species[];
  vehicles: Vehicle[];
}
