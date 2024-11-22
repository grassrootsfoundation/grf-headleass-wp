<script lang="ts">
	import { goto } from '$app/navigation';
	import { resetPassword as apiResetPassword } from '$lib/api/auth/reset-password';
	import Error from '$src/lib/components/auth/errors/errors.svelte';

	let email = '';
	let errorMessages: string[] = [];

	async function resetPassword() {
		try {
			const response = await apiResetPassword(email);

			if (response.ok) {
				errorMessages = ['A reset link has been sent to your email.'];
			} else {
				const errorData = await response.json();
				errorMessages = errorData.message.message;
			}
		} catch (error) {
			alert('An error occurred while resetiing your password, please try again.');
		}
	}
</script>

<h1>Request Password Reset</h1>
<form on:submit|preventDefault={resetPassword}>
	<label for="email">Email:</label>
	<input type="email" id="email" bind:value={email} />

	<Error errors={errorMessages} />

	<button type="submit">Send Reset Link</button>
</form>
