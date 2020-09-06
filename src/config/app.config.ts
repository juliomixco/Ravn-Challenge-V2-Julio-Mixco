export const APP_CONFIG = {
  apiUrl: process.env.REACT_APP_API_URL,
  graphql: {
    pageSize: Number(process.env.REACT_APP_ITEMS_PER_PAGE || 10),
    queryDelay: Number(process.env.REACT_APP_QUERY_DELAY || 500),
  },
};
