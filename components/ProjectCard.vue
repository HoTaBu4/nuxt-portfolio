<template>
  <article
    :class="[
      'relative overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-6 shadow-lg shadow-slate-900/5 ring-1 ring-transparent transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-xl',
      $attrs.class,
    ]"
  >
    <div aria-hidden="true" class="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-brandStart/20 to-brandEnd/10 blur-3xl" />

    <div class="relative flex flex-col gap-5">
      <div class="flex items-start gap-4">
        <div class="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brandStart to-brandEnd text-lg font-semibold text-white shadow-md shadow-indigo-500/20">
          {{ initials }}
        </div>
        <div>
          <p class="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">Featured build</p>
          <h3 class="text-lg font-semibold text-slate-900">{{ project.name }}</h3>
        </div>
      </div>

      <p v-if="project.description" class="text-sm leading-relaxed text-slate-500">
        {{ project.description }}
      </p>

      <ul v-if="resolvedTags.length" class="flex flex-wrap gap-2 text-xs font-medium text-slate-500">
        <li
          v-for="tag in resolvedTags"
          :key="tag"
          class="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1"
        >
          {{ tag }}
        </li>
      </ul>

      <div class="flex items-center gap-3 pt-1">
        <component
          :is="linkComponent"
          :to="isInternalLink ? project.link : undefined"
          :href="!isInternalLink ? effectiveLink : undefined"
          class="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          :target="!isInternalLink ? '_blank' : undefined"
          :rel="!isInternalLink ? 'noopener' : undefined"
        >
          View project
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </component>

        <a
          v-if="project.link"
          :href="effectiveLink"
          class="text-sm font-medium text-indigo-600 transition hover:text-indigo-500"
          :target="!isInternalLink ? '_blank' : undefined"
          :rel="!isInternalLink ? 'noopener' : undefined"
        >
          Learn more
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  project: {
    name: string;
    description?: string;
    link?: string;
    tags?: string[];
  };
}>();

const initials = computed(() => {
  if (!props.project?.name) return 'P';
  return props.project.name
    .split(' ')
    .map((segment) => segment[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
});

const resolvedTags = computed(() => {
  return Array.isArray(props.project?.tags) ? props.project.tags : [];
});

const effectiveLink = computed(() => props.project?.link ?? '#');
const isInternalLink = computed(() => !!props.project?.link && props.project.link.startsWith('/'));
const linkComponent = computed(() => (isInternalLink.value ? 'nuxt-link' : 'a'));
</script>
