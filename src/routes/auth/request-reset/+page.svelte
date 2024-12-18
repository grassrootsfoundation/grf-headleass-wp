<script lang="ts">
  import { goto } from '$app/navigation';

  import { requestResetPassword as apiRequestResetPassword } from '$lib/api/auth/request-reset-password';

  import Error from '$components/auth/errors/errors.svelte';

  let email = '';
  let errorMessages: string[] = [];

  async function resetPassword() {
    try {
      const response = await apiRequestResetPassword(email);

      if (response.ok) {
        alert('A reset link has been sent to your email.');
        goto('/auth/login');
      } else {
        const errorData = await response.json();
        errorMessages = errorData.message.message;
        console.log({ errorMessages });
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(
          'An error occurred while resetiing your password, please try again.'
        );
      }
    }
  }
</script>

<h1>Request Password Reset</h1>
<form on:submit|preventDefault={resetPassword}>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" bind:value={email} />

  <button type="submit">Send Reset Link</button>

  <Error errors={errorMessages} />
</form>
