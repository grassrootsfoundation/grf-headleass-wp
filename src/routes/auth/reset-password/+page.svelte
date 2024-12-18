<script lang="ts">
  import { goto } from '$app/navigation';
  import { page } from '$app/stores'; // To read query params

  import Error from '$components/auth/errors/errors.svelte';

  import { resetPassword as apiResetPassword } from '$src/lib/api/auth/reset-password';

  let newPassword = '';
  let confirmNewPassword = '';
  let token = '';
  let errorMessages: string[] = [];

  $: token = $page.url.searchParams.get('token') || '';

  async function resetPassword() {
    console.log(newPassword, confirmNewPassword);
    if (String(newPassword) !== String(confirmNewPassword)) {
      errorMessages = ['Passwords do not match.'];
      return;
    }

    try {
      const response = await apiResetPassword(
        token,
        newPassword,
        confirmNewPassword
      );

      if (response.ok) {
        alert('Password reset successfully. Redirecting to login...');
        setTimeout(() => goto('/auth/login'), 2000);
      } else {
        const errorData = await response.json();
        errorMessages = errorData.message.message;
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(
          'An error occurred while resetting your password, please try again.'
        );
      }
    }
  }
</script>

<h1>Password Reset</h1>
<form on:submit|preventDefault={resetPassword}>
  <label for="newPassword">New Password:</label>
  <input
    type="password"
    id="newPassword"
    name="newPassword"
    bind:value={newPassword}
    required />

  <label for="confirmPassword">Confirm New Password:</label>
  <input
    type="password"
    id="confirmNewPassword"
    name="confirmNewPassword"
    bind:value={confirmNewPassword}
    required />

  <button type="submit">Reset Password</button>
  <Error errors={errorMessages} />
</form>
