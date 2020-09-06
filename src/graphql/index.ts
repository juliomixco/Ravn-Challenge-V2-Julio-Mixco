import { ApolloClient, InMemoryCache } from '@apollo/client';
import { APP_CONFIG } from '../config/app.config';

export const graphqlClient = new ApolloClient({
  uri: APP_CONFIG.apiUrl,
  cache: new InMemoryCache(),
});
