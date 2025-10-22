import { defineComponent, computed, mergeProps, createVNode, resolveDynamicComponent, withCtx, createTextVNode, createBlock, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderVNode, ssrRenderAttr } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProjectCard",
  __ssrInlineRender: true,
  props: {
    project: {}
  },
  setup(__props) {
    const props = __props;
    const initials = computed(() => {
      if (!props.project?.name) return "P";
      return props.project.name.split(" ").map((segment) => segment[0]).filter(Boolean).slice(0, 2).join("").toUpperCase();
    });
    const resolvedTags = computed(() => {
      return Array.isArray(props.project?.tags) ? props.project.tags : [];
    });
    const effectiveLink = computed(() => props.project?.link ?? "#");
    const isInternalLink = computed(() => !!props.project?.link && props.project.link.startsWith("/"));
    const linkComponent = computed(() => isInternalLink.value ? "nuxt-link" : "a");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: [
          "relative overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-6 shadow-lg shadow-slate-900/5 ring-1 ring-transparent transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-xl",
          _ctx.$attrs.class
        ]
      }, _attrs))}><div aria-hidden="true" class="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-brandStart/20 to-brandEnd/10 blur-3xl"></div><div class="relative flex flex-col gap-5"><div class="flex items-start gap-4"><div class="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-brandStart to-brandEnd text-lg font-semibold text-white shadow-md shadow-indigo-500/20">${ssrInterpolate(initials.value)}</div><div><p class="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">Featured build</p><h3 class="text-lg font-semibold text-slate-900">${ssrInterpolate(__props.project.name)}</h3></div></div>`);
      if (__props.project.description) {
        _push(`<p class="text-sm leading-relaxed text-slate-500">${ssrInterpolate(__props.project.description)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (resolvedTags.value.length) {
        _push(`<ul class="flex flex-wrap gap-2 text-xs font-medium text-slate-500"><!--[-->`);
        ssrRenderList(resolvedTags.value, (tag) => {
          _push(`<li class="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1">${ssrInterpolate(tag)}</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex items-center gap-3 pt-1">`);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(linkComponent.value), {
        to: isInternalLink.value ? __props.project.link : void 0,
        href: !isInternalLink.value ? effectiveLink.value : void 0,
        class: "inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800",
        target: !isInternalLink.value ? "_blank" : void 0,
        rel: !isInternalLink.value ? "noopener" : void 0
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View project <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 5l7 7-7 7"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" View project "),
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "h-4 w-4",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                "stroke-width": "1.5"
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
      }), _parent);
      if (__props.project.link) {
        _push(`<a${ssrRenderAttr("href", effectiveLink.value)} class="text-sm font-medium text-indigo-600 transition hover:text-indigo-500"${ssrRenderAttr("target", !isInternalLink.value ? "_blank" : void 0)}${ssrRenderAttr("rel", !isInternalLink.value ? "noopener" : void 0)}> Learn more </a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ProjectCard = Object.assign(_sfc_main, { __name: "ProjectCard" });
const projectsHero = {
  label: "Projects",
  title: "Showcase the work you are most proud of.",
  description: "Introduce your collection of case studies so visitors understand what they can explore below.",
  statusNote: "Available for new engagements",
  jumpLinkLabel: "Browse projects",
  highlights: [
    { label: "Focus", value: "Add focus areas or verticals" },
    { label: "Collaboration", value: "Remote · Async friendly" }
  ]
};
const projectFilters = {
  heading: "Filter the case studies",
  description: "Use the search or tags to help visitors find relevant examples.",
  searchPlaceholder: "Search by project, stack, or feature…",
  tagsLabel: "Focus tags"
};
const projects = [
  {
    name: "Project Alpha",
    description: "Describe the product, the problem you solved, and the outcome you drove.",
    tags: ["Nuxt", "Design System", "TypeScript"],
    link: "/projects/project-alpha"
  },
  {
    name: "Project Beta",
    description: "Share how you collaborated with the team and what made this build unique.",
    tags: ["Vue", "Animations", "Accessibility"],
    link: "/projects/project-beta"
  },
  {
    name: "Project Gamma",
    description: "Highlight measurable impact or learnings from this project.",
    tags: ["Performance", "DX", "Automation"],
    link: "/projects/project-gamma"
  }
];

export { ProjectCard as P, projectsHero as a, projectFilters as b, projects as p };
//# sourceMappingURL=projects-BkhPItke.mjs.map
