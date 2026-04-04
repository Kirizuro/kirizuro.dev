<script lang="ts">
  import { t } from './i18n';
  import { reveal } from './reveal';

  const categories = [
    {
      key: 'frontend',
      icon: '{}',
      skills: [
        { name: 'TypeScript', level: 95 },
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'Vue.js', level: 80 },
        { name: 'Svelte', level: 70 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      key: 'backend',
      icon: '>_',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'NestJS', level: 85 },
        { name: 'Express', level: 90 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Firebase', level: 85 },
        { name: 'REST APIs', level: 95 },
        { name: 'SQL', level: 80 },
      ],
    },
    {
      key: 'mobile',
      icon: '📱',
      skills: [
        { name: 'React Native', level: 90 },
        { name: 'Push Notifications', level: 85 },
        { name: 'App Store Deploy', level: 80 },
        { name: 'Real-time Chat', level: 85 },
      ],
    },
    {
      key: 'tools',
      icon: '⚙️',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'CI/CD', level: 85 },
        { name: 'Docker', level: 75 },
        { name: 'Linux', level: 80 },
        { name: 'Agile/Scrum', level: 90 },
        { name: 'SEO', level: 70 },
      ],
    },
  ];
</script>

<section id="skills" class="py-24 relative">
  <div class="max-w-6xl mx-auto px-6">
    <div use:reveal>
      <h2 class="text-3xl md:text-4xl font-bold mb-2" style="color: var(--text);">
        <span class="font-mono text-lg mr-2" style="color: var(--accent);">04.</span>
        {$t('skills.title')}
      </h2>
      <div class="w-20 h-1 rounded mb-16" style="background-color: var(--accent); opacity: 0.5;"></div>
    </div>

    <div class="grid md:grid-cols-2 gap-8">
      {#each categories as category, i}
        <div use:reveal={{ delay: i * 120 }} class="rounded-lg p-6" style="background-color: var(--bg-elevated); border: 1px solid var(--border);">
          <div class="flex items-center gap-3 mb-6">
            <span class="font-mono text-lg" style="color: var(--accent);">{category.icon}</span>
            <h3 class="text-lg font-bold" style="color: var(--text);">
              {$t(`skills.${category.key}`)}
            </h3>
          </div>

          <div class="space-y-4">
            {#each category.skills as skill}
              <div>
                <div class="flex justify-between mb-1">
                  <span class="text-sm font-mono" style="color: var(--text-secondary);">{skill.name}</span>
                  <span class="text-xs font-mono" style="color: var(--text-faint);">{skill.level}%</span>
                </div>
                <div class="w-full rounded-full h-1.5" style="background-color: var(--progress-bg);">
                  <div
                    class="h-1.5 rounded-full transition-all duration-1000"
                    style="width: {skill.level}%; background-color: var(--accent);"
                  ></div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
