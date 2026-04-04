<script lang="ts">
  import Nav from './lib/Nav.svelte';
  import Hero from './lib/Hero.svelte';
  import Experience from './lib/Experience.svelte';
  import Projects from './lib/Projects.svelte';
  import Skills from './lib/Skills.svelte';
  import Contact from './lib/Contact.svelte';
  import { theme } from './lib/theme';
  import { onMount } from 'svelte';

  onMount(() => {
    // Ensure the html class matches the theme on mount
    document.documentElement.classList.toggle('dark', $theme === 'dark');
    document.documentElement.classList.toggle('light', $theme === 'light');
  });

  // Keep html class in sync with theme changes
  $: if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', $theme === 'dark');
    document.documentElement.classList.toggle('light', $theme === 'light');
  }
</script>

<div class="min-h-screen" style="background-color: var(--bg); color: var(--text);">
  <Nav />
  <Hero />
  <Experience />
  <Projects />
  <Skills />
  <Contact />
</div>
