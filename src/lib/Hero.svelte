<script lang="ts">
  import { t } from './i18n';

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<section id="hero" class="min-h-screen flex items-center justify-center relative overflow-hidden">
  <!-- Background grid effect -->
  <div class="absolute inset-0" style="background: linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px); background-size: 60px 60px;"></div>

  <div class="relative z-10 max-w-4xl mx-auto px-6 py-20">
    <div class="font-mono text-sm mb-4 opacity-0 animate-fade-in" style="color: var(--accent);">
      {$t('hero.greeting')}
    </div>

    <h1 class="text-5xl md:text-7xl font-bold mb-4 opacity-0 animate-fade-in-delay-1" style="color: var(--text);">
      Claudio Junior<span style="color: var(--accent);">.</span>
    </h1>

    <h2 class="text-2xl md:text-4xl font-bold mb-8 opacity-0 animate-fade-in-delay-2" style="color: var(--text-secondary);">
      {$t('hero.role')}
    </h2>

    <p class="max-w-2xl text-lg leading-relaxed mb-10 opacity-0 animate-fade-in-delay-3" style="color: var(--text-secondary);">
      {$t('hero.description')}
    </p>

    <!-- Terminal-style snippet -->
    <div class="rounded-lg p-4 mb-10 max-w-lg font-mono text-sm opacity-0 animate-fade-in-delay-3" style="background-color: var(--bg-code); border: 1px solid var(--border);">
      <div class="flex items-center gap-2 mb-3">
        <div class="w-3 h-3 rounded-full" style="background-color: var(--code-dot-red);"></div>
        <div class="w-3 h-3 rounded-full" style="background-color: var(--code-dot-yellow);"></div>
        <div class="w-3 h-3 rounded-full" style="background-color: var(--code-dot-green);"></div>
        <span class="text-xs ml-2" style="color: var(--code-path);">~/claudio-junior</span>
      </div>
      <div style="color: var(--text-secondary);">
        <span style="color: var(--accent);">const</span> <span style="color: var(--code-keyword);">developer</span> = &#123;<br/>
        <span class="ml-4" style="color: var(--text-muted);">name:</span> <span style="color: var(--code-string);">'Claudio Junior'</span>,<br/>
        <span class="ml-4" style="color: var(--text-muted);">stack:</span> [<span style="color: var(--code-string);">'TypeScript'</span>, <span style="color: var(--code-string);">'React'</span>, <span style="color: var(--code-string);">'Node.js'</span>],<br/>
        <span class="ml-4" style="color: var(--text-muted);">experience:</span> <span style="color: var(--code-number);">'9+ years'</span>,<br/>
        <span class="ml-4" style="color: var(--text-muted);">speaker:</span> <span style="color: var(--code-string);">'TDC, 12 years'</span>,<br/>
        <span class="ml-4" style="color: var(--text-muted);">available:</span> <span style="color: var(--accent);">true</span><br/>
        &#125;;
      </div>
    </div>

    <div class="flex flex-wrap gap-4 opacity-0 animate-fade-in-delay-4">
      <button
        on:click={() => scrollTo('projects')}
        class="px-6 py-3 font-semibold rounded-lg transition-all hover:shadow-lg"
        style="background-color: var(--accent); color: var(--bg); hover-shadow-color: var(--accent);"
      >
        {$t('hero.cta')}
      </button>
      <button
        on:click={() => scrollTo('contact')}
        class="px-6 py-3 rounded-lg transition-all"
        style="border: 1px solid var(--border); color: var(--text-secondary);"
      >
        {$t('hero.contact')}
      </button>
    </div>
  </div>
</section>
