import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { rasterBrosProjects } from "@shared/projects-data";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed data from projects-data.ts
  const existingProjects = await storage.getProjects();
  if (existingProjects.length === 0) {
    console.log("Seeding database with Raster Bros projects...");
    for (const project of rasterBrosProjects) {
      await storage.createProject(project);
    }
    console.log(`Seeding complete. Added ${rasterBrosProjects.length} projects.`);
  }

  // API Routes
  app.get(api.projects.list.path, async (req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get(api.projects.get.path, async (req, res) => {
    const project = await storage.getProjectBySlug(req.params.slug);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.json(project);
  });

  return httpServer;
}
