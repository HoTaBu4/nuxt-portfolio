<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <main class="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16">
      <section class="relative overflow-hidden rounded-[28px] border border-white/40 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 px-10 py-16 text-white shadow-[0_32px_80px_-50px_rgba(15,23,42,0.8)] md:px-14">
        <div aria-hidden="true" class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_55%)]" />
        <div class="relative grid gap-12 md:grid-cols-[1.6fr_1fr] md:items-center">
          <div class="space-y-6">
            <span class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.4em] text-white/80">
              {{ hero.label }}
            </span>
            <h1 class="text-3xl font-semibold sm:text-4xl md:text-5xl">
              {{ hero.title }}
            </h1>
            <p class="max-w-2xl text-sm leading-relaxed text-white/80">
              {{ hero.description }}
            </p>
            <div class="flex flex-wrap items-center gap-4 text-sm text-white/80">
              <div v-if="hero.statusNote" class="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5">
                <span class="h-2 w-2 rounded-full bg-emerald-400" />
                {{ hero.statusNote }}
              </div>
              <a v-if="hero.jumpLinkLabel" href="#filters" class="inline-flex items-center gap-2 text-white transition hover:text-white/80">
                {{ hero.jumpLinkLabel }}
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <div
            v-if="hero.highlights?.length"
            class="grid gap-4 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur"
          >
            <div
              v-for="highlight in hero.highlights"
              :key="highlight.label"
              class="space-y-1"
            >
              <p class="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">{{ highlight.label }}</p>
              <p class="text-sm font-medium">{{ highlight.value }}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="filters" class="space-y-6 rounded-[24px] border border-slate-200/70 bg-gradient-to-br from-white via-slate-50 to-indigo-50/20 p-6 shadow-lg shadow-slate-900/5 backdrop-blur">
        <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div class="max-w-xl space-y-1">
            <h2 class="text-lg font-semibold text-slate-900">{{ filtersCopy.heading }}</h2>
            <p class="text-sm text-slate-500">{{ filtersCopy.description }}</p>
          </div>
          <div class="flex w-full items-center gap-3 lg:w-auto">
            <div class="relative flex-1">
              <input
                v-model="search"
                type="search"
                :placeholder="filtersCopy.searchPlaceholder"
              class="w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm text-slate-600 placeholder:text-slate-400 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
              <svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 5.65 5.65a7.5 7.5 0 0 0 10.99 10.99Z" />
              </svg>
            </div>
            <button
              v-if="hasActiveFilters"
              type="button"
              class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500 transition hover:border-indigo-200 hover:text-indigo-600"
              @click="clearFilters"
            >
              Clear filters
            </button>
          </div>
        </div>

        <div class="space-y-3">
          <p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{{ filtersCopy.tagsLabel }}</p>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="tag in tagOptions"
              :key="tag"
              type="button"
              class="rounded-full border px-3 py-1.5 text-xs font-semibold transition"
              :class="selectedTags.includes(tag) ? 'border-indigo-400 bg-indigo-50 text-indigo-600 shadow-sm' : 'border-slate-200 bg-white/80 text-slate-600 hover:border-slate-300 hover:text-slate-900'"
              @click="toggleTag(tag)"
            >
              {{ tag }}
            </button>
          </div>
        </div>
      </section>

      <section class="space-y-8">
        <div class="grid gap-6 md:grid-cols-2">
          <project-card
            v-for="project in filteredProjects"
            :key="project.link || project.name"
            :project="project"
          />
        </div>
        <p v-if="filteredProjects.length === 0" class="text-center text-sm text-slate-500">
          No projects matched your filters. Try a different keyword or focus area.
        </p>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';

import { projectFilters, projects, projectsHero } from '@/data/projects';

const hero = projectsHero;
const filtersCopy = projectFilters;
const allProjects = projects;

const search = ref('');
const selectedTags = ref<string[]>([]);

const tagOptions = computed(() => {
  const unique = new Set<string>();
  allProjects.forEach((project) => {
    project.tags.forEach((tag) => unique.add(tag));
  });
  return Array.from(unique).sort();
});

const hasActiveFilters = computed(
  () => selectedTags.value.length > 0 || Boolean(search.value.trim()),
);

const filteredProjects = computed(() => {
  const term = search.value.trim().toLowerCase();
  const activeTags = selectedTags.value;

  return allProjects.filter((project) => {
    const matchesTags = activeTags.length === 0 || activeTags.every((tag) => project.tags.includes(tag));
    if (!matchesTags) {
      return false;
    }

    if (!term) {
      return true;
    }

    const haystack = [project.name, project.description, ...project.tags].join(' ').toLowerCase();
    return haystack.includes(term);
  });
});

const toggleTag = (tag: string) => {
  if (selectedTags.value.includes(tag)) {
    selectedTags.value = selectedTags.value.filter((item) => item !== tag);
    return;
  }

  selectedTags.value = [...selectedTags.value, tag];
};

const clearFilters = () => {
  search.value = '';
  selectedTags.value = [];
};
</script>
