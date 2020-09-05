import React from 'react';

import { Layout } from '../components/Layout';
import { PersonCell } from '../components/personCell/PersonCell';
import { Person } from '../interfaces/person.interface';

const person: Partial<Person> = {
  name: 'test person',
  homeworld: { name: 'tatooine' },
  species: [{ name: 'doggo' }, { name: 'java' }],
};

export const StarWars: React.SFC<{}> = () => (
  <Layout>
    <PersonCell person={person as Person}></PersonCell>
    <PersonCell person={person as Person}></PersonCell>
    <PersonCell person={person as Person}></PersonCell>
    <PersonCell person={person as Person}></PersonCell>
  </Layout>
);
