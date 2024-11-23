<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { verifyEmail as apiVerifyEmail } from '$lib/api/auth/verify-email';

	let message = 'Verifying your email...';

	// Function to verify email
	async function verifyEmail(token: string) {
		try {
			const response = await apiVerifyEmail(token);

			if (response.ok) {
				message = 'Email verified successfully. Redirecting to login...';
				setTimeout(() => goto('/auth/login'), 3000); // Redirect to login page after 3 seconds
			} else {
				const errorData = await response.json();
				message = `Error: ${errorData.message}`;
			}
		} catch (error) {
			message = 'An error occurred during verification. Please try again later.';
		}
	}

	// Run on component mount
	onMount(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const token = urlParams.get('token');
		if (token) {
			verifyEmail(token);
		} else {
			message = 'Invalid verification link.';
		}
	});
</script>

<main>
	<p>{message}</p>
</main>
