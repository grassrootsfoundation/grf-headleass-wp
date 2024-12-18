const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchPages(id: string) {
  const response = await fetch(`${API_BASE_URL}/pages/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  });

  return response;
}
