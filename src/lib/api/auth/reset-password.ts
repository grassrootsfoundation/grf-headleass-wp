const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function resetPassword(
	token: string,
	newPassword: string,
	confirmNewPassword: string
) {
	const response = await fetch(`${API_BASE_URL}/auth/reset-password`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ token, newPassword, confirmNewPassword })
	});

	return response;
}
