<script lang="ts">
  import { t } from './i18n';
  import { reveal } from './reveal';

  const projects = [
    {
      id: '1',
      tech: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'REST API'],
      icon: '🏢',
    },
    {
      id: '2',
      tech: ['React.js', 'TypeScript', 'Node.js', 'REST API'],
      icon: '🍺',
    },
    {
      id: '3',
      tech: ['React Native', 'Firebase', 'Push Notifications', 'Real-time Chat'],
      icon: '📱',
    },
    {
      id: '4',
      tech: ['React Native', 'CI/CD', 'TypeScript', 'Enterprise'],
      icon: '🚀',
    },
  ];
</script>

<section id="projects" class="py-24 relative">
  <div class="max-w-6xl mx-auto px-6">
    <div use:reveal>
      <h2 class="text-3xl md:text-4xl font-bold mb-2" style="color: var(--text);">
        <span class="font-mono text-lg mr-2" style="color: var(--accent);">03.</span>
        {$t('projects.title')}
      </h2>
      <div class="w-20 h-1 rounded mb-16" style="background-color: var(--accent); opacity: 0.5;"></div>
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      {#each projects as project, i}
        <div
          use:reveal={{ delay: i * 120 }}
          class="group rounded-lg p-6 transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
          style="background-color: var(--bg-elevated); border: 1px solid var(--border);"
        >
          <!-- Header -->
          <div class="flex items-start justify-between mb-4">
            <span class="text-3xl">{project.icon}</span>
            <span class="text-xs font-mono px-2 py-1 rounded" style="color: var(--text-muted); background-color: var(--bg-tag);">
              {$t(`project.${project.id}.role`)}
            </span>
          </div>

          <h3 class="text-xl font-bold mb-3 transition-colors" style="color: var(--text);">
            {$t(`project.${project.id}.title`)}
          </h3>

          <p class="text-sm leading-relaxed mb-6" style="color: var(--text-secondary);">
            {$t(`project.${project.id}.description`)}
          </p>

          <!-- Tech tags -->
          <div class="flex flex-wrap gap-2 mt-auto">
            {#each project.tech as tech}
              <span class="text-xs font-mono" style="color: var(--text-muted);">
                {tech}
              </span>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
