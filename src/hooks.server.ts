import { getUserFromToken } from '$lib/utils/auth/get-user-from-token';

import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const token = event.cookies.get('token');

	if (token) {
		try {
			event.locals.user = token ? getUserFromToken(token) : null;
		} catch (error) {
			event.locals.user = null;
		}
	} else {
		event.locals.user = null;
	}

	return resolve(event);
};
