import { motion } from "framer-motion";

const projects = [
  {
    title: "Horizon House",
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop",
    location: "Pacific Coast",
    year: "2024",
  },
  {
    title: "Courtyard Gallery",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop",
    location: "Lisbon",
    year: "2023",
  },
  {
    title: "Atrium Loft",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1600&auto=format&fit=crop",
    location: "New York",
    year: "2022",
  },
  {
    title: "Garden Pavilion",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    location: "Copenhagen",
    year: "2022",
  },
];

export default function Projects() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Selected Work</h2>
        <p className="text-sm text-neutral-600">Residential · Cultural · Interiors</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white"
          >
            <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
              <img
                src={p.image}
                alt={`${p.title} – ${p.location}`}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium tracking-tight">{p.title}</h3>
                <p className="text-sm text-neutral-600">{p.location} · {p.year}</p>
              </div>
              <span className="text-xs rounded-full border border-neutral-300 px-3 py-1 text-neutral-700">View</span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
