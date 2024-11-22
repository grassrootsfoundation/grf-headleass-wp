const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchContent() {
	const response = await fetch(`${API_BASE_URL}/content`);
	return await response.json();
}
