import { e as __nuxt_component_0, _ as _export_sfc, d as useRoute } from './server.mjs';
import { defineComponent, mergeProps, ref, computed, withCtx, createVNode, toDisplayString, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DfyBfxFH.mjs';
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
import 'vue-router';
import 'axios';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const navLinks = [
      { label: "Home", to: "/" },
      { label: "Projects", to: "/projects" },
      { label: "About me", to: "/about" }
    ];
    const route = useRoute();
    const isMenuOpen = ref(false);
    const initials = computed(() => {
      return profile.name.split(" ").map((segment) => segment?.[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
    });
    const profileName = computed(() => profile.name);
    const profileRole = computed(() => profile.role);
    const isActive = (target) => {
      if (target === "/") {
        return route.path === target;
      }
      return route.path.startsWith(target);
    };
    const closeMenu = () => {
      isMenuOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "sticky top-0 z-40 border-b border-white/40 bg-white/80 backdrop-blur-xl" }, _attrs))} data-v-d2a9d745><div class="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4" data-v-d2a9d745>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "flex items-center gap-3"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-brandStart to-brandEnd text-base font-semibold text-white shadow-lg shadow-indigo-500/10" data-v-d2a9d745${_scopeId}>${ssrInterpolate(initials.value)}</div><div data-v-d2a9d745${_scopeId}><span class="font-semibold leading-tight text-slate-900" data-v-d2a9d745${_scopeId}>${ssrInterpolate(profileName.value)}</span><p class="text-xs font-medium uppercase tracking-[0.16em] text-slate-500" data-v-d2a9d745${_scopeId}>${ssrInterpolate(profileRole.value)}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-brandStart to-brandEnd text-base font-semibold text-white shadow-lg shadow-indigo-500/10" }, toDisplayString(initials.value), 1),
              createVNode("div", null, [
                createVNode("span", { class: "font-semibold leading-tight text-slate-900" }, toDisplayString(profileName.value), 1),
                createVNode("p", { class: "text-xs font-medium uppercase tracking-[0.16em] text-slate-500" }, toDisplayString(profileRole.value), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex" data-v-d2a9d745><!--[-->`);
      ssrRenderList(navLinks, (item) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: item.to,
          to: item.to,
          class: ["transition-colors hover:text-slate-900", isActive(item.to) ? "text-indigo-600" : ""]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><div class="hidden items-center gap-3 md:flex" data-v-d2a9d745><a href="#contact" class="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-indigo-600 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50" data-v-d2a9d745> Let’s collaborate </a></div><button type="button" class="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/60 bg-white text-slate-600 shadow-md shadow-slate-200/50 transition hover:text-slate-900 md:hidden" aria-label="Toggle navigation menu" data-v-d2a9d745>`);
      if (!isMenuOpen.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-6 w-6" data-v-d2a9d745><path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" data-v-d2a9d745></path></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-6 w-6" data-v-d2a9d745><path d="M6 6l12 12M6 18L18 6" stroke-linecap="round" data-v-d2a9d745></path></svg>`);
      }
      _push(`</button></div>`);
      if (isMenuOpen.value) {
        _push(`<div class="border-t border-white/60 bg-white/95 px-6 py-4 shadow-xl shadow-slate-900/5 md:hidden" data-v-d2a9d745><div class="flex flex-col gap-4 text-sm font-medium text-slate-600" data-v-d2a9d745><!--[-->`);
        ssrRenderList(navLinks, (item) => {
          _push(ssrRenderComponent(_component_nuxt_link, {
            key: item.to,
            to: item.to,
            class: "rounded-lg bg-slate-50 px-4 py-3 shadow-sm shadow-slate-200/40 transition hover:bg-slate-100",
            onClick: closeMenu
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(item.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--><a href="#contact" class="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-brandStart to-brandEnd px-4 py-3 font-semibold text-white shadow-lg shadow-indigo-500/20 transition" data-v-d2a9d745> Let’s collaborate </a></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HeaderComponent = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["__scopeId", "data-v-d2a9d745"]]), { __name: "Header" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const quickLinks = [
      { label: "Home", to: "/" },
      { label: "Projects", to: "/projects" },
      { label: "About", to: "/about" }
    ];
    const contactLinks = [
      { label: "Email", href: "mailto:hello@volodimirdzibik.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/volodimirdzibik" },
      { label: "GitHub", href: "https://github.com/volodimirdzibik" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "mt-24 border-t border-white/30 bg-white/80 backdrop-blur-lg" }, _attrs))}><div class="mx-auto max-w-6xl px-6 py-12"><div class="grid gap-10 md:grid-cols-[1.5fr_1fr]"><div class="space-y-5"><div class="flex items-center gap-3"><div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-brandStart to-brandEnd text-lg font-semibold text-white shadow-lg shadow-indigo-500/15"> VD </div><div><p class="text-base font-semibold text-slate-900">Volodymyr Dzibik</p><p class="text-sm text-slate-500">Design-minded frontend developer crafting rich experiences.</p></div></div><p class="max-w-xl text-sm leading-relaxed text-slate-500"> I blend modern tooling with a product mindset to build delightful, performant web apps. Available for freelance projects, consulting, or full-time roles. </p><div class="flex flex-wrap items-center gap-2"><span class="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500"> Currently accepting new work </span></div></div><div class="grid gap-8 text-sm text-slate-500 md:grid-cols-2"><div class="space-y-3"><p class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Navigate</p><!--[-->`);
      ssrRenderList(quickLinks, (item) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: item.label,
          to: item.to,
          class: "block rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="space-y-3"><p class="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">Connect</p><!--[-->`);
      ssrRenderList(contactLinks, (item) => {
        _push(`<a${ssrRenderAttr("href", item.href)} class="block rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900">${ssrInterpolate(item.label)}</a>`);
      });
      _push(`<!--]--></div></div></div><div class="mt-12 flex flex-col gap-4 border-t border-white/60 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between"><p>© ${ssrInterpolate(unref(currentYear))} Volodymyr Dzibik. All rights reserved.</p><div class="flex items-center gap-4"><a href="#projects" class="transition hover:text-slate-600">Projects</a><a href="#contact" class="transition hover:text-slate-600">Contact</a><a href="https://github.com/volodimirdzibik" target="_blank" rel="noopener" class="transition hover:text-slate-600"> GitHub </a></div></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FooterComponent = Object.assign(_sfc_main$1, { __name: "Footer" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtPage = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col bg-white" }, _attrs))}>`);
      _push(ssrRenderComponent(HeaderComponent, null, null, _parent));
      _push(`<main class="flex-1">`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(FooterComponent, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-B18KE7mX.mjs.map
