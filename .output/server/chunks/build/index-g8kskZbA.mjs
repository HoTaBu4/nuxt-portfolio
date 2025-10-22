import { _ as __nuxt_component_0 } from './nuxt-link-DfyBfxFH.mjs';
import { defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, createBlock, toDisplayString, openBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { p as projects, P as ProjectCard } from './projects-BkhPItke.mjs';
import { p as profile } from './profile-t4pHoOB8.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'better-sqlite3';
import './server.mjs';
import 'vue-router';
import 'axios';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const hero = profile.hero;
    const capabilities = profile.capabilities;
    const capabilitiesIntro = profile.capabilitiesIntro;
    const selectedWork = profile.selectedWork;
    const processIntro = profile.processIntro;
    const processSteps = profile.featuredProcess;
    const contact = profile.contact;
    const featuredProjects = computed(() => projects.slice(0, 4));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-50 text-slate-900" }, _attrs))}><main class="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-20"><section class="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950 via-indigo-900 to-slate-900 px-8 py-16 text-slate-100 shadow-[0_30px_120px_-40px_rgba(79,70,229,0.65)] md:px-14 md:py-20"><div aria-hidden="true" class="pointer-events-none absolute -left-32 -top-40 h-[520px] w-[520px] rounded-full bg-indigo-500/30 blur-3xl"></div><div aria-hidden="true" class="pointer-events-none absolute -right-36 bottom-0 h-[420px] w-[420px] rounded-full bg-pink-500/30 blur-3xl"></div><div class="relative grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-center"><div class="space-y-8">`);
      if (unref(hero).availability) {
        _push(`<span class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/80">${ssrInterpolate(unref(hero).availability)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h1 class="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">${ssrInterpolate(unref(hero).title)}</h1><p class="max-w-xl text-lg leading-8 text-slate-200">${ssrInterpolate(unref(hero).description)}</p><div class="flex flex-wrap items-center gap-4">`);
      if (unref(hero).primaryCta?.to) {
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: unref(hero).primaryCta.to,
          class: "inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/40 transition hover:-translate-y-0.5 hover:bg-white/20"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(hero).primaryCta.label)} <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 5l7 7-7 7"${_scopeId}></path></svg>`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(hero).primaryCta.label) + " ", 1),
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  class: "h-4 w-4",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  "stroke-width": "1.6"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M5 12h14M13 5l7 7-7 7"
                  })
                ]))
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(hero).secondaryCta?.href) {
        _push(`<a${ssrRenderAttr("href", unref(hero).secondaryCta.href)} class="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white">${ssrInterpolate(unref(hero).secondaryCta.label)} <span aria-hidden="true">→</span></a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20 backdrop-blur"><div class="space-y-6"><div class="flex items-center justify-between">`);
      if (unref(hero).snapshot?.eyebrow) {
        _push(`<p class="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">${ssrInterpolate(unref(hero).snapshot.eyebrow)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(hero).snapshot?.status) {
        _push(`<span class="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-200">${ssrInterpolate(unref(hero).snapshot.status)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="grid gap-4"><!--[-->`);
      ssrRenderList(unref(hero).snapshot?.metrics ?? [], (metric) => {
        _push(`<div class="rounded-2xl border border-white/10 bg-white/5 p-5"><p class="text-3xl font-semibold text-white">${ssrInterpolate(metric.value)}</p><p class="text-xs uppercase tracking-[0.28em] text-white/60">${ssrInterpolate(metric.label)}</p></div>`);
      });
      _push(`<!--]--></div></div><div class="pointer-events-none absolute -right-16 bottom-6 h-44 w-44 rounded-full bg-gradient-to-br from-brandStart/40 to-brandEnd/20 blur-3xl"></div></div></div></section><section class="space-y-10"><div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><h2 class="text-3xl font-semibold text-slate-900 sm:text-4xl">${ssrInterpolate(unref(capabilitiesIntro).heading)}</h2><p class="mt-4 max-w-2xl text-base leading-7 text-slate-500">${ssrInterpolate(unref(capabilitiesIntro).description)}</p></div></div><div class="grid gap-6 md:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(capabilities), (capability) => {
        _push(`<div class="group relative overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-br from-white via-slate-50 to-indigo-50/20 p-6 shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl"><div aria-hidden="true" class="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-white/40 to-indigo-100/40 opacity-0 transition group-hover:opacity-100"></div><div class="relative space-y-4"><div class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/15 to-pink-500/15 text-xl text-indigo-600">${ssrInterpolate(capability.icon)}</div><h3 class="text-lg font-semibold text-slate-900">${ssrInterpolate(capability.title)}</h3><p class="text-sm leading-relaxed text-slate-500">${ssrInterpolate(capability.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></section><section id="projects" class="space-y-10"><div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><h2 class="text-3xl font-semibold text-slate-900 sm:text-4xl">${ssrInterpolate(unref(selectedWork).heading)}</h2><p class="mt-3 max-w-xl text-base text-slate-500">${ssrInterpolate(unref(selectedWork).description)}</p></div>`);
      if (unref(hero).primaryCta?.to) {
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: unref(hero).primaryCta.to,
          class: "inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 transition hover:border-indigo-300 hover:bg-indigo-100"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(selectedWork).ctaLabel)} <span aria-hidden="true"${_scopeId}>→</span>`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(selectedWork).ctaLabel) + " ", 1),
                createVNode("span", { "aria-hidden": "true" }, "→")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="grid gap-6 md:grid-cols-2"><!--[-->`);
      ssrRenderList(featuredProjects.value, (project) => {
        _push(ssrRenderComponent(ProjectCard, {
          key: project.link || project.name,
          project
        }, null, _parent));
      });
      _push(`<!--]--></div></section><section class="space-y-10"><div class="flex flex-col gap-3"><h2 class="text-3xl font-semibold text-slate-900 sm:text-4xl">${ssrInterpolate(unref(processIntro).heading)}</h2><p class="max-w-3xl text-base text-slate-500">${ssrInterpolate(unref(processIntro).description)}</p></div><div class="grid gap-6 md:grid-cols-2"><!--[-->`);
      ssrRenderList(unref(processSteps), (step, index) => {
        _push(`<div class="flex h-full flex-col gap-4 rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white via-slate-50 to-indigo-50/20 p-6 shadow-lg shadow-slate-900/5 transition hover:-translate-y-1 hover:shadow-xl"><div class="flex items-center gap-3"><span class="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500/15 to-pink-500/20 text-sm font-semibold text-indigo-600">${ssrInterpolate((index + 1).toString().padStart(2, "0"))}</span><h3 class="text-lg font-semibold text-slate-900">${ssrInterpolate(step.title)}</h3></div><p class="text-sm leading-relaxed text-slate-500">${ssrInterpolate(step.description)}</p></div>`);
      });
      _push(`<!--]--></div></section><section id="contact" class="relative overflow-hidden rounded-[28px] border border-indigo-100 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-8 py-16 text-white shadow-[0_40px_90px_-50px_rgba(79,70,229,0.6)] sm:px-14"><div aria-hidden="true" class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.25),transparent_55%)]"></div><div class="relative grid gap-10 md:grid-cols-[1.2fr_1fr] md:items-center"><div class="space-y-6"><span class="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.4em] text-white/80">${ssrInterpolate(unref(contact).eyebrow)}</span><h2 class="text-3xl font-semibold sm:text-4xl">${ssrInterpolate(unref(contact).title)}</h2><p class="text-sm leading-relaxed text-white/80">${ssrInterpolate(unref(contact).description)}</p><div class="flex flex-wrap gap-4">`);
      if (unref(contact).email) {
        _push(`<a${ssrRenderAttr("href", `mailto:${unref(contact).email}`)} class="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50">${ssrInterpolate(unref(contact).email)}</a>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(contact).callUrl) {
        _push(`<a${ssrRenderAttr("href", unref(contact).callUrl)} target="_blank" rel="noopener" class="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">${ssrInterpolate(unref(contact).callLabel)}</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><form class="space-y-4 rounded-3xl border border-white/30 bg-white/10 p-6 backdrop-blur"><div class="grid gap-4 md:grid-cols-2"><label class="flex flex-col text-sm font-medium text-white/80"> Name <input type="text" name="name" autocomplete="name" placeholder="Your name" class="mt-2 w-full rounded-xl border border-white/40 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/60"></label><label class="flex flex-col text-sm font-medium text-white/80"> Email <input type="email" name="email" autocomplete="email" placeholder="you@example.com" class="mt-2 w-full rounded-xl border border-white/40 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/60"></label></div><label class="flex flex-col text-sm font-medium text-white/80"> Project details <textarea name="project" rows="4" placeholder="Tell me about the challenge, timeline, and goals." class="mt-2 w-full rounded-xl border border-white/40 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/60"></textarea></label><button type="submit" class="w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"> Share project details </button></form></div></section></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-g8kskZbA.mjs.map
