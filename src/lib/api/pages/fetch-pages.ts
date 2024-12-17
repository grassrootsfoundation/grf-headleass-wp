const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchPages() {
	const response = await fetch(`${API_BASE_URL}/pages`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
		credentials: 'include',
	});

	return response;
}
