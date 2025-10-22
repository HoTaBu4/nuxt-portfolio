<template>
  <footer class="mt-24 border-t border-white/30 bg-white/80 backdrop-blur-lg">
    <div class="mx-auto max-w-6xl px-6 py-12">
      <div class="grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <div class="space-y-5">
          <div class="flex items-center gap-3">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-brandStart to-brandEnd text-lg font-semibold text-white shadow-lg shadow-indigo-500/15">
              VD
            </div>
            <div>
              <p class="text-base font-semibold text-slate-900">Volodymyr Dzibik</p>
              <p class="text-sm text-slate-500">Design-minded frontend developer crafting rich experiences.</p>
            </div>
          </div>
          <p class="max-w-xl text-sm leading-relaxed text-slate-500">
            I blend modern tooling with a product mindset to build delightful, performant web apps. Available for freelance projects, consulting, or full-time roles.
          </p>
          <div class="flex flex-wrap items-center gap-2">
            <span class="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Currently accepting new work
            </span>
          </div>
        </div>

        <div class="grid gap-8 text-sm text-slate-500 md:grid-cols-2">
          <div class="space-y-3">
            <p class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Navigate</p>
            <nuxt-link v-for="item in quickLinks" :key="item.label" :to="item.to" class="block rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900">
              {{ item.label }}
            </nuxt-link>
          </div>
          <div class="space-y-3">
            <p class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Connect</p>
            <a
              v-for="item in contactLinks"
              :key="item.label"
              :href="item.href"
              class="block rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900"
            >
              {{ item.label }}
            </a>
          </div>
        </div>
      </div>

      <div class="mt-12 flex flex-col gap-4 border-t border-white/60 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ currentYear }} Volodymyr Dzibik. All rights reserved.</p>
        <div class="flex items-center gap-4">
          <a href="#projects" class="transition hover:text-slate-600">Projects</a>
          <a href="#contact" class="transition hover:text-slate-600">Contact</a>
          <a href="https://github.com/volodimirdzibik" target="_blank" rel="noopener" class="transition hover:text-slate-600">
            GitHub
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
];

const contactLinks = [
  { label: 'Email', href: 'mailto:hello@volodimirdzibik.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/volodimirdzibik' },
  { label: 'GitHub', href: 'https://github.com/volodimirdzibik' },
];
</script>
