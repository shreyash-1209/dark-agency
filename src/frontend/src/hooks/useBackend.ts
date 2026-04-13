import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createActor } from "../backend";
import type { ContactSubmission, PortfolioProject } from "../backend.d.ts";

export function usePortfolioProjects() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<PortfolioProject[]>({
    queryKey: ["portfolioProjects"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getPortfolioProjects();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useProjectById(id: string) {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<PortfolioProject | null>({
    queryKey: ["project", id],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getProjectById(id);
    },
    enabled: !!actor && !isFetching && !!id,
  });
}

export function useContactSubmissions() {
  const { actor, isFetching } = useActor(createActor);
  return useQuery<ContactSubmission[]>({
    queryKey: ["contactSubmissions"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getContactSubmissions();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSubmitContact() {
  const { actor } = useActor(createActor);
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      message: string;
      serviceType: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitContact(
        data.name,
        data.email,
        data.phone,
        data.message,
        data.serviceType,
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contactSubmissions"] });
    },
  });
}
