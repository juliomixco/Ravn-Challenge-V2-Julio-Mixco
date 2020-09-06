import React from 'react';
import { Layout } from '../components/layout/Layout';
import { PersonList } from '../components/personList/PersonList';
import { usePeopleQuery } from '../hooks/usePeopleQuery';

export const StarWars = () => {
  const { data, loading, hasError } = usePeopleQuery();

  return (
    <Layout>
      <PersonList
        people={data}
        isLoading={loading}
        hasError={hasError}></PersonList>
    </Layout>
  );
};
