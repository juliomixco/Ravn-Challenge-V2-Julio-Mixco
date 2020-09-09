export interface GqlPageInfo {
  endCursor: string;
  hasNextPage: boolean;
}

export interface GqlEdge<T> {
  node: T;
  cursor: string;
}
