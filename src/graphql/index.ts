import { ApolloClient, InMemoryCache } from '@apollo/client';

export const graphqlClient = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/swapi',
  cache: new InMemoryCache(),
});
