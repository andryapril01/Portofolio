import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../data/profile";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);

    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(`#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -60%", threshold: [0.1, 0.35, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "shadow-[0_8px_24px_rgba(10,10,10,0.08)]"
          : "shadow-[0_1px_0_rgba(10,10,10,0.08)]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6">
        <a href="#home" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center bg-dark font-[family-name:var(--font-display)] text-xl tracking-wider text-white transition-colors group-hover:bg-accent">
            {profile.initials}
          </span>
          <span className="hidden border-l border-black/15 pl-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-muted sm:block">
            Data / Web
          </span>
        </a>

        <ul className="hidden items-center gap-5 xl:gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative block py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                  activeSection === link.href
                    ? "text-dark after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-0.5 after:bg-accent"
                    : "text-dark/60 hover:text-accent"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="group hidden items-center gap-2 border border-dark bg-white px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-dark transition-colors hover:bg-dark hover:text-white md:flex"
        >
          Contact Me{" "}
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-black/10 bg-[#f7f7f7] p-2 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-dark transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-dark transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-dark transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-black/10 bg-white/98 shadow-lg lg:hidden"
          >
            <ul className="grid gap-1 p-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center justify-between rounded-lg px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${
                      activeSection === link.href
                        ? "bg-dark text-white"
                        : "text-dark/70 hover:bg-[#f5f5f5] hover:text-accent"
                    }`}
                  >
                    {link.label}
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
