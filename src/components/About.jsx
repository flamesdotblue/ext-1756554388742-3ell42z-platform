import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-5 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <div className="aspect-square overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100">
            <img
              src="https://images.unsplash.com/photo-1542631728-0a6141e2e6b6?q=80&w=1200&auto=format&fit=crop"
              alt="Architect in studio reviewing material samples"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="md:col-span-3"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">About</h2>
          <p className="mt-6 text-neutral-700 leading-7">
            I’m an architect specializing in modern residential and cultural projects. My work is guided by restraint and the honest use of materials—stone, wood, glass, and concrete—composed to frame light and invite calm. I collaborate closely with clients to design spaces that feel inevitable yet personal.
          </p>
          <p className="mt-4 text-neutral-700 leading-7">
            With over a decade of experience across Europe and North America, I lead projects from concept to completion, coordinating with engineers, fabricators, and builders to realize precise details and enduring architecture.
          </p>
          <ul className="mt-6 grid sm:grid-cols-3 gap-4 text-sm text-neutral-600">
            <li className="rounded-lg border border-neutral-200 bg-white p-4">AIA Member</li>
            <li className="rounded-lg border border-neutral-200 bg-white p-4">Passive House Certified</li>
            <li className="rounded-lg border border-neutral-200 bg-white p-4">LEED AP</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
