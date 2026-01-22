import { z } from "zod";

// Schema definitions
const ProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  slug: z.string(),
  image: z.string().optional(),
  link: z.string().optional(),
});

type Project = z.infer<typeof ProjectSchema>;

// API routes configuration
export const api = {
  projects: {
    list: {
      path: "/api/projects",
      responses: {
        200: z.array(ProjectSchema),
      },
    },
    get: {
      path: "/api/projects/:slug",
      responses: {
        200: ProjectSchema,
      },
    },
  },
};

// Helper function to build URLs with parameters
export function buildUrl(path: string, params: Record<string, string>): string {
  let url = path;
  for (const [key, value] of Object.entries(params)) {
    url = url.replace(`:${key}`, value);
  }
  return url;
}
