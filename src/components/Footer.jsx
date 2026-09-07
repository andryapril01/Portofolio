import { profile } from '../data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#home" className="font-[family-name:var(--font-display)] text-2xl md:text-3xl tracking-wider text-center">
            ANDRY<span className="text-accent">.</span>NUR
          </a>

          <div className="flex gap-6">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-accent transition-colors"
            >
              Email
            </a>
          </div>

          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 text-center">
            &copy; {year} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
