import { motion } from "framer-motion";
import detailCardImage from "../assets/card/detail card.png";

export default function HeroCardDetail({ card, onClose }) {
  if (!card?.detail) return null;

  return (
    <motion.div
      key={card.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="absolute inset-0 bg-dark/40 backdrop-blur-sm"
        aria-hidden="true"
      />

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-[#f2eadb] shadow-[0_24px_70px_rgba(0,0,0,0.32)]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-muted shadow-sm transition-colors hover:bg-white hover:text-dark"
        >
          ✕
        </button>

        <div className="flex max-h-[86vh] justify-center bg-[#f2eadb] p-2 sm:p-4">
          <img
            src={detailCardImage}
            alt="Detail portfolio identification card Andry"
            className="h-auto max-h-[82vh] w-full object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
