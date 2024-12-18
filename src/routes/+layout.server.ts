import type { LayoutServerLoad } from './$types';

import type { User } from '$types/api-types';

export const load: LayoutServerLoad = (event) => {
  return {
    user: (event.locals as { user: User | null }).user || null,
  };
};
