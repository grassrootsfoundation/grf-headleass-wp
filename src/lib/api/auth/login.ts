const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function login(email: string, password: string) {
	const response = await fetch(`${API_BASE_URL}/auth/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password }),
		credentials: 'include',
	});

	return response;
}
