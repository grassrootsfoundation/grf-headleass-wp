export async function fetchGrants(filters: Record<string, any>) {
  const params = new URLSearchParams(filters).toString();
  const response = await fetch(`/api/grants?${params}`);
  if (!response.ok) {
    throw new Error(`Error fetching grants: ${response.statusText}`);
  }
  return response.json();
}
