import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const images = Array.from(
    { length: 12 },
    (_, i) => `/src/assets/images/img${i + 1}.jpg`
  );

  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeLightbox = () => setSelectedIndex(null);

  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 px-5 md:px-8 max-w-7xl mx-auto">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
      >
         Memories Gallery
      </motion.h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            whileHover={{
              scale: 1.04,
              rotate: 1,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedIndex(i)}
            className="group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg"
          >
            <img
              src={img}
              alt={`Memory ${i + 1}`}
              className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 bg-white/10 hover:bg-cyan-500 p-3 rounded-full text-white transition"
            >
              <X size={28} />
            </button>

            {/* Previous */}
            <button
              onClick={prevImage}
              className="absolute left-3 md:left-8 bg-white/10 hover:bg-cyan-500 p-3 rounded-full text-white transition"
            >
              <ChevronLeft size={32} />
            </button>

            {/* Next */}
            <button
              onClick={nextImage}
              className="absolute right-3 md:right-8 bg-white/10 hover:bg-cyan-500 p-3 rounded-full text-white transition"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image */}
            <motion.img
              key={selectedIndex}
              src={images[selectedIndex]}
              alt={`Memory ${selectedIndex + 1}`}
              onClick={(e) => e.stopPropagation()}
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
              }}
              className="max-w-full max-h-[85vh] rounded-2xl border border-white/20 shadow-2xl"
            />

            {/* Counter */}
            <div className="absolute bottom-6 text-white text-lg bg-white/10 px-5 py-2 rounded-full backdrop-blur-md">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}