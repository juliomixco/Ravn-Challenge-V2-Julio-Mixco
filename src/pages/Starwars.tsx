import React from 'react';
import { Layout } from '../components/Layout';
import { Personlist } from '../components/personList/PersonList';
import { Person } from '../interfaces/person.interface';

const person: Person = {
  name: 'test person',
  homeworld: { name: 'tatooine' },
  species: [{ name: 'doggo' }, { name: 'java' }],
} as Person;

export const StarWars: React.SFC<{}> = () => (
  <Layout>
    <Personlist people={[person, person, person]}></Personlist>
  </Layout>
);
