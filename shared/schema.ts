import { z } from "zod";

export const ProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  category: z.string(),
  description: z.string(),
  detailedDescription: z.string(),
  imageUrl: z.string(),
  year: z.string(),
  slug: z.string(),
  isFeatured: z.boolean(),
  workType: z.enum(["movie", "photography", "advertisement", "web-series"]),
  bannerVideo: z.string().nullable(),
  carouselImages: z.array(z.string()),
  galleryImages: z.array(z.string()),
  embeddedVideo: z.string().nullable(),
});

export type Project = z.infer<typeof ProjectSchema>;
export type InsertProject = Omit<Project, "id">;
