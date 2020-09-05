import { gql } from '@apollo/client';
import { Person } from '../interfaces/person.interface';

export interface FetchPeoplePageData {
  allPeople: Person[];
  paginationInfo: {
    count: number;
  };
}

export interface PageVariables {
  limit: number;
  offset: number;
}

export const FETCH_PEOPLE_PAGE = gql`
  query FetchPeoplePage($limit: Int!, $offset: Int!) {
    allPeople: allPersons(first: $limit, skip: $offset) {
      id
      birthYear
      name
      gender
      height
      hairColor
      eyeColor
      skinColor
      homeworld {
        name
      }
      species {
        name
      }
      vehicles {
        name
      }
    }
    paginationInfo: _allPersonsMeta {
      count
    }
  }
`;
