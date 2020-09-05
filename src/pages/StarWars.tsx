import { useQuery } from '@apollo/client';
import React from 'react';
import { Layout } from '../components/layout/Layout';
import { PersonList } from '../components/personList/PersonList';
import { FETCH_PEOPLE_PAGE } from '../graphql/queries';
import { Person, PeopleData } from '../interfaces/person.interface';

const person: Person = {
  name: 'juan',
  species: [{ name: 'grey' }, { name: 'yellow' }],
  homeworld: {
    name: 'mars',
  },
} as Person;

export const StarWars = () => {
  const { loading, error, data } = useQuery<PeopleData, {}>(FETCH_PEOPLE_PAGE);
  return (
    <Layout>
      <PersonList
        people={data?.allPersons || []}
        isLoading={loading}
        hasError={!!error}></PersonList>
    </Layout>
  );
};
