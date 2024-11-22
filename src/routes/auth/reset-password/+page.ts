import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { validateResetToken } from '$src/lib/api/auth/validate-reset-token';

export const load: PageLoad = async ({ url }: { url: URL }) => {
	const token = url.searchParams.get('token');

	if (!token) {
		throw redirect(302, '/'); // Redirect if no token is present
	}

	const isValid = await validateResetToken(token);

	if (!isValid) {
		throw redirect(302, '/'); // Redirect if token validation fails
	}

	return { token };
};
