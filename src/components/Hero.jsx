import { motion } from "framer-motion";
import { profile } from "../data/profile";
import HeroCardStack from "./HeroCardStack";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] bg-[#f0f0f0] overflow-hidden pb-6 md:pb-8"
    >
      <span className="absolute top-6 left-6 text-sm text-gray-300 font-light select-none">
        +
      </span>
      <span className="absolute top-6 right-6 text-sm text-gray-300 font-light select-none">
        +
      </span>
      <span className="absolute bottom-6 left-6 text-sm text-gray-300 font-light select-none">
        +
      </span>
      <span className="absolute bottom-6 right-6 text-sm text-gray-300 font-light select-none">
        +
      </span>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 pt-56 md:pt-60 pb-10 md:pb-14 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-[family-name:var(--font-body)] text-[10px] md:text-xs uppercase tracking-[0.32em] text-muted mb-6 md:mb-8"
        >
          Welcome to my
        </motion.p>

        <div className="relative top-8 md:top-10 flex justify-center items-center mb-8 md:mb-11">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.35, duration: 0.9, ease: "easeOut" }}
            className="absolute w-3.5 md:w-5 bg-accent origin-top"
            style={{ height: "112%", top: "-6%" }}
          />

          <div className="relative text-center px-5 sm:px-8 md:px-16">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: 1,
                y: [0, -4, 3, 0],
                rotateX: [0, 1.5, -1.5, 0],
                rotateY: [0, -1.5, 1.5, 0],
              }}
              transition={{
                opacity: { delay: 0.3, duration: 0.7 },
                y: {
                  delay: 1,
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotateX: {
                  delay: 1,
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotateY: {
                  delay: 1,
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="font-[family-name:var(--font-display)] text-[clamp(4.25rem,9vw,10rem)] leading-[0.86] tracking-normal relative z-10"
              style={{
                transformPerspective: 900,
                transformStyle: "preserve-3d",
              }}
            >
              PORTFOLIO
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{
                opacity: 1,
                x: [12, 15, 10, 12],
                y: [12, 15, 9, 12],
                rotateX: [0, 1.5, -1.5, 0],
                rotateY: [0, -1.5, 1.5, 0],
              }}
              transition={{
                opacity: { delay: 0.55, duration: 0.7 },
                x: {
                  delay: 1,
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                y: {
                  delay: 1,
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotateX: {
                  delay: 1,
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotateY: {
                  delay: 1,
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="font-[family-name:var(--font-display)] text-[clamp(4.25rem,9vw,10rem)] leading-[0.86] tracking-normal outline-text absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{
                transformPerspective: 900,
                transformStyle: "preserve-3d",
              }}
              aria-hidden="true"
            >
              PORTFOLIO
            </motion.h1>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 mb-6 md:mb-4 px-2"
        >
          <p className="font-[family-name:var(--font-body)] text-[10px] md:text-xs uppercase tracking-[0.22em] text-muted max-w-none leading-relaxed sm:whitespace-nowrap">
            {profile.name}
          </p>
          <p className="font-[family-name:var(--font-body)] text-[10px] md:text-xs uppercase tracking-[0.22em] text-muted sm:text-right">
            {profile.title}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-4 md:mt-8"
        >
          <HeroCardStack />
        </motion.div>
      </div>
    </section>
  );
}
