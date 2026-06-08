import { motion } from "framer-motion";

interface GalleryImage {
  src: string;
  alt: string;
}

const galleryModules = import.meta.glob<string>(
  "/public/images/gallery/*.{png,jpg,jpeg,webp,avif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const galleryImages: GalleryImage[] = Object.entries(galleryModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => {
    const fileName =
      path.split("/").pop()?.split(".")[0] ?? "gallery-image";

    return {
      src,
      alt: fileName.replace(/[-_]+/g, " "),
    };
  });

const Gallery = () => {
  return (
    <section
      id="work"
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm font-medium mb-4">
            Our Projects
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our Work
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto">
            Explore some of our machining, fabrication,
            welding, hydraulic, and industrial engineering
            projects completed for clients across various sectors.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -8,
              }}
              className="group overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-sm"
            >
              <div className="overflow-hidden">
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-[300px] object-cover"
                />
              </div>

              
            </motion.div>
          ))}
        </div>

        {galleryImages.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            No project images available yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;