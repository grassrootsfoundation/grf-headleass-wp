import type { GetArticlesQuery } from '$src/lib/graphql/types';

import { client } from '$lib/graphql/client';
import GetArticles from '$lib/graphql/entities/articles/articles.graphql';

export async function load() {
  const data: GetArticlesQuery = await client.request(GetArticles);

  if (!data || !data.posts) {
    throw new Error('Failed to fetch posts');
  }

  return {
    posts: data.posts.nodes,
    pageInfo: data.posts.pageInfo,
  };
}
