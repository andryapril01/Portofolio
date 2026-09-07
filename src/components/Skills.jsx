import { motion } from 'framer-motion'
import { skills, skillCategories } from '../data/profile'

export default function Skills() {
  return (
    <section id="skills" className="relative bg-white py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Expertise</p>
            <h2 className="font-[family-name:var(--font-script)] text-5xl md:text-6xl text-accent mb-1">
              Tech
            </h2>
            <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl leading-none mb-8">
              STACK
            </h2>
            <p className="text-muted leading-relaxed mb-10 max-w-md">
              Menguasai berbagai teknologi untuk analisis data, pengembangan web,
              machine learning, dan visualisasi dashboard.
            </p>

            <ul className="space-y-3">
              {skillCategories.map((service, i) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 text-sm text-dark/80"
                >
                  <span className="w-1.5 h-1.5 bg-accent shrink-0" />
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="grid grid-cols-3 gap-4">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group"
                >
                  <div className={`${skill.color} aspect-square rounded-xl flex flex-col items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow`}>
                    <span className="font-bold text-xl md:text-2xl">
                      {skill.icon}
                    </span>
                  </div>
                  <p className="text-[10px] uppercase tracking-wider text-muted text-center mt-2">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 p-5 bg-[#f5f5f5] border-l-4 border-accent"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-accent mb-1">Achievement</p>
              <p className="font-[family-name:var(--font-display)] text-xl tracking-wide">
                Silver Medalist — PEKA Inovasi Nasional 2025
              </p>
              <p className="text-muted text-sm mt-1">Universitas Mercu Buana</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
