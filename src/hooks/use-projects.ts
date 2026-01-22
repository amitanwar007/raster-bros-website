import { useMemo } from "react";
import { rasterBrosProjects } from "../../shared/projects-data";
import type { Project } from "@/lib/schema";

export function useProjects() {
  // Add IDs to projects and return directly
  const data = useMemo<Project[]>(() => {
    return rasterBrosProjects.map((project, index) => ({
      id: `project-${index}`,
      ...project,
    })) as Project[];
  }, []);

  return {
    data,
    isLoading: false,
    error: null,
  };
}

export function useProject(slug: string) {
  // Find project by slug
  const data = useMemo(() => {
    if (!slug) return null;
    const project = rasterBrosProjects.find((p) => p.slug === slug);
    return project
      ? ({
          id: `project-${slug}`,
          ...project,
        } as Project)
      : null;
  }, [slug]);

  return {
    data,
    isLoading: false,
    error: null,
  };
}
