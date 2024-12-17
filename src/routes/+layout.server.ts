import type { User } from '$src/types/api-types';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = (event) => {
	return {
		user: (event.locals as { user: User | null }).user || null,
	};
};
