const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function requestResetPassword(email: string) {
  const response = await fetch(`${API_BASE_URL}/auth/request-reset-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });

  return response;
}
