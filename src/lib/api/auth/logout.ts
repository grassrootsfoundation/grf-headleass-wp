const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function logout(): Promise<boolean> {
	try {
		// Call the logout endpoint
		const response = await fetch(`${API_BASE_URL}/auth/logout`, {
			method: 'POST',
			credentials: 'include' // Include cookies in the request
		});

		if (response.ok) {
			return true; // Logout was successful
		} else {
			console.error('Logout failed:', await response.text());
			return false;
		}
	} catch (error) {
		console.error('Error during logout:', error);
		return false;
	}
}
