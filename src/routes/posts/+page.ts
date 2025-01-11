import { gql } from 'graphql-request';

import { client } from '$lib/graphql/client';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      nodes {
        id
        title
        content
      }
    }
  }
`;

export async function load() {
  const data: any = await client.request(GET_POSTS);

  if (!data || !data.posts) {
    throw new Error('Failed to fetch posts');
  }

  return {
    posts: data.posts.nodes,
  };
}
