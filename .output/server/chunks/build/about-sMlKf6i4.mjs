import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { p as profile } from './profile-t4pHoOB8.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const { about, currentRole, experience, toolset, values, contact, aboutCallout } = profile;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-50 text-slate-900" }, _attrs))}><main class="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16"><section class="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-950 via-indigo-900 to-slate-900 px-8 py-16 text-white shadow-[0_32px_120px_-50px_rgba(79,70,229,0.7)] xl:px-14"><div aria-hidden="true" class="pointer-events-none absolute -right-20 top-8 h-64 w-64 rounded-full bg-indigo-500/30 blur-3xl"></div><div class="relative grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-start"><div class="space-y-6"><span class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.4em] text-white/70">${ssrInterpolate(unref(about).label)}</span><h1 class="text-3xl font-semibold tracking-tight text-white sm:text-4xl">${ssrInterpolate(unref(about).title)}</h1><p class="max-w-3xl text-base leading-7 text-slate-200">${ssrInterpolate(unref(about).narrative)}</p><p class="max-w-3xl text-base leading-7 text-slate-200">${ssrInterpolate(unref(about).extended)}</p><div class="flex flex-wrap items-center gap-3 text-sm text-white/70"><div class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5"><span class="h-2 w-2 rounded-full bg-emerald-300"></span> ${ssrInterpolate(unref(about).location)}</div><div class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5"><!--[-->`);
      ssrRenderList(unref(about).languages, (language, index) => {
        _push(`<!--[--><span>${ssrInterpolate(language)}</span>`);
        if (index < unref(about).languages.length - 1) {
          _push(`<span class="h-1 w-1 rounded-full bg-white/60"></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div></div><div class="space-y-5 rounded-3xl border border-white/15 bg-white/5 px-8 py-10 text-white shadow-lg shadow-black/30 backdrop-blur"><p class="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Currently</p><p class="text-lg font-semibold">${ssrInterpolate(unref(currentRole).headline)}</p><p class="text-sm leading-relaxed text-white/70">${ssrInterpolate(unref(currentRole).summary)}</p><div class="grid gap-3 pt-6 text-sm"><div class="rounded-xl border border-white/10 bg-white/5 px-4 py-3"><p class="text-xs uppercase tracking-[0.3em] text-white/50">Focus</p><p class="font-medium text-white/90">${ssrInterpolate(unref(currentRole).focus)}</p></div><div class="rounded-xl border border-white/10 bg-white/5 px-4 py-3"><p class="text-xs uppercase tracking-[0.3em] text-white/50">Availability</p><p class="font-medium text-white/90">${ssrInterpolate(unref(currentRole).availability)}</p></div></div></div></div></section><section class="grid gap-10 rounded-[24px] border border-white/70 bg-white/80 p-8 shadow-lg shadow-slate-900/5 backdrop-blur md:grid-cols-[1.1fr_1fr] md:items-start xl:px-12"><div class="space-y-4"><h2 class="text-2xl font-semibold text-slate-900">My journey</h2><p class="text-sm leading-relaxed text-slate-500"> Past roles have spanned frontend engineering, interface design, and mentoring cross-functional teams. I love pairing with designers and backend engineers to create cohesive experiences. </p><div class="space-y-6"><!--[-->`);
      ssrRenderList(unref(experience), (experienceItem) => {
        _push(`<div class="flex flex-col gap-2 rounded-2xl border border-slate-100/80 bg-white p-5 shadow-sm"><div class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"><p class="text-sm font-semibold text-slate-900">${ssrInterpolate(experienceItem.role)} · ${ssrInterpolate(experienceItem.company)}</p><span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">${ssrInterpolate(experienceItem.period)}</span></div><p class="text-sm text-slate-500">${ssrInterpolate(experienceItem.summary)}</p><div class="flex flex-wrap gap-2 text-xs text-slate-500"><!--[-->`);
        ssrRenderList(experienceItem.highlights, (tag) => {
          _push(`<span class="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-medium">${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div><div class="space-y-8"><div class="space-y-4 rounded-2xl border border-slate-100/80 bg-white p-6 shadow-sm"><h3 class="text-lg font-semibold text-slate-900">Tooling favourites</h3><p class="text-sm text-slate-500">A stack tuned for rapid prototyping and production-grade delivery.</p><div class="grid gap-2 text-sm text-slate-600"><!--[-->`);
      ssrRenderList(unref(toolset), (tool) => {
        _push(`<div class="flex items-start justify-between gap-4 rounded-xl border border-slate-100 px-4 py-3"><div><p class="font-medium text-slate-900">${ssrInterpolate(tool.group)}</p><p class="text-xs uppercase tracking-[0.3em] text-slate-400">${ssrInterpolate(tool.focus)}</p></div><p class="max-w-[220px] text-right">${ssrInterpolate(tool.items)}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="space-y-4 rounded-2xl border border-slate-100/80 bg-white p-6 shadow-sm"><h3 class="text-lg font-semibold text-slate-900">Values I bring</h3><div class="space-y-4"><!--[-->`);
      ssrRenderList(unref(values), (value) => {
        _push(`<div class="rounded-xl border border-slate-100 px-4 py-4"><p class="text-sm font-semibold text-slate-900">${ssrInterpolate(value.title)}</p><p class="mt-1 text-sm text-slate-500">${ssrInterpolate(value.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></div></section><section class="grid gap-10 rounded-[24px] border border-white/70 bg-white/80 p-8 shadow-lg shadow-slate-900/5 backdrop-blur md:grid-cols-[1fr_1.1fr] xl:px-12"><div class="space-y-4"><h2 class="text-2xl font-semibold text-slate-900">Beyond the screen</h2><p class="text-sm leading-relaxed text-slate-500"> Outside of work you’ll find me exploring typography, experimenting with motion design, or teaching mentees how to build accessible interfaces. These hobbies keep me curious and feed back into the creativity I bring to each project. </p><div class="grid gap-3 text-sm text-slate-600"><div class="rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3"><p class="font-medium text-slate-900">Mentoring &amp; workshops</p><p class="text-sm text-slate-500">Helping early-career developers level up with Vue, Nuxt, and component-driven UI patterns.</p></div><div class="rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3"><p class="font-medium text-slate-900">Visual storytelling</p><p class="text-sm text-slate-500">Exploring 3D, animation, and photography to keep my perspective fresh.</p></div></div></div><div class="space-y-6 rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-8 py-10 text-white shadow-[0_32px_80px_-40px_rgba(79,70,229,0.6)]"><div class="space-y-4"><p class="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">${ssrInterpolate(unref(aboutCallout).eyebrow)}</p><h3 class="text-2xl font-semibold leading-tight">${ssrInterpolate(unref(aboutCallout).title)}</h3><p class="text-sm text-white/80">${ssrInterpolate(unref(aboutCallout).description)}</p></div><div class="flex flex-col gap-3 text-sm">`);
      if (unref(contact).email) {
        _push(`<a${ssrRenderAttr("href", `mailto:${unref(contact).email}`)} class="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-indigo-700 transition hover:bg-indigo-50">${ssrInterpolate(unref(contact).email)}</a>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(contact).callUrl) {
        _push(`<a${ssrRenderAttr("href", unref(contact).callUrl)} target="_blank" rel="noopener" class="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-6 py-3 font-semibold text-white transition hover:bg-white/10">${ssrInterpolate(unref(contact).callLabel)}</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></section></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about-sMlKf6i4.mjs.map
