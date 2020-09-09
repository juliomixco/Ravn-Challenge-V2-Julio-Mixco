import { gql } from '@apollo/client';
import { GqlPageInfo, GqlEdge } from './interfaces/pagination.interface';
import { PersonResponse } from './interfaces/personResponse.interface';

export interface FetchPeoplePageData {
  allPeople: {
    pageInfo: GqlPageInfo;
    edges: GqlEdge<PersonResponse>[];
  };
  paginationInfo: {
    count: number;
  };
}

export interface PageVariables {
  first: number;
  after: string;
}

export const FETCH_PEOPLE_PAGE = gql`
  query FetchPeoplePage($first: Int!, $after: String) {
    allPeople(first: $first, after: $after) {
      totalCount
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
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
          vehicleConnection {
            vehicles {
              name
            }
          }
        }
        cursor
      }
    }
  }
`;
