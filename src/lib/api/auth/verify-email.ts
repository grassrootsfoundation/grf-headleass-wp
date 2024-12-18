const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function verifyEmail(token: string) {
  const response = await fetch(`${API_BASE_URL}/auth/verify-email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token }),
  });

  return response;
}
