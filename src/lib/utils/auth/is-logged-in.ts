import { checkSession } from '$lib/api/auth/check-session';

export async function isLoggedIn(): Promise<boolean> {
  try {
    if (typeof window === 'undefined') {
      console.warn('isLoggedIn called in a non-browser environment.');
      return false; // Return false for SSR
    }

    // Check for a token cookie on the client side
    const tokenCookie = document.cookie
      ?.split('; ')
      ?.find((row) => row.startsWith('token='));

    if (!tokenCookie) {
      return false; // No token means the user is not logged in
    }

    // Verify session with the backend
    const validSession = await checkSession();
    return validSession?.valid === true;
  } catch (error) {
    console.error('Error during isLoggedIn check:', error);
    return false; // Gracefully handle unexpected errors
  }
}
