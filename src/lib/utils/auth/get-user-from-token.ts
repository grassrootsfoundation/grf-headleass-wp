import jwt from 'jsonwebtoken';

const VITE_JWT_SECRET = import.meta.env.VITE_JWT_SECRET;

export function getUserFromToken(token: string): App.UserPayload {
	try {
		return jwt.verify(token, `${VITE_JWT_SECRET}`) as App.UserPayload;
	} catch (error) {
		throw new Error('Invalid token');
	}
}
