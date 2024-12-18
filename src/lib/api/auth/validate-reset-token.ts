const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function validateResetToken(token: string): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/validate-reset-token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    });

    if (!response.ok) {
      return false; // Token validation failed
    }

    const data = await response.json();
    return data.valid;
  } catch (error) {
    console.error('Error validating reset token:', error);
    return false;
  }
}
