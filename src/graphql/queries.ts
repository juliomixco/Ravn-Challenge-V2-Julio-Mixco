import { gql } from '@apollo/client';

export const FETCH_PEOPLE_PAGE = gql`
  query {
    allPersons {
      birthYear
      name
      species {
        name
      }
      vehicles {
        name
      }
    }
  }
`;
