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

  try {
    // Add IDs to projects
    const projectsWithIds = rasterBrosProjects.map((project, index) => ({
      id: `project-${index}`,
      ...project,
    }));

    // Validate with schema
    const validated = projectsWithIds.map((p) => ProjectSchema.parse(p));

    res.status(200).json(validated);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ error: "Failed to fetch projects" });
  }
}
