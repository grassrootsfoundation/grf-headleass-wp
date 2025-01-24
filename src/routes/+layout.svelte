<script lang="ts">
  import '@fontsource-variable/open-sans';
  import '@fontsource-variable/roboto-slab';
  import Icon from '@iconify/svelte';
  import { onMount } from 'svelte';
  import { cubicOut } from 'svelte/easing';
  import { fly, scale } from 'svelte/transition';

  import '$src/public/globals.css';

  import clsx from '$src/lib/utils/clsx';
  import { site } from '$src/site.config';

  import Logo from '$components/_layout/logo/logo.svelte';
  import ButtonUnstyled from '$components/button/button.svelte';

  import './layout.css';

  let isMenuToggled: boolean = false;
  export let originX: number = 100;
  export let originY: number = 0;

  function toggleMenu() {
    isMenuToggled = !isMenuToggled;

    if (isMenuToggled) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  // Function to handle the Escape key press
  function handleKeydown(event: { key: string }) {
    if (event.key === 'Escape' && isMenuToggled) {
      toggleMenu();
    }
  }

  onMount(() => {
    window.addEventListener('keydown', handleKeydown);

    // Cleanup the event listener when the component is destroyed
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  export let data: {
    primaryMenu: { label: string; url: string }[];
    communityMenu: { label: string; url: string }[];
    servicesMenu: { label: string; url: string }[];
    contactMenu: { label: string; url: string }[];
  };
</script>

<div class="layout">
  <header class="header">
    <menu class="contain page">
      <a href="/">
        <Logo size="xs" />
      </a>
      <div class="flex gap-3 items-center">
        <nav>
          {#each data.primaryMenu as item}
            <a href={item.url}><span>{item.label}</span></a>
          {/each}
        </nav>
        <div>
          <ButtonUnstyled class="give-button">Give</ButtonUnstyled>
        </div>
        <div class="nav-mobile mobile-nav-inline">
          <ButtonUnstyled class="nav-menu-toggle" on:click={toggleMenu}>
            {#if !isMenuToggled}
              <Icon icon="mdi:menu" />
            {/if}
          </ButtonUnstyled>
        </div>
      </div>
    </menu>
  </header>

  <div class="content-wrapper">
    <slot />
  </div>

  <footer class="footer">
    <div class="contain page">
      <div class="footer-wrapper">
        <div class="footer-slogan-block">
          <div class="footer-logo">
            <Logo variant="icon" />
            <div class="footer-slogan">
              {site.branding.slogan}
            </div>
          </div>
        </div>
        <div class="full-navigation">
          <menu>
            <h4>Community</h4>
            <nav>
              {#each data.communityMenu as item}
                <div>
                  <a href={item.url} title={item.label}>{item.label}</a>
                </div>
              {/each}
            </nav>
          </menu>
          <menu>
            <h4>Services</h4>
            <nav>
              {#each data.servicesMenu as item}
                <div>
                  <a href={item.url} title={item.label}>{item.label}</a>
                </div>
              {/each}
            </nav>
          </menu>
          <menu>
            <h4>Get In Touch</h4>
            <nav>
              {#each data.contactMenu as item}
                <div>
                  <a href={item.url} title={item.label}>{item.label}</a>
                </div>
              {/each}
              <div><a href="/" title="">Give</a></div>
            </nav>
          </menu>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="footer-copyright-wrapper">
        {site.branding.longname} | &copy;
        {new Date().getFullYear()}
      </div>
    </div>
    <div class="shape-one"></div>
    <div class="shape-two"></div>
  </footer>

  <div class="layout-bg-decor layout-bg-left">
    <div class="layout-bg-decor-primary"></div>
    <div class="layout-bg-decor-secondary"></div>
    <div class="layout-bg-decor-tertiary"></div>
  </div>
  <div class="layout-bg-decor layout-bg-right">
    <div class="layout-bg-decor-tertiary"></div>
    <div class="layout-bg-decor-primary"></div>
    <div class="layout-bg-decor-secondary"></div>
  </div>

  {#if isMenuToggled}
    <div
      class="full-navigation mobile-navigation"
      transition:fly={{ x: -500, duration: 250 }}
    >
      <menu transition:fly={{ x: -500, duration: 900 }}>
        <h4>Community</h4>
        <nav>
          {#each data.communityMenu as item}
            <div>
              <a href={item.url} title={item.label}>{item.label}</a>
            </div>
          {/each}
        </nav>
      </menu>
      <menu transition:fly={{ x: -600, duration: 950 }}>
        <h4>Services</h4>
        <nav>
          {#each data.servicesMenu as item}
            <div>
              <a href={item.url} title={item.label}>{item.label}</a>
            </div>
          {/each}
        </nav>
      </menu>
      <menu transition:fly={{ x: -700, duration: 1000 }}>
        <h4>Get In Touch</h4>
        <nav>
          {#each data.contactMenu as item}
            <div>
              <a href={item.url} title={item.label}>{item.label}</a>
            </div>
          {/each}
          <div><a href="/" title="">Give</a></div>
        </nav>
      </menu>
    </div>
  {/if}
  {#if isMenuToggled}
    <div
      class="backdrop-overlay"
      transition:scale={{ duration: 400, easing: cubicOut }}
      style="transform-origin: {originX}% {originY}%;"
    ></div>
  {/if}
  <div class="nav-mobile nav-mobile-close">
    <ButtonUnstyled
      class={clsx('nav-menu-toggle', isMenuToggled && 'nav-menu-toggle-active')}
      on:click={toggleMenu}
    >
      {#if isMenuToggled}
        <Icon icon="mdi:close" />
      {/if}
    </ButtonUnstyled>
  </div>
</div>
