<script lang="ts">
  import { t, locale, toggleLocale } from './i18n';
  import { theme, toggleTheme } from './theme';

  let scrolled = false;
  let mobileOpen = false;

  function handleScroll() {
    scrolled = window.scrollY > 50;
  }

  function scrollTo(id: string) {
    mobileOpen = false;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<svelte:window on:scroll={handleScroll} />

<nav
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
  style="background-color: {scrolled ? 'var(--nav-bg)' : 'transparent'}; backdrop-filter: {scrolled ? 'blur(12px)' : 'none'}; border-bottom: {scrolled ? '1px solid var(--border)' : '1px solid transparent'};"
>
  <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
    <button on:click={() => scrollTo('hero')} class="font-mono font-bold text-lg transition-colors" style="color: var(--accent);">
      &lt;kirizuro /&gt;
    </button>

    <!-- Desktop Nav -->
    <div class="hidden md:flex items-center gap-8">
      <button on:click={() => scrollTo('experience')} class="transition-colors font-mono text-sm hover-accent" style="color: var(--text-secondary);">
        {$t('nav.experience')}
      </button>
      <button on:click={() => scrollTo('projects')} class="transition-colors font-mono text-sm hover-accent" style="color: var(--text-secondary);">
        {$t('nav.projects')}
      </button>
      <button on:click={() => scrollTo('skills')} class="transition-colors font-mono text-sm hover-accent" style="color: var(--text-secondary);">
        {$t('nav.skills')}
      </button>
      <button on:click={() => scrollTo('contact')} class="transition-colors font-mono text-sm hover-accent" style="color: var(--text-secondary);">
        {$t('nav.contact')}
      </button>

      <!-- Theme toggle -->
      <button
        on:click={toggleTheme}
        class="p-2 rounded-lg transition-all"
        style="color: var(--text-secondary); border: 1px solid var(--border);"
        aria-label="Toggle theme"
      >
        {#if $theme === 'dark'}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        {:else}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        {/if}
      </button>

      <button
        on:click={toggleLocale}
        class="px-3 py-1 rounded text-xs font-mono transition-all"
        style="color: var(--text-secondary); border: 1px solid var(--border);"
      >
        {$locale === 'en' ? 'PT' : 'EN'}
      </button>
    </div>

    <!-- Mobile Hamburger -->
    <button on:click={() => (mobileOpen = !mobileOpen)} class="md:hidden" style="color: var(--text-secondary);">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {#if mobileOpen}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        {:else}
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        {/if}
      </svg>
    </button>
  </div>

  <!-- Mobile Menu -->
  {#if mobileOpen}
    <div class="md:hidden px-6 py-4 flex flex-col gap-4" style="background-color: var(--nav-bg); backdrop-filter: blur(12px); border-top: 1px solid var(--border);">
      <button on:click={() => scrollTo('experience')} class="transition-colors font-mono text-sm text-left" style="color: var(--text-secondary);">
        {$t('nav.experience')}
      </button>
      <button on:click={() => scrollTo('projects')} class="transition-colors font-mono text-sm text-left" style="color: var(--text-secondary);">
        {$t('nav.projects')}
      </button>
      <button on:click={() => scrollTo('skills')} class="transition-colors font-mono text-sm text-left" style="color: var(--text-secondary);">
        {$t('nav.skills')}
      </button>
      <button on:click={() => scrollTo('contact')} class="transition-colors font-mono text-sm text-left" style="color: var(--text-secondary);">
        {$t('nav.contact')}
      </button>
      <div class="flex gap-3">
        <button
          on:click={toggleTheme}
          class="p-2 rounded-lg transition-all"
          style="color: var(--text-secondary); border: 1px solid var(--border);"
          aria-label="Toggle theme"
        >
          {#if $theme === 'dark'}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          {:else}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          {/if}
        </button>
        <button
          on:click={toggleLocale}
          class="px-3 py-1 rounded text-xs font-mono transition-all w-fit"
          style="color: var(--text-secondary); border: 1px solid var(--border);"
        >
          {$locale === 'en' ? 'PT' : 'EN'}
        </button>
      </div>
    </div>
  {/if}
</nav>

<style>
  .hover-accent:hover {
    color: var(--accent) !important;
  }
</style>
