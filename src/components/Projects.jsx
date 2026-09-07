import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import { projects } from "../data/profile";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#f5f5f5] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
            Selected Work
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="font-[family-name:var(--font-script)] text-4xl md:text-5xl text-accent">
                Andry&apos;s
              </h2>
              <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl leading-none -mt-2">
                PROJECT PORTFOLIO
              </h2>
            </div>
            <p className="text-muted text-sm max-w-xs">
              Koleksi project data analytics, web development, dan IoT dari
              pengalaman kerja dan akademik.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <TiltCard className="group cursor-pointer h-full">
                <div className="relative overflow-hidden h-full flex flex-col rounded-xl bg-white shadow-[0_14px_35px_rgba(10,10,10,0.08)] ring-1 ring-black/5 transition-shadow duration-300 group-hover:shadow-[0_20px_45px_rgba(10,10,10,0.14)]">
                  <div
                    className={`aspect-[4/3] bg-gradient-to-br ${project.color} transition-transform duration-500 group-hover:scale-105 relative`}
                  >
                    <div className="absolute inset-0 opacity-30 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.3)_45%,transparent_46%)]" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                      <span className="text-white text-xs uppercase tracking-[0.3em] font-semibold border border-white/60 px-6 py-2 backdrop-blur-sm">
                        View Details
                      </span>
                    </div>
                  </div>
                  <div className="bg-white p-5 flex-1 border-t border-black/5">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-accent">
                        {project.category}
                      </p>
                      <span className="text-xs text-muted">{project.year}</span>
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl tracking-wide mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
