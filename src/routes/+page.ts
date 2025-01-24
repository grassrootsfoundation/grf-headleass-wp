import { gql } from 'graphql-request';

import { client } from '$lib/graphql/client';

const GET_LANDING_PAGE = gql`
  query GetLandingPage($slug: ID!) {
    page(id: $slug, idType: URI) {
      title
      content
    }
  }
`;

export async function load() {
  try {
    const data: any = await client.request(GET_LANDING_PAGE, {
      slug: '/',
    });
    if (!data || !data.page) {
      throw new Error('Failed to fetch content');
    }
    return {
      page: data.page,
    };
  } catch (error) {
    const err = error as Error;
    console.error('GraphQL Error:', err.message);
  }
}
