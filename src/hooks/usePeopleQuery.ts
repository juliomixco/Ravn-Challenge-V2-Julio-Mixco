import { useApolloClient, ApolloQueryResult } from '@apollo/client';
import { useEffect, useState } from 'react';
import {
  FetchPeoplePageData,
  FETCH_PEOPLE_PAGE,
  PageVariables,
} from '../graphql/queries';
import { Person } from '../interfaces/person.interface';
import { useRefState } from './useRefState';
import { APP_CONFIG } from '../config/app.config';

const itemsPerPage = APP_CONFIG.graphql.pageSize;
const delayQuery = APP_CONFIG.graphql.queryDelay;

export const usePeopleQuery = () => {
  const client = useApolloClient();
  const [data, dataRef, setData] = useRefState<Person[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    async function runQuery(limit: number, offset: number) {
      setLoading(true);
      setHasError(false);

      let queryResult: ApolloQueryResult<FetchPeoplePageData> | null = null;
      try {
        queryResult = await client.query<FetchPeoplePageData, PageVariables>({
          query: FETCH_PEOPLE_PAGE,
          variables: {
            limit: limit,
            offset: offset,
          },
        });
      } catch (err) {
        console.error(err);
        setLoading(false);
        setHasError(true);
      }

      if (!queryResult) {
        setLoading(false);
        setHasError(true);
        return;
      }

      const hadError = !!queryResult.error;
      // Reset the loading state.
      setLoading(false);
      setHasError(hadError);
      const dataLength = queryResult.data?.allPeople?.length || 0;
      if (!hadError && dataLength > 0) {
        setData([...dataRef.current, ...queryResult.data!.allPeople]);
        const itemCount = queryResult.data!.paginationInfo.count;
        const newLimit = itemsPerPage;
        const newOffset = offset + itemsPerPage;

        if (newOffset - newLimit >= itemCount) return;

        setTimeout(() => {
          runQuery(newLimit, newOffset);
        }, delayQuery);
      }
    }
    runQuery(itemsPerPage, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    data,
    hasError,
  };
};
