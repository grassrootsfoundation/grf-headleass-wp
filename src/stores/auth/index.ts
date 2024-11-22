import { writable } from 'svelte/store';

export interface User {
	token: string | null;
	role: string | null;
}

export const user = writable<{ id: string; role: string } | null>(null);

export function setUser(userData: { id: string; role: string } | null) {
	user.set(userData);
}

export function clearUser() {
	user.set(null);
}
