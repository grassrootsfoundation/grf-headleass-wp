<script lang="ts">
  import { onMount } from 'svelte';

  import { fetchGrants } from '$lib/api/grants';

  let grants: string[] = [];
  let filters = {
    keyword: '',
    agency: '',
    sort: '',
    order: 'asc', // 'asc' or 'desc'
    page: 1,
    limit: 10,
  };

  async function fetchGrantData() {
    try {
      grants = await fetchGrants(filters);
    } catch (err) {
      console.error('Failed to fetch grants', err);
    }
  }

  onMount(fetchGrantData);
</script>

<div>
  <h1>Grant List</h1>
  <div>
    <input
      type="text"
      placeholder="Search by keyword"
      bind:value={filters.keyword} />
    <select bind:value={filters.agency}>
      <option value="">All Agencies</option>
      <option value="NASA">NASA</option>
      <option value="NSF">NSF</option>
    </select>
    <select bind:value={filters.sort}>
      <option value="">Sort by</option>
      <option value="title">Title</option>
      <option value="date">Date</option>
    </select>
    <select bind:value={filters.order}>
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
    <button on:click={fetchGrantData}>Filter</button>
  </div>

  <ul>
    {#if grants.length}
      {#each grants as grant}
        <li>
          <h2>{grant.title}</h2>
          <p>{grant.description}</p>
        </li>
      {/each}
    {:else}
      <p>No grants found.</p>
    {/if}
  </ul>

  <div>
    <button
      on:click={() => {
        filters.page = Math.max(1, filters.page - 1);
        fetchGrantData();
      }}>Previous</button>
    <button
      on:click={() => {
        filters.page += 1;
        fetchGrantData();
      }}>
      Next
    </button>
  </div>
</div>
