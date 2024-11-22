import { checkSession } from '$lib/api/auth/check-session';

export async function isLoggedIn(): Promise<boolean> {
	if (typeof window === 'undefined') {
		// If running on the server, do not perform client-side checks
		throw new Error('isLoggedIn should only be used in the browser.');
	}

	// Check for a token cookie on the client side
	const hasCookie = document.cookie.split('; ').find((row) => row.startsWith('token='));
	if (!hasCookie) {
		return false; // No token means the user is not logged in
	}

	// Verify session with the backend
	const validSession = await checkSession();

	return validSession?.valid === true;
}
