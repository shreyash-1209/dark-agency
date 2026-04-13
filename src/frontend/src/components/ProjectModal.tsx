import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "@tanstack/react-router";
import { ArrowRight, Building2, Code2, TrendingUp, X } from "lucide-react";
import type { PortfolioProject } from "../backend.d.ts";

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const router = useRouter();

  if (!project) return null;

  const handleViewFull = () => {
    onClose();
    router.navigate({ to: "/project/$id", params: { id: project.id } });
  };

  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="max-w-2xl bg-card border-border p-0 overflow-hidden"
        data-ocid="project-modal"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-muted-foreground hover:text-foreground transition-smooth"
          aria-label="Close modal"
          data-ocid="modal-close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Image */}
        <div className="relative h-56 overflow-hidden bg-muted">
          <img
            src={project.imageUrl || "/assets/images/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
          <Badge className="absolute top-4 left-4 bg-primary/90 text-primary-foreground border-0">
            {project.category}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-6">
          <DialogHeader className="mb-4">
            <DialogTitle className="font-display text-xl text-foreground">
              {project.title}
            </DialogTitle>
          </DialogHeader>

          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {project.briefDescription}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
              <Building2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                  Client
                </p>
                <p className="text-sm font-medium text-foreground">
                  {project.client}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
              <TrendingUp className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">
                  Outcomes
                </p>
                <p className="text-sm font-medium text-foreground line-clamp-2">
                  {project.outcomes}
                </p>
              </div>
            </div>
          </div>

          {project.techStack.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Code2 className="w-4 h-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground uppercase tracking-wide">
                  Tech Stack
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="bg-muted text-muted-foreground border-border text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-2">
            <Button
              variant="outline"
              className="flex-1 border-border text-foreground hover:bg-muted/50 transition-smooth"
              onClick={onClose}
              data-ocid="modal-cancel"
            >
              Close
            </Button>
            <Button
              className="flex-1 bg-primary text-primary-foreground hover:opacity-90 transition-smooth font-semibold"
              onClick={handleViewFull}
              data-ocid="modal-view-full"
            >
              View Full Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
