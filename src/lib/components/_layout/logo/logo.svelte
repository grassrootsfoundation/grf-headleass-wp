<script lang="ts">
	import type { SizeProp } from '$components/component';

	import LogoAcronym from './_logo-acronym.svelte';
	import LogoIcon from './_logo-icon.svelte';
	import LogoTextCenter from './_logo-text-center.svelte';
	import LogoText from './_logo-text.svelte';

	import './logo.css';

	interface LogoProps {
		appearance?: 'light' | 'dark';
		variant?: 'icon' | 'acronym' | 'text-center' | 'text';
		size?: Extract<SizeProp, 'xs' | 'sm' | 'md' | 'lg'>;
	}

	export let appearance: LogoProps['appearance'] = 'dark',
		size: LogoProps['size'] = undefined,
		variant: LogoProps['variant'] = undefined;
</script>

<div class="logo" data-appearance={appearance} data-size={size}>
	{#if variant === 'acronym'}
		<LogoAcronym />
	{:else if variant === 'text-center'}
		<LogoTextCenter />
	{:else if variant === 'text'}
		<LogoText />
	{:else}
		<LogoIcon />
	{/if}
</div>
