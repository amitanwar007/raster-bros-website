import { useProjects } from "@/hooks/use-projects";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Marquee } from "@/components/Marquee";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const { data: projects, isLoading } = useProjects();

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-white selection:text-black overflow-x-hidden">
      <Navigation />

      <Hero />

      {/* About Section */}
      <section id="studio" className="container mx-auto px-6 py-32 md:py-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <span className="text-sm uppercase tracking-widest text-white/50 block mb-6">
              About Raster Bros
            </span>
          </div>
          <div className="md:col-span-8">
            <motion.p
              className="text-3xl md:text-5xl font-display font-light leading-tight mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Raster Bros is a creative studio specializing in professional film
              production, photography, videography, web series, and brand
              commercials. We transform visions into cinematic reality.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-white/60 mb-12">
              <p>
                Our team brings years of experience in visual storytelling,
                combining technical expertise with artistic vision. We handle
                every aspect of production from concept to final delivery.
              </p>
              <p>
                We work with brands, agencies, and creators to produce
                high-quality content that resonates with audiences and elevates
                your message through compelling visuals and narratives.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-8 border-t border-white/10">
              {[
                "Movie Shooting",
                "Photography",
                "Videography",
                "Web Series",
                "Advertisements",
              ].map((service) => (
                <motion.div
                  key={service}
                  className="text-sm uppercase tracking-wider text-white/50"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="px-6 py-20">
        <div className="container mx-auto mb-16 flex justify-between items-end">
          <h2 className="text-4xl md:text-6xl font-display font-bold">
            Selected Work
          </h2>
          <span className="hidden md:inline-block text-white/40">
            (2023 — 2024)
          </span>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 container mx-auto">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[3/4] bg-white/5 rounded-sm mb-4" />
                <div className="h-6 w-2/3 bg-white/5 rounded mb-2" />
                <div className="h-4 w-1/3 bg-white/5 rounded" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 container mx-auto">
            {projects?.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        )}
      </section>

      <Marquee />

      {/* Capabilities Section */}
      <section className="container mx-auto px-6 py-32 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h3 className="text-2xl font-display mb-8">Our Services</h3>
            <ul className="space-y-4">
              {[
                "Movie Shooting",
                "Photography",
                "Videography",
                "Web Series Production",
                "Brand Commercials",
                "Post-Production",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between border-b border-white/10 pb-4 group cursor-default"
                >
                  <span className="text-xl text-white/60 group-hover:text-white transition-colors">
                    {item}
                  </span>
                  <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-square md:aspect-auto bg-white/5 overflow-hidden">
            {/* abstract visual placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 to-purple-900/40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display text-9xl text-white/5 font-bold rotate-90 md:rotate-0">
                SERVICES
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-white text-black py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-5xl md:text-7xl font-display font-bold leading-none mb-8 tracking-tighter">
                LET'S WORK
                <br />
                TOGETHER
              </h2>
              <a
                href="mailto:hello@rasterbros.com"
                className="inline-block text-xl border-b border-black/20 pb-1 hover:border-black transition-colors"
              >
                hello@rasterbros.com
              </a>
            </div>
            <div className="flex flex-col justify-end items-start md:items-end">
              <div className="space-y-2 text-right">
                <p>Raster Bros Creative Studio</p>
                <p>Available Worldwide</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/10 text-sm opacity-60">
            <p>&copy; 2024 Raster Bros. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-black transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-black transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
