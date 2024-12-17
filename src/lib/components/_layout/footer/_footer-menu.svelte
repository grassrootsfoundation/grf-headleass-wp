<script lang="ts">
	let menus = [
		{
			title: 'Menu1 Title',
			nav: [
				{
					label: 'Item One',
					slug: '/',
					title: 'Item One'
				},
				{
					label: 'Item One',
					slug: '/',
					title: 'Item Three'
				},
				{
					label: 'Item Three',
					slug: '/',
					title: 'Item Three'
				},
				{
					label: 'Item Four',
					slug: '/',
					title: 'Item Four'
				}
			]
		},
		{
			title: 'Menu2 Title',
			nav: [
				{
					label: 'Item One',
					slug: '/',
					title: 'Item One'
				},
				{
					label: 'Item One',
					slug: '/',
					title: 'Item Three'
				},
				{
					label: 'Item Three',
					slug: '/',
					title: 'Item Three'
				},
				{
					label: 'Item Four',
					slug: '/',
					title: 'Item Four'
				}
			]
		}
	];
</script>

{#if menus}
	{#each menus as menu}
		<menu class="flex flex-col gap-3">
			<p class="font-semibold tracking-wider">{menu.title}</p>
			{#if menu?.nav}
				<nav class="flex flex-col gap-2">
					{#each menu?.nav as item}
						<a data-title={item.title} href={item.slug}>{item.label}</a>
					{/each}
				</nav>
			{/if}
		</menu>
	{/each}
{/if}
