import { GraphQLClient } from 'graphql-request';

export const client = new GraphQLClient(
  `${import.meta.env.VITE_SERVER_URL}/graphql`,
  {
    headers: {
      'Content-Type': 'application/json',
    },
  }
);
