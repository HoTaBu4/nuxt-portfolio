import { defineComponent, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { p as projects, a as projectsHero, b as projectFilters, P as ProjectCard } from './projects-BkhPItke.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props) {
    const hero = projectsHero;
    const filtersCopy = projectFilters;
    const allProjects = projects;
    const search = ref("");
    const selectedTags = ref([]);
    const tagOptions = computed(() => {
      const unique = /* @__PURE__ */ new Set();
      allProjects.forEach((project) => {
        project.tags.forEach((tag) => unique.add(tag));
      });
      return Array.from(unique).sort();
    });
    const hasActiveFilters = computed(
      () => selectedTags.value.length > 0 || Boolean(search.value.trim())
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
        const haystack = [project.name, project.description, ...project.tags].join(" ").toLowerCase();
        return haystack.includes(term);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-50 text-slate-900" }, _attrs))}><main class="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16"><section class="relative overflow-hidden rounded-[28px] border border-white/40 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 px-10 py-16 text-white shadow-[0_32px_80px_-50px_rgba(15,23,42,0.8)] md:px-14"><div aria-hidden="true" class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_55%)]"></div><div class="relative grid gap-12 md:grid-cols-[1.6fr_1fr] md:items-center"><div class="space-y-6"><span class="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.4em] text-white/80">${ssrInterpolate(unref(hero).label)}</span><h1 class="text-3xl font-semibold sm:text-4xl md:text-5xl">${ssrInterpolate(unref(hero).title)}</h1><p class="max-w-2xl text-sm leading-relaxed text-white/80">${ssrInterpolate(unref(hero).description)}</p><div class="flex flex-wrap items-center gap-4 text-sm text-white/80">`);
      if (unref(hero).statusNote) {
        _push(`<div class="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5"><span class="h-2 w-2 rounded-full bg-emerald-400"></span> ${ssrInterpolate(unref(hero).statusNote)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(hero).jumpLinkLabel) {
        _push(`<a href="#filters" class="inline-flex items-center gap-2 text-white transition hover:text-white/80">${ssrInterpolate(unref(hero).jumpLinkLabel)} <span aria-hidden="true">↓</span></a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (unref(hero).highlights?.length) {
        _push(`<div class="grid gap-4 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur"><!--[-->`);
        ssrRenderList(unref(hero).highlights, (highlight) => {
          _push(`<div class="space-y-1"><p class="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">${ssrInterpolate(highlight.label)}</p><p class="text-sm font-medium">${ssrInterpolate(highlight.value)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section><section id="filters" class="space-y-6 rounded-[24px] border border-slate-200/70 bg-gradient-to-br from-white via-slate-50 to-indigo-50/20 p-6 shadow-lg shadow-slate-900/5 backdrop-blur"><div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"><div class="max-w-xl space-y-1"><h2 class="text-lg font-semibold text-slate-900">${ssrInterpolate(unref(filtersCopy).heading)}</h2><p class="text-sm text-slate-500">${ssrInterpolate(unref(filtersCopy).description)}</p></div><div class="flex w-full items-center gap-3 lg:w-auto"><div class="relative flex-1"><input${ssrRenderAttr("value", search.value)} type="search"${ssrRenderAttr("placeholder", unref(filtersCopy).searchPlaceholder)} class="w-full rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm text-slate-600 placeholder:text-slate-400 focus:border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-200"><svg xmlns="http://www.w3.org/2000/svg" class="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 5.65 5.65a7.5 7.5 0 0 0 10.99 10.99Z"></path></svg></div>`);
      if (hasActiveFilters.value) {
        _push(`<button type="button" class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-500 transition hover:border-indigo-200 hover:text-indigo-600"> Clear filters </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="space-y-3"><p class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">${ssrInterpolate(unref(filtersCopy).tagsLabel)}</p><div class="flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(tagOptions.value, (tag) => {
        _push(`<button type="button" class="${ssrRenderClass([selectedTags.value.includes(tag) ? "border-indigo-400 bg-indigo-50 text-indigo-600 shadow-sm" : "border-slate-200 bg-white/80 text-slate-600 hover:border-slate-300 hover:text-slate-900", "rounded-full border px-3 py-1.5 text-xs font-semibold transition"])}">${ssrInterpolate(tag)}</button>`);
      });
      _push(`<!--]--></div></div></section><section class="space-y-8"><div class="grid gap-6 md:grid-cols-2"><!--[-->`);
      ssrRenderList(filteredProjects.value, (project) => {
        _push(ssrRenderComponent(ProjectCard, {
          key: project.link || project.name,
          project
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
      if (filteredProjects.value.length === 0) {
        _push(`<p class="text-center text-sm text-slate-500"> No projects matched your filters. Try a different keyword or focus area. </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</section></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=projects-DJ9vwBXG.mjs.map
