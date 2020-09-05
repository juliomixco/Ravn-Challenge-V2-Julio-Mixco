import { ApolloProvider } from '@apollo/client';
import React from 'react';
import './App.css';
import { graphqlClient } from './graphql';
import { StarWars } from './pages/StarWars';

function App() {
  return (
    <ApolloProvider client={graphqlClient}>
      <StarWars></StarWars>
    </ApolloProvider>
  );
}

export default App;
