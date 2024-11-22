declare namespace App {
	interface UserPayload {
		id: string;
		email: string;
		role: string;
	}
	interface Locals {
		user: App.UserPayload | null; // You can adjust this to fit your user structure
	}
}
