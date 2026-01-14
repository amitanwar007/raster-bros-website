import { db } from "./db";
import { projects, type Project, type InsertProject } from "@shared/schema";
import { eq } from "drizzle-orm";
import { rasterBrosProjects } from "@shared/projects-data";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getProjectBySlug(slug: string): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
}

export class DatabaseStorage implements IStorage {
  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async getProjectBySlug(slug: string): Promise<Project | undefined> {
    const [project] = await db
      .select()
      .from(projects)
      .where(eq(projects.slug, slug));
    return project;
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const [project] = await db
      .insert(projects)
      .values(insertProject)
      .returning();
    return project;
  }
}

export class MockStorage implements IStorage {
  private mockProjects: Project[] = rasterBrosProjects.map((p, index) => ({
    id: index + 1,
    ...p,
  }));

  async getProjects(): Promise<Project[]> {
    return this.mockProjects;
  }

  async getProjectBySlug(slug: string): Promise<Project | undefined> {
    return this.mockProjects.find((p) => p.slug === slug);
  }

  async createProject(project: InsertProject): Promise<Project> {
    const newProject: Project = {
      id: this.mockProjects.length + 1,
      ...project,
    };
    this.mockProjects.push(newProject);
    return newProject;
  }
}

export const storage = process.env.DATABASE_URL
  ? new DatabaseStorage()
  : new MockStorage();
