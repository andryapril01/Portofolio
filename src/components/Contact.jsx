import { useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative bg-[#f5f5f5] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Get In Touch</p>
            <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl leading-none mb-6">
              LET&apos;S WORK
              <br />
              <span className="text-accent">TOGETHER</span>
            </h2>
            <p className="text-muted leading-relaxed mb-8 max-w-md">
              Tertarik untuk berkolaborasi? Kirim pesan dan mari kita diskusikan
              project atau peluang kerja.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 text-sm hover:text-accent transition-colors"
              >
                <span className="w-8 h-8 bg-white flex items-center justify-center text-xs">@</span>
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-3 text-sm hover:text-accent transition-colors"
              >
                <span className="w-8 h-8 bg-white flex items-center justify-center text-xs">Ph</span>
                {profile.phone}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm hover:text-accent transition-colors"
              >
                <span className="w-8 h-8 bg-white flex items-center justify-center text-xs">In</span>
                LinkedIn
              </a>
              <p className="flex items-center gap-3 text-sm text-muted">
                <span className="w-8 h-8 bg-white flex items-center justify-center text-xs">Loc</span>
                {profile.location}
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 md:p-10"
          >
            <div>
              <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-muted block mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border-b-2 border-gray-200 py-3 text-sm focus:border-accent outline-none transition-colors bg-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-muted block mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border-b-2 border-gray-200 py-3 text-sm focus:border-accent outline-none transition-colors bg-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-muted block mb-2">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border-b-2 border-gray-200 py-3 text-sm focus:border-accent outline-none transition-colors bg-transparent resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="bg-accent text-white text-xs font-semibold uppercase tracking-widest px-10 py-3.5 hover:bg-dark transition-colors"
            >
              {sent ? 'Message Sent!' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
