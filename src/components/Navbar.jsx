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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (current) {
          setActiveSection(`#${current.target.id}`);
        }
      },

      {
        rootMargin: "-25% 0px -60%",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);

      observer.disconnect();
    };
  }, []);

  return (
    <motion.nav
      initial={{
        y: -60,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className={`
      fixed
      left-0
      top-0
      z-50
      w-full
      h-[52px]
      border-b
      transition-all
      duration-300

      ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-black/10 shadow-sm"
          : "bg-white border-black/10"
      }
      `}
    >
      <div
        className="
        mx-auto
        flex
        h-full
        max-w-7xl
        items-center
        justify-between
        px-5
        "
      >
        {/* LOGO */}

        <a
          href="#home"
          className="
          flex
          items-center
          gap-2
          "
        >
          <span
            className="
            flex
            h-7
            w-7
            items-center
            justify-center
            bg-dark
            font-[family-name:var(--font-display)]
            text-sm
            text-white
            "
          >
            {profile.initials}
          </span>

          <span
            className="
            hidden
            border-l
            border-black/20
            pl-2
            text-[8px]
            uppercase
            tracking-[0.25em]
            text-black/50
            sm:block
            "
          >
            Data / Web
          </span>
        </a>

        {/* DESKTOP MENU */}

        <ul
          className="
          hidden
          items-center
          gap-6
          lg:flex
          "
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`
                  relative
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  transition-colors

                  ${
                    activeSection === link.href
                      ? "text-black after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-full after:bg-accent"
                      : "text-black/50 hover:text-black"
                  }
                  `}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CONTACT */}

        <a
          href="#contact"
          className="
          hidden
          border
          border-black
          px-3
          py-1.5
          text-[9px]
          font-bold
          uppercase
          tracking-[0.2em]
          md:block
          "
        >
          Contact
        </a>

        {/* MOBILE */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
          flex
          h-7
          w-7
          flex-col
          items-center
          justify-center
          gap-1
          border
          border-black/20
          lg:hidden
          "
        >
          <span className="h-px w-4 bg-black" />
          <span className="h-px w-4 bg-black" />
          <span className="h-px w-4 bg-black" />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            className="
            border-t
            bg-white
            lg:hidden
            "
          >
            <div
              className="
              grid
              gap-2
              p-4
              "
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="
                    py-2
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    "
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
