import { client } from '$lib/graphql/client';
import GetArticle from '$lib/graphql/entities/article/article.graphql';
import type { GetArticleQuery } from '$lib/graphql/types';

export async function load({ params }) {
  const { id: slug } = params;

  if (!slug) {
    return {
      status: 404,
      error: new Error('Post not found'),
    };
  }

  try {
    const { postBy }: { postBy: GetArticleQuery } = await client.request(
      GetArticle,
      {
        slug,
      }
    );

    if (!postBy) {
      return {
        status: 404,
        error: new Error('Post not found'),
      };
    }

    return {
      post: postBy,
    };
  } catch (error) {
    const err = error as Error;
    console.error('GraphQL Error:', err.message);
  }
}
