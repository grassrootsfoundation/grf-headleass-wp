import { writable } from 'svelte/store';

import type { UserDocument as User } from '$src/types/api-types';

export const user = writable<User | null>(null);

export function setUser(userData: User | null) {
  user.set(userData);
}

export function clearUser() {
  user.set(null);
}
