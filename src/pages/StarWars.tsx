import React from 'react';
import { Layout } from '../components/layout/Layout';
import { PersonList } from '../components/personList/PersonList';
import { Person } from '../interfaces/person.interface';
const person: Person = {
  name: 'juan',
  species: [{ name: 'grey' }, { name: 'yellow' }],
  homeworld: {
    name: 'mars',
  },
} as Person;
export const StarWars = () => (
  <Layout>
    <PersonList people={[person, person]}></PersonList>
  </Layout>
);
