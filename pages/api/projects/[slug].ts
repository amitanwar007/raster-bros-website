import type { NextApiRequest, NextApiResponse } from "next";
import { rasterBrosProjects } from "../../shared/projects-data";
import { ProjectSchema } from "../../src/lib/schema";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { slug } = req.query;

  if (!slug || typeof slug !== "string") {
    return res.status(400).json({ error: "Slug is required" });
  }

  try {
    const project = rasterBrosProjects.find((p) => p.slug === slug);

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    // Add ID and validate
    const projectWithId = {
      id: `project-${project.slug}`,
      ...project,
    };

    const validated = ProjectSchema.parse(projectWithId);

    res.status(200).json(validated);
  } catch (error) {
    console.error("Error fetching project:", error);
    res.status(500).json({ error: "Failed to fetch project" });
  }
}
