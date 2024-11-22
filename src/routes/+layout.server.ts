import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ locals }: { locals: App.Locals }) => {
	return {
		user: locals.user
	};
};
