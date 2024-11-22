const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function checkSession(): Promise<{ valid: boolean }> {
	try {
		const response = await fetch(`${API_BASE_URL}/auth/check-session`, {
			method: 'GET',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (response.status === 401) {
			// If the user is unauthorized, return valid as false
			return { valid: false };
		}

		if (!response.ok) {
			throw new Error(`Failed to check session: ${response.statusText}`);
		}

		const data = await response.json();

		if (typeof data.valid === 'boolean') {
			return data;
		}

		console.error('Unexpected response format:', data);
		return { valid: false };
	} catch (error) {
		console.error('Error checking session:', error);
		return { valid: false };
	}
}
