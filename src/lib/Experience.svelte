<script lang="ts">
  import { t } from './i18n';
  import { reveal, revealChildren } from './reveal';

  const jobs = [
    { key: 'methodical', tech: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL'] },
    { key: 'mouts', tech: ['React.js', 'TypeScript', 'Node.js'] },
    { key: 'certsys', tech: ['React Native', 'CI/CD', 'TypeScript', 'Node.js'] },
    { key: 'target', tech: ['React Native', 'Firebase', 'SQL', 'Push Notifications'] },
    { key: 'cotepe', tech: ['Vue.js', 'Node.js', 'Firebase'] },
  ];
</script>

<section id="experience" class="py-24 relative">
  <div class="max-w-4xl mx-auto px-6">
    <div use:reveal>
      <h2 class="text-3xl md:text-4xl font-bold mb-2" style="color: var(--text);">
        <span class="font-mono text-lg mr-2" style="color: var(--accent);">02.</span>
        {$t('experience.title')}
      </h2>
      <div class="w-20 h-1 rounded mb-16" style="background-color: var(--accent); opacity: 0.5;"></div>
    </div>

    <div class="relative">
      <!-- Timeline line -->
      <div class="absolute left-0 md:left-8 top-0 bottom-0 w-px" style="background-color: var(--border-solid);"></div>

      {#each jobs as job, i}
        <div class="relative pl-8 md:pl-20 pb-12 last:pb-0 group" use:reveal={{ delay: i * 120 }}>
          <!-- Timeline dot -->
          <div class="absolute left-0 md:left-8 top-1 w-px h-px">
            <div
              class="absolute -left-[5px] -top-[5px] w-[11px] h-[11px] rounded-full border-2 transition-colors"
              style="border-color: var(--accent); background-color: var(--dot-bg);"
            ></div>
          </div>

          <div
            class="rounded-lg p-6 transition-all group-hover:shadow-lg"
            style="background-color: var(--bg-elevated); border: 1px solid var(--border); box-shadow: 0 0 0 transparent;"
          >
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 class="text-xl font-bold" style="color: var(--text);">
                {$t(`exp.${job.key}.title`)}
              </h3>
              <span class="font-mono text-sm" style="color: var(--accent);">
                {$t(`exp.${job.key}.period`)}
              </span>
            </div>

            <div class="flex flex-col md:flex-row md:items-center gap-2 mb-4">
              <span class="font-semibold" style="color: var(--text-secondary);">
                {$t(`exp.${job.key}.company`)}
              </span>
              <span class="hidden md:inline" style="color: var(--text-faint);">·</span>
              <span class="text-sm" style="color: var(--text-muted);">
                {$t(`exp.${job.key}.location`)}
              </span>
            </div>

            <p class="leading-relaxed mb-4" style="color: var(--text-secondary);">
              {$t(`exp.${job.key}.description`)}
            </p>

            <div class="flex flex-wrap gap-2">
              {#each job.tech as tech}
                <span class="px-3 py-1 text-xs font-mono rounded-full" style="background-color: var(--accent-soft); color: var(--accent);">
                  {tech}
                </span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
