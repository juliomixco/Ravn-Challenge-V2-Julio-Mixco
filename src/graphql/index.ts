import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { APP_CONFIG } from '../config/app.config';

// fix CORS issue based on https://github.com/apollographql/apollo-client/issues/5764#issuecomment-574930001
const httpLink = new HttpLink({
  uri: APP_CONFIG.apiUrl,
  fetchOptions: {
    mode: 'cors',
  },
});

export const graphqlClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
