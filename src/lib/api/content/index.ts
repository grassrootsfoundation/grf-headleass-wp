import type { Block, User } from '$src/types/api-types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchContent(contentId: string) {
  const response = await fetch(`${API_BASE_URL}/content/${contentId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  });

  return response;
}

export async function createContent(
  title: string,
  contentId: string,
  associatedId: string,
  associatedType: 'page' | 'post',
  blocks: Block[],
  user: User
) {
  const response = await fetch(`${API_BASE_URL}/content/${contentId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, blocks, associatedType, associatedId, user }),
    credentials: 'include',
  });

  return await response.json();
}
