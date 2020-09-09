import { Planet } from '../../interfaces/planet.interface';
import { Species } from '../../interfaces/species.interface';
import { Vehicle } from '../../interfaces/vehicle.interface';

export interface PersonResponse {
  id: string;
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
  species: Species;
  starships: string[];
  vehicleConnection: { vehicles: Vehicle[] };
}
