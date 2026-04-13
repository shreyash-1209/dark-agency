import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useProjectById } from "@/hooks/useBackend";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  Building2,
  Code2,
  ExternalLink,
  TrendingUp,
} from "lucide-react";

export function ProjectDetailPage() {
  const { id } = useParams({ strict: false }) as { id: string };
  const { data: project, isLoading } = useProjectById(id);

  if (isLoading) {
    return (
      <div className="pt-24 pb-16 container mx-auto px-6">
        <Skeleton className="h-8 w-32 mb-8" />
        <Skeleton className="h-96 w-full rounded-xl mb-8" />
        <Skeleton className="h-12 w-64 mb-4" />
        <Skeleton className="h-24 w-full" />
      </div>
    );
  }

  if (!project) {
    return (
      <div
        className="pt-32 pb-16 flex flex-col items-center justify-center text-center px-6"
        data-ocid="project-not-found"
      >
        <h1 className="font-display text-3xl font-bold text-foreground mb-4">
          Project Not Found
        </h1>
        <p className="text-muted-foreground mb-8">
          This project doesn't exist or has been removed.
        </p>
        <Link to="/">
          <Button className="bg-primary text-primary-foreground hover:opacity-90">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div
      className="pt-24 pb-16 bg-background min-h-screen"
      data-ocid="project-detail"
    >
      {/* Back */}
      <div className="container mx-auto px-6 mb-8">
        <Link to="/">
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground -ml-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </Link>
      </div>

      {/* Hero image */}
      <div className="container mx-auto px-6 mb-12">
        <div className="relative h-72 md:h-[480px] rounded-2xl overflow-hidden bg-muted">
          <img
            src={project.imageUrl || "/assets/images/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          <Badge className="absolute top-6 left-6 bg-primary text-primary-foreground border-0 text-sm px-4 py-1">
            {project.category}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              {project.title}
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {project.briefDescription}
            </p>
            {project.fullDescription && (
              <p className="text-foreground/80 leading-relaxed whitespace-pre-line">
                {project.fullDescription}
              </p>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="p-6 rounded-xl bg-card border border-border">
              <h3 className="font-display font-semibold text-foreground mb-4">
                Project Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                      Client
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {project.client}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                      Outcomes
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {project.outcomes}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {project.techStack.length > 0 && (
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-4 h-4 text-primary" />
                  <h3 className="font-display font-semibold text-foreground">
                    Tech Stack
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-muted/50 text-muted-foreground border-border"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <Button
              className="w-full bg-primary text-primary-foreground hover:opacity-90 font-semibold"
              data-ocid="project-contact-cta"
              onClick={() => {
                const el = document.getElementById("contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Start a Similar Project
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </aside>
        </div>
      </div>
    </div>
  );
}
