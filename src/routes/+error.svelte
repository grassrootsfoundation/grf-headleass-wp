<script lang="ts">
  import { page } from '$app/stores';
</script>

<div class="error-page">
  <h1>{$page?.status}</h1>
  <p>{$page?.url.pathname} {$page?.error?.message}</p>

  <a href="/" class="home-link">Return to Home</a>
</div>

<style>
  /* Add styles similar to the previous example */
</style>
