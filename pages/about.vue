<template>
  <div class="min-h-screen bg-slate-50 text-slate-900">
    <main class="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16">
      <section class="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-950 via-indigo-900 to-slate-900 px-8 py-16 text-white shadow-[0_32px_120px_-50px_rgba(79,70,229,0.7)] xl:px-14">
        <div aria-hidden="true" class="pointer-events-none absolute -right-20 top-8 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl" />
        <div class="relative grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-start">
          <div class="space-y-6">
            <span class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
              {{ about.label }}
            </span>
            <h1 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {{ about.title }}
            </h1>
            <p class="max-w-3xl text-base leading-7 text-slate-200">
              {{ about.narrative }}
            </p>
            <p class="max-w-3xl text-base leading-7 text-slate-200">
              {{ about.extended }}
            </p>
            <div class="flex flex-wrap items-center gap-3 text-sm text-white/70">
              <div class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
                <span class="h-2 w-2 rounded-full bg-emerald-300" />
                {{ about.location }}
              </div>
              <div class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
                <template v-for="(language, index) in about.languages" :key="language">
                  <span>{{ language }}</span>
                  <span
                    v-if="index < about.languages.length - 1"
                    class="h-1 w-1 rounded-full bg-white/60"
                  />
                </template>
              </div>
            </div>
          </div>

          <div class="space-y-5 rounded-3xl border border-white/15 bg-white/5 px-8 py-10 text-white shadow-lg shadow-black/30 backdrop-blur">
            <p class="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Currently</p>
            <p class="text-lg font-semibold">
              {{ currentRole.headline }}
            </p>
            <p class="text-sm leading-relaxed text-white/70">
              {{ currentRole.summary }}
            </p>
            <div class="grid gap-3 pt-6 text-sm">
              <div class="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p class="text-xs uppercase tracking-[0.3em] text-white/50">Focus</p>
                <p class="font-medium text-white/90">{{ currentRole.focus }}</p>
              </div>
              <div class="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                <p class="text-xs uppercase tracking-[0.3em] text-white/50">Availability</p>
                <p class="font-medium text-white/90">{{ currentRole.availability }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="grid gap-10 rounded-[24px] border border-white/70 bg-white/80 p-8 shadow-lg shadow-slate-900/5 backdrop-blur md:grid-cols-[1.1fr_1fr] md:items-start xl:px-12">
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold text-slate-900">My journey</h2>
          <p class="text-sm leading-relaxed text-slate-500">
            Past roles have spanned frontend engineering, interface design, and mentoring cross-functional teams. I love pairing with designers and backend engineers to create cohesive experiences.
          </p>
          <div class="space-y-6">
            <div
              v-for="experienceItem in experience"
              :key="experienceItem.company"
              class="flex flex-col gap-2 rounded-2xl border border-slate-100/80 bg-white p-5 shadow-sm"
            >
              <div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <p class="text-sm font-semibold text-slate-900">
                  {{ experienceItem.role }} · {{ experienceItem.company }}
                </p>
                <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                  {{ experienceItem.period }}
                </span>
              </div>
              <p class="text-sm text-slate-500">{{ experienceItem.summary }}</p>
              <div class="flex flex-wrap gap-2 text-xs text-slate-500">
                <span
                  v-for="tag in experienceItem.highlights"
                  :key="tag"
                  class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-medium"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="space-y-8">
          <div class="space-y-4 rounded-2xl border border-slate-100/80 bg-white p-6 shadow-sm">
            <h3 class="text-lg font-semibold text-slate-900">Tooling favourites</h3>
            <p class="text-sm text-slate-500">A stack tuned for rapid prototyping and production-grade delivery.</p>
            <div class="grid gap-2 text-sm text-slate-600">
              <div v-for="tool in toolset" :key="tool.group" class="flex items-start justify-between gap-4 rounded-xl border border-slate-100 px-4 py-3">
                <div>
                  <p class="font-medium text-slate-900">{{ tool.group }}</p>
                  <p class="text-xs uppercase tracking-[0.3em] text-slate-400">{{ tool.focus }}</p>
                </div>
                <p class="max-w-[220px] text-right">{{ tool.items }}</p>
              </div>
            </div>
          </div>

          <div class="space-y-4 rounded-2xl border border-slate-100/80 bg-white p-6 shadow-sm">
            <h3 class="text-lg font-semibold text-slate-900">Values I bring</h3>
            <div class="space-y-4">
              <div v-for="value in values" :key="value.title" class="rounded-xl border border-slate-100 px-4 py-4">
                <p class="text-sm font-semibold text-slate-900">{{ value.title }}</p>
                <p class="mt-1 text-sm text-slate-500">{{ value.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="grid gap-10 rounded-[24px] border border-white/70 bg-white/80 p-8 shadow-lg shadow-slate-900/5 backdrop-blur md:grid-cols-[1fr_1.1fr] xl:px-12">
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold text-slate-900">Beyond the screen</h2>
          <p class="text-sm leading-relaxed text-slate-500">
            Outside of work you’ll find me exploring typography, experimenting with motion design, or teaching mentees how to build accessible interfaces. These hobbies keep me curious and feed back into the creativity I bring to each project.
          </p>
         <div class="grid gap-3 text-sm text-slate-600">
           <div class="rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3">
              <p class="font-medium text-slate-900">Continuous learning</p>
              <p class="text-sm text-slate-500">Diving into courses, talks, and community resources to sharpen frontend craft and stay current.</p>
            </div>
            <div class="rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3">
              <p class="font-medium text-slate-900">Endurance & focus</p>
              <p class="text-sm text-slate-500">Training for 10 km runs and martial arts tournaments to stay disciplined, resilient, and energized.</p>
            </div>
          </div>
        </div>

          <div class="space-y-6 rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-8 py-10 text-white shadow-[0_32px_80px_-40px_rgba(79,70,229,0.6)]">
            <div class="space-y-4">
              <p class="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">{{ aboutCallout.eyebrow }}</p>
              <h3 class="text-2xl font-semibold leading-tight">{{ aboutCallout.title }}</h3>
              <p class="text-sm text-white/80">
                {{ aboutCallout.description }}
              </p>
            </div>
            <div class="flex flex-col gap-3 text-sm">
              <a
                v-if="contact.email"
                :href="`mailto:${contact.email}`"
                class="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-indigo-700 transition hover:bg-indigo-50"
              >
                {{ contact.email }}
              </a>
              <a
                v-if="contact.callUrl"
                :href="contact.callUrl"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                {{ contact.callLabel }}
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { profile } from '@/data/profile';

const { about, currentRole, experience, toolset, values, contact, aboutCallout } = profile;
</script>
