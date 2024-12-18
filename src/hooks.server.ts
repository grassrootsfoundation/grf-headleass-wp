import { getUserFromToken } from '$utils/auth/get-user-from-token';

import type { Handle } from '@sveltejs/kit';

import type { User } from '$types/api-types';

export const handle: Handle = async ({ event, resolve }) => {
  const token = event.cookies.get('token');

  if (token) {
    try {
      (event.locals as { user: User | null }).user = token
        ? getUserFromToken(token)
        : null;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        (event.locals as { user: User | null }).user = null;
      }
    }
  } else {
    (event.locals as { user: User | null }).user = null;
  }

  return resolve(event);
};
