const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function resetPassword(password: string, token: string) {
	const response = await fetch(`${API_BASE_URL}/auth/reset-password`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ password, token })
	});

	return response;
}
