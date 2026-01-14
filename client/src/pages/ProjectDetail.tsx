import { useRoute } from "wouter";
import { useProject } from "@/hooks/use-projects";
import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export default function ProjectDetail() {
  const [, params] = useRoute("/project/:slug");
  const slug = params?.slug || "";
  const { data: project, isLoading } = useProject(slug);

  if (isLoading) {
    return (
      <div className="bg-background min-h-screen text-foreground">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-pulse text-white/50">Loading project...</div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="bg-background min-h-screen text-foreground">
        <Navigation />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-display mb-4">Project not found</h1>
            <Link href="/" className="text-white/60 hover:text-white transition-colors">
              Return to home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const workTypeLabels: Record<string, string> = {
    movie: "Movie Production",
    photography: "Photography",
    videography: "Videography",
    "web-series": "Web Series Production",
    advertisement: "Brand Commercial",
  };

  return (
    <div className="bg-background min-h-screen text-foreground">
      <Navigation />
      
      {/* Hero Banner with Video */}
      <section className="relative h-screen w-full overflow-hidden">
        {project.bannerVideo ? (
          <div className="absolute inset-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={project.bannerVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ) : (
          <div className="absolute inset-0">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        )}
        
        <div className="relative z-10 h-full flex flex-col justify-between container mx-auto px-6 py-32">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-auto"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Work</span>
          </Link>
          
          <div className="mb-20">
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-none mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {project.title}
            </motion.h1>
            <motion.div
              className="flex flex-wrap gap-4 text-white/60"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="uppercase tracking-wider">{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
              {project.workType && (
                <>
                  <span>•</span>
                  <span>{workTypeLabels[project.workType] || project.workType}</span>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      {project.carouselImages && project.carouselImages.length > 0 && (
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-6 relative">
            <Carousel className="w-full">
              <CarouselContent>
                {project.carouselImages.map((image, index) => (
                  <CarouselItem key={index} className="basis-full">
                    <div className="aspect-video overflow-hidden rounded-sm">
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4 text-white border-white/20 hover:border-white/40" />
              <CarouselNext className="right-2 md:right-4 text-white border-white/20 hover:border-white/40" />
            </Carousel>
          </div>
        </section>
      )}

      {/* Description Section */}
      <section className="container mx-auto px-6 py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-sm uppercase tracking-widest text-white/50 mb-8">Project Overview</h2>
          </div>
          <div className="md:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-2xl md:text-3xl font-display font-light leading-relaxed text-white/90 mb-8">
                {project.description}
              </p>
            </motion.div>
            
            {project.detailedDescription && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4 text-white/60 leading-relaxed"
              >
                <p>{project.detailedDescription}</p>
              </motion.div>
            )}

            {project.workType && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="pt-8 border-t border-white/10"
              >
                <p className="text-sm uppercase tracking-wider text-white/50 mb-2">Work Type</p>
                <p className="text-xl font-display">{workTypeLabels[project.workType] || project.workType}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Embedded Video Section */}
      {project.embeddedVideo && (
        <section className="container mx-auto px-6 py-20">
          <motion.div
            className="aspect-video bg-black rounded-sm overflow-hidden relative group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <video
              controls
              className="w-full h-full object-cover"
              poster={project.imageUrl}
            >
              <source src={project.embeddedVideo} type="video/mp4" />
            </video>
          </motion.div>
        </section>
      )}

      {/* Gallery Section */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <section className="container mx-auto px-6 py-20">
          <h2 className="text-sm uppercase tracking-widest text-white/50 mb-12">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="aspect-[4/3] overflow-hidden rounded-sm bg-white/5 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={image}
                  alt={`${project.title} - Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Next Project CTA */}
      <section className="container mx-auto px-6 py-32 border-t border-white/10">
        <Link href="/#work">
          <motion.div
            className="text-center cursor-pointer group"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-widest text-white/50 mb-4">View More Work</p>
            <p className="text-4xl md:text-6xl font-display font-bold group-hover:text-white/70 transition-colors">
              Selected Work
            </p>
          </motion.div>
        </Link>
      </section>
    </div>
  );
}

