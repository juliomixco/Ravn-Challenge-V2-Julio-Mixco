import { useQuery, useApolloClient } from '@apollo/client';
import React, { useEffect, useState, useRef } from 'react';
import { Layout } from '../components/layout/Layout';
import { PersonList } from '../components/personList/PersonList';
import {
  FetchPeoplePageData,
  FETCH_PEOPLE_PAGE,
  PageVariables,
} from '../graphql/queries';
import { Person } from '../interfaces/person.interface';
const itemsPerPage = 5;
const delayQuery = 500;

const usePeopleQuery = () => {
  // Grab the Apollo client
  const client = useApolloClient();
  const [data, setData] = useState<Person[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState<boolean>(false);

  // You can either start the query when this gets mounted or manually run it.
  useEffect(() => {
    async function runQuery(limit: number, offset: number) {
      setLoading(true);
      setHasError(false);

      // Manually query your queries.
      const queryResult = await client.query<
        FetchPeoplePageData,
        PageVariables
      >({
        query: FETCH_PEOPLE_PAGE,
        variables: {
          limit: limit,
          offset: offset,
        },
      });

      const hadError = !!queryResult.error;
      // Reset the loading state.
      setLoading(false);
      setHasError(hadError);
      const dataLength = queryResult.data?.allPeople?.length || 0;
      if (!hadError && dataLength > 0) {
        setData([...data, ...queryResult.data!.allPeople]);
        const itemCount = queryResult.data!.paginationInfo.count;
        const newLimit = itemsPerPage;
        const newOffset = offset + itemsPerPage;

        if (newOffset - newLimit >= itemCount) return;

        console.log('setquery');
        setTimeout(() => {
          console.log('run query');
          runQuery(newLimit, newOffset);
        }, delayQuery);
      }
    }
    runQuery(itemsPerPage, 0);
  }, []);

  return {
    loading,
    data,
    hasError,
  };
};

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
