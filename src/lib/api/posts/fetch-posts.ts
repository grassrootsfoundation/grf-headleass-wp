const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchPosts() {
  const response = await fetch(`${API_BASE_URL}/posts`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  });

  return response;
}
