import { c as createLucideIcon, m as useParams, j as jsxRuntimeExports, S as Skeleton, L as Link, B as Button } from "./index-JMYeA-kP.js";
import { c as useProjectById, B as Badge, a as Building2, T as TrendingUp, C as CodeXml } from "./useBackend-DV-FXm_K.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = createLucideIcon("external-link", __iconNode);
function ProjectDetailPage() {
  const { id } = useParams({ strict: false });
  const { data: project, isLoading } = useProjectById(id);
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-24 pb-16 container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-8 w-32 mb-8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-96 w-full rounded-xl mb-8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-12 w-64 mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-24 w-full" })
    ] });
  }
  if (!project) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "pt-32 pb-16 flex flex-col items-center justify-center text-center px-6",
        "data-ocid": "project-not-found",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-foreground mb-4", children: "Project Not Found" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "This project doesn't exist or has been removed." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-primary text-primary-foreground hover:opacity-90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
            "Back to Home"
          ] }) })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "pt-24 pb-16 bg-background min-h-screen",
      "data-ocid": "project-detail",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            variant: "ghost",
            className: "text-muted-foreground hover:text-foreground -ml-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
              "Back to Portfolio"
            ]
          }
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 mb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-72 md:h-[480px] rounded-2xl overflow-hidden bg-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: project.imageUrl || "/assets/images/placeholder.svg",
              alt: project.title,
              className: "w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "absolute top-6 left-6 bg-primary text-primary-foreground border-0 text-sm px-4 py-1", children: project.category })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight", children: project.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-6", children: project.briefDescription }),
            project.fullDescription && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/80 leading-relaxed whitespace-pre-line", children: project.fullDescription })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-card border border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground mb-4", children: "Project Details" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-4 h-4 text-primary mt-1 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide mb-0.5", children: "Client" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: project.client })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-primary mt-1 shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground uppercase tracking-wide mb-0.5", children: "Outcomes" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/80 leading-relaxed", children: project.outcomes })
                  ] })
                ] })
              ] })
            ] }),
            project.techStack.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 rounded-xl bg-card border border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CodeXml, { className: "w-4 h-4 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground", children: "Tech Stack" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: project.techStack.map((tech) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  variant: "secondary",
                  className: "bg-muted/50 text-muted-foreground border-border",
                  children: tech
                },
                tech
              )) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                className: "w-full bg-primary text-primary-foreground hover:opacity-90 font-semibold",
                "data-ocid": "project-contact-cta",
                onClick: () => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                },
                children: [
                  "Start a Similar Project",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "w-4 h-4 ml-2" })
                ]
              }
            )
          ] })
        ] }) })
      ]
    }
  );
}
export {
  ProjectDetailPage
};
