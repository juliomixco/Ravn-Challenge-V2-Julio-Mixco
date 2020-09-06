import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { PersonDetail } from '../components/personDetail/PersonDetail';
import { PersonList } from '../components/personList/PersonList';
import { usePeopleQuery } from '../hooks/usePeopleQuery';
import { Person } from '../interfaces/person.interface';
import { EmptyDetail } from '../components/emptyDetail/EmptyDetail';

export const StarWars = () => {
  const [person, setPerson] = useState<Person | null>(null);
  const { data, loading, hasError } = usePeopleQuery();

  return (
    <Layout>
      <PersonList
        people={data}
        isLoading={loading}
        hasError={hasError}
        onPersonSelected={setPerson}></PersonList>
      {person ? (
        <PersonDetail person={person}></PersonDetail>
      ) : (
        <EmptyDetail></EmptyDetail>
      )}
    </Layout>
  );
};
