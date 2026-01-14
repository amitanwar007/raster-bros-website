import { pgTable, text, serial, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  year: text("year").notNull(),
  slug: text("slug").notNull().unique(),
  isFeatured: boolean("is_featured").default(false),
  // Extended fields for Raster Bros
  bannerVideo: text("banner_video"),
  carouselImages: jsonb("carousel_images").$type<string[]>(),
  galleryImages: jsonb("gallery_images").$type<string[]>(),
  embeddedVideo: text("embedded_video"),
  workType: text("work_type"), // photography, videography, movie, web-series, advertisement
  detailedDescription: text("detailed_description"),
});

export const insertProjectSchema = createInsertSchema(projects).omit({ id: true });

export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;

// Extended project type for frontend with all fields
export type ProjectDetail = Project & {
  bannerVideo?: string | null;
  carouselImages?: string[] | null;
  galleryImages?: string[] | null;
  embeddedVideo?: string | null;
  workType?: string | null;
  detailedDescription?: string | null;
};
