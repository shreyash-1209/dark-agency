import { ProjectModal } from "@/components/ProjectModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { usePortfolioProjects } from "@/hooks/useBackend";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { Filter } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import type { PortfolioProject } from "../../backend.d.ts";

const FALLBACK_PROJECTS: PortfolioProject[] = [
  {
    id: "1",
    title: "NeoBanking Platform",
    category: "Fintech",
    briefDescription:
      "A next-gen digital banking experience with real-time transactions, AI-powered insights, and frictionless onboarding.",
    fullDescription:
      "We redesigned and rebuilt the entire banking experience from the ground up — modern UI, sub-100ms transactions, and 99.99% uptime SLA.",
    imageUrl: "/assets/generated/hero-network.dim_1600x900.jpg",
    client: "Apex Financial",
    techStack: ["React", "Node.js", "PostgreSQL", "AWS"],
    outcomes:
      "300% increase in user activation rate, 40% reduction in support tickets",
  },
  {
    id: "2",
    title: "SaaS Analytics Dashboard",
    category: "SaaS",
    briefDescription:
      "Enterprise-grade analytics platform with real-time data visualization, custom reporting, and team collaboration.",
    fullDescription:
      "Replaced a legacy BI tool with a modern React-based dashboard supporting 500+ concurrent users.",
    imageUrl: "/assets/generated/hero-network.dim_1600x900.jpg",
    client: "DataStream Inc.",
    techStack: ["React", "D3.js", "GraphQL", "GCP"],
    outcomes: "2x faster report generation, adopted by 1,200+ enterprise users",
  },
  {
    id: "3",
    title: "E-Commerce Rebrand",
    category: "E-Commerce",
    briefDescription:
      "Full brand refresh and headless commerce implementation for a premium lifestyle brand.",
    fullDescription:
      "Migrated from a legacy Shopify theme to a fully custom headless storefront optimized for Core Web Vitals.",
    imageUrl: "/assets/generated/hero-network.dim_1600x900.jpg",
    client: "Lumière Co.",
    techStack: ["Next.js", "Shopify", "Tailwind CSS"],
    outcomes: "68% uplift in conversion rate, 4.9s → 1.2s LCP",
  },
  {
    id: "4",
    title: "AI Content Platform",
    category: "AI/ML",
    briefDescription:
      "An AI-powered content creation suite for marketing teams — generates, edits, and schedules copy at scale.",
    fullDescription:
      "Integrated GPT-4 and custom fine-tuned models into a clean editorial workflow, cutting content production time by 80%.",
    imageUrl: "/assets/generated/hero-network.dim_1600x900.jpg",
    client: "ContentOS",
    techStack: ["React", "Python", "OpenAI API", "Redis"],
    outcomes: "10x content output, 80% cost reduction per piece",
  },
  {
    id: "5",
    title: "Healthcare Patient Portal",
    category: "HealthTech",
    briefDescription:
      "HIPAA-compliant patient engagement platform with telemedicine, scheduling, and records management.",
    fullDescription:
      "Built from scratch with strict HIPAA compliance, end-to-end encryption, and a 98% patient satisfaction score in trials.",
    imageUrl: "/assets/generated/hero-network.dim_1600x900.jpg",
    client: "MedConnect Health",
    techStack: ["React", "Node.js", "AWS", "PostgreSQL"],
    outcomes: "35% reduction in no-shows, 98% patient satisfaction",
  },
  {
    id: "6",
    title: "Logistics Tracking System",
    category: "Enterprise",
    briefDescription:
      "Real-time fleet tracking and dispatch optimization platform handling 50,000+ daily deliveries.",
    fullDescription:
      "Replaced a brittle legacy system with a real-time WebSocket-driven dispatch platform that scaled to enterprise needs.",
    imageUrl: "/assets/generated/hero-network.dim_1600x900.jpg",
    client: "SwiftRoute",
    techStack: ["React", "Go", "WebSockets", "MongoDB"],
    outcomes: "22% reduction in delivery time, $2.4M annual savings",
  },
];

const CATEGORIES = [
  "All",
  "Fintech",
  "SaaS",
  "E-Commerce",
  "AI/ML",
  "HealthTech",
  "Enterprise",
];

export function PortfolioSection() {
  const { data: backendProjects, isLoading } = usePortfolioProjects();
  const projects =
    backendProjects && backendProjects.length > 0
      ? backendProjects
      : FALLBACK_PROJECTS;
  const search = useSearch({ from: "/" });
  const navigate = useNavigate({ from: "/" });
  const activeCategory = search.category ?? "All";
  const setActiveCategory = (cat: string) => {
    navigate({
      search: (prev) => ({
        ...prev,
        category: cat === "All" ? undefined : cat,
      }),
      replace: true,
    });
  };
  const [selectedProject, setSelectedProject] =
    useState<PortfolioProject | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="section-spacing bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 text-primary bg-primary/10 uppercase tracking-widest text-xs"
          >
            Our Work
          </Badge>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-3">
                Featured <span className="text-primary">Projects</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Real results for real clients — explore our latest work.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <div
          className="flex items-center gap-2 mb-8 flex-wrap"
          data-ocid="portfolio-filters"
        >
          <Filter className="w-4 h-4 text-muted-foreground" />
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-smooth ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
              data-ocid={`filter-${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["s1", "s2", "s3", "s4", "s5", "s6"].map((k) => (
              <Skeleton key={k} className="h-64 rounded-xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.button
                key={project.id}
                type="button"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-smooth text-left w-full"
                onClick={() => setSelectedProject(project)}
                data-ocid={`portfolio-card-${project.id}`}
              >
                <div className="relative h-44 overflow-hidden bg-muted">
                  <img
                    src={project.imageUrl || "/assets/images/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/70 to-transparent" />
                  <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground border-0 text-xs">
                    {project.category}
                  </Badge>
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                    {project.briefDescription}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        )}

        {filtered.length === 0 && !isLoading && (
          <div className="text-center py-16" data-ocid="portfolio-empty">
            <p className="text-muted-foreground">
              No projects found in this category.
            </p>
            <Button
              variant="ghost"
              className="mt-4 text-primary"
              onClick={() => setActiveCategory("All")}
            >
              Show all projects
            </Button>
          </div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
