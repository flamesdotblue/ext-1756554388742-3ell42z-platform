import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="pt-24 md:pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              Modern architecture with timeless elegance
            </h1>
            <p className="text-neutral-600 text-lg/7 max-w-xl">
              I create refined, human-centered spaces that balance light, material, and proportion. From private homes to cultural spaces, my practice focuses on clarity and craft.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-white text-sm font-medium hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-black/40"
              >
                View selected work <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-3 text-sm font-medium hover:bg-neutral-100"
              >
                Get in touch
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100">
              <img
                src="https://images.unsplash.com/photo-1507138451611-300f0d7bb7f9?q=80&w=1600&auto=format&fit=crop"
                alt="Minimalist concrete and glass residence with sharp lines and soft light"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
