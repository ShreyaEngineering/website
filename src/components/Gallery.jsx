import { motion } from "framer-motion";

const galleryModules = import.meta.glob("/public/images/gallery/*.{png,jpg,jpeg,webp,avif}", {
  eager: true,
  query: "?url",
  import: "default",
});

const galleryImages = Object.entries(galleryModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src]) => {
    const fileName = path.split("/").pop()?.split(".")[0] ?? "gallery image";
    const alt = fileName.replace(/[-_]+/g, " ");

    return { src, alt };
  });

export default function Gallery() {
  return (
    <section id="work" className="py-24">
      <h2 className="text-3xl md:text-4xl text-center text-cyan-300 mb-12">Our Work</h2>

      <div className="grid md:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {galleryImages.map((img) => (
          <motion.div
            key={img.src}
            whileHover={{ scale: 1.05 }}
            className="overflow-hidden rounded-2xl border border-cyan-500/30 hover:shadow-[0_0_30px_#00f5ff]"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-[300px] object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}