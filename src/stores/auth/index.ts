import type { UserDocument as User } from '$src/shared/types/types';
import { writable } from 'svelte/store';

export const user = writable<User | null>(null);

export function setUser(userData: User | null) {
	user.set(userData);
}

export function clearUser() {
	user.set(null);
}
