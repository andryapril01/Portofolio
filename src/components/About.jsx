import { motion } from 'framer-motion'
import profilePhoto from '@profile-photo'
import { profile, stats } from '../data/profile'

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">About Me</p>
            <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl leading-none mb-2">
              DATA
            </h2>
            <h2 className="font-[family-name:var(--font-script)] text-5xl md:text-6xl text-accent -mt-2 mb-6">
              Analyst
            </h2>
            <p className="text-muted leading-relaxed mb-8 max-w-md">
              {profile.tagline}
            </p>

            <div className="bg-[#f5f5f5] p-4 mb-8 max-w-md">
              <p className="text-[10px] uppercase tracking-[0.2em] text-accent mb-1">Education</p>
              <p className="font-semibold text-sm">{profile.education.school}</p>
              <p className="text-muted text-sm">{profile.education.degree}</p>
              <p className="text-xs text-muted mt-1">
                GPA {profile.education.gpa} &middot; {profile.education.period}
              </p>
            </div>

            <div className="flex gap-8 mb-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#projects"
              className="inline-block bg-accent text-white text-xs font-semibold uppercase tracking-widest px-8 py-3 hover:bg-dark transition-colors"
            >
              View Projects
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -right-4 top-8 w-full h-full bg-accent -z-10" />
            <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden bg-[#1a56db]">
              <img
                src={profilePhoto}
                alt={profile.name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white font-[family-name:var(--font-display)] text-2xl tracking-wide">
                  {profile.shortName}
                </p>
                <p className="text-white/60 text-xs uppercase tracking-[0.3em]">
                  {profile.title}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
