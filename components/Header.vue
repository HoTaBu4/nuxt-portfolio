<template>
  <header class="sticky top-0 z-40 border-b border-white/40 bg-white/80 backdrop-blur-xl">
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
      <nuxt-link to="/" class="flex items-center gap-3">
        <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-brandStart to-brandEnd text-base font-semibold text-white shadow-lg shadow-indigo-500/10">
          {{ initials }}
        </div>
        <div>
          <span class="font-semibold leading-tight text-slate-900">{{ profileName }}</span>
          <p class="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">{{ profileRole }}</p>
        </div>
      </nuxt-link>

      <nav class="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
        <nuxt-link
          v-for="item in navLinks"
          :key="item.to"
          :to="item.to"
          class="transition-colors hover:text-slate-900"
          :class="isActive(item.to) ? 'text-indigo-600' : ''"
        >
          {{ item.label }}
        </nuxt-link>
      </nav>

      <div class="hidden items-center gap-3 md:flex">
        <a
          href="#contact"
          class="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-indigo-600 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50"
        >
          Let’s collaborate
        </a>
      </div>

      <button
        type="button"
        class="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/60 bg-white text-slate-600 shadow-md shadow-slate-200/50 transition hover:text-slate-900 md:hidden"
        @click="isMenuOpen = !isMenuOpen"
        aria-label="Toggle navigation menu"
      >
        <svg
          v-if="!isMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          class="h-6 w-6"
        >
          <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          class="h-6 w-6"
        >
          <path d="M6 6l12 12M6 18L18 6" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <transition name="fade">
      <div
        v-if="isMenuOpen"
        class="border-t border-white/60 bg-white/95 px-6 py-4 shadow-xl shadow-slate-900/5 md:hidden"
      >
        <div class="flex flex-col gap-4 text-sm font-medium text-slate-600">
          <nuxt-link
            v-for="item in navLinks"
            :key="item.to"
            :to="item.to"
            class="rounded-lg bg-slate-50 px-4 py-3 shadow-sm shadow-slate-200/40 transition hover:bg-slate-100"
            @click="closeMenu"
          >
            {{ item.label }}
          </nuxt-link>
          <a
            href="#contact"
            class="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brandStart to-brandEnd px-4 py-3 font-semibold text-white shadow-lg shadow-indigo-500/20 transition"
            @click="closeMenu"
          >
            Let’s collaborate
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from '#imports';

import { profile } from '@/data/profile';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About me', to: '/about' },
] as const;

const route = useRoute();
const isMenuOpen = ref(false);

const initials = computed(() => {
  return profile.name
    .split(' ')
    .map((segment) => segment?.[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
});

const profileName = computed(() => profile.name);
const profileRole = computed(() => profile.role);

const isActive = (target: string) => {
  if (target === '/') {
    return route.path === target;
  }

  return route.path.startsWith(target);
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
