const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function register(
	name: string,
	email: string,
	password: string,
	confirmPassword: string
) {
	const response = await fetch(`${API_BASE_URL}/auth/register`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ name, email, password, confirmPassword }),
	});

	return response;
}
