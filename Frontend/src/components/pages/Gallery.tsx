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
    <section id="work" className="relative bg-[#EDEEEA] px-6 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(#1C2126_1px,transparent_1px),linear-gradient(90deg,#1C2126_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.04]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <span className="inline-block border border-[#1C2126]/25 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-[#B5721E]">
            Our Projects
          </span>

          <h2 className="mt-5 font-[Oswald,_sans-serif] text-3xl font-bold uppercase tracking-tight text-[#1C2126] md:text-5xl">
            Our Work
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[#4A4F55]">
            Explore some of our machining, fabrication, welding,
            hydraulic, and industrial engineering projects completed
            for clients across various sectors.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img, index) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative m-0 border border-[#1C2126]/15 bg-[#F7F6F1] p-3"
            >
              {/* Corner rivets — mounted-plate motif */}
              <span className="absolute left-2 top-2 h-1.5 w-1.5 rounded-full bg-[#1C2126]/20" />
              <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#1C2126]/20" />
              <span className="absolute bottom-2 left-2 h-1.5 w-1.5 rounded-full bg-[#1C2126]/20" />
              <span className="absolute bottom-2 right-2 h-1.5 w-1.5 rounded-full bg-[#1C2126]/20" />

              <div className="overflow-hidden">
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.4 }}
                  className="h-[280px] w-full object-cover grayscale-[15%] transition-[filter] duration-300 group-hover:grayscale-0"
                />
              </div>

              <figcaption className="flex items-center justify-between px-1 pt-3">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#1C2126]">
                  {img.alt}
                </span>
                <span className="font-mono text-xs text-[#B5721E]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {galleryImages.length === 0 && (
          <div className="py-16 text-center font-mono text-sm uppercase tracking-[0.15em] text-[#6B7075]">
            No project images available yet.
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;