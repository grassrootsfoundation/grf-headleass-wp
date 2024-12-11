import jwt from 'jsonwebtoken';

import type { User } from '$src/types/api-types';

const VITE_JWT_SECRET = import.meta.env.VITE_JWT_SECRET;

if (!VITE_JWT_SECRET) {
	throw new Error('VITE_JWT_SECRET is not defined in the environment variables');
}

export function getUserFromToken(token: string): User | null {
	try {
		const user = jwt.verify(token, VITE_JWT_SECRET) as User;
		return user;
	} catch (error) {
		if (error instanceof Error) {
			console.error(`Token verification failed: ${error.message}`);
		}
		return null;
	}
}
