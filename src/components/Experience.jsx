import { motion } from 'framer-motion'
import { experiences } from '../data/profile'

export default function Experience() {
  return (
    <section id="experience" className="relative bg-dark text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Career</p>
          <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl leading-none">
            EXPERIENCE
          </h2>
        </motion.div>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1 }}
              className="grid md:grid-cols-[280px_1fr] gap-6 md:gap-12 py-10 border-t border-white/10 group hover:bg-white/5 transition-colors px-4 -mx-4"
            >
              <div>
                <p className="text-accent text-xs uppercase tracking-[0.2em] mb-2">{exp.period}</p>
                <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl tracking-wide leading-tight">
                  {exp.company}
                </h3>
                <p className="text-white/50 text-sm mt-1">{exp.role}</p>
                <p className="text-white/30 text-xs mt-1">{exp.location}</p>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="w-1 h-1 bg-accent rounded-full mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
