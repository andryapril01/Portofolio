import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileCardFront from "../assets/card/foto card depan.png";
import profileCardBack from "../assets/card/foto belakang cardc.png";
import { heroCards } from "../data/profile";
import HeroCardDetail from "./HeroCardDetail";

function useSpreadScale() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setScale(0.42);
      else if (w < 1024) setScale(0.68);
      else setScale(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return scale;
}

export default function HeroCardStack() {
  const [spread, setSpread] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const [flippedId, setFlippedId] = useState(null);
  const [strapStretch, setStrapStretch] = useState(0);
  const [dragRotation, setDragRotation] = useState(0);
  const dragRef = useRef(false);
  const dragAreaRef = useRef(null);
  const spreadScale = useSpreadScale();

  const profileCard =
    heroCards.find((card) => card.type === "photo") ?? heroCards[0];
  const selectedCard = profileCard.id === selectedId ? profileCard : null;

  useEffect(() => {
    if (!selectedId) return;
    const onKey = (e) => {
      if (e.key === "Escape") setSelectedId(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedId]);

  const handleCardClick = (id) => {
    if (dragRef.current) return;
    setSelectedId(id);
    setSpread(true);
  };

  return (
    <>
      <div className="relative w-full max-w-6xl mx-auto">
        <div
          ref={dragAreaRef}
          className="relative mx-auto h-[430px] sm:h-[480px] md:h-[530px]"
          onMouseEnter={() => setSpread(true)}
          onMouseLeave={() => {
            if (!selectedId) setSpread(false);
          }}
        >
          <div className="absolute inset-x-0 bottom-0 flex justify-center">
            <div className="relative w-0 h-0">
              {[profileCard].map((card) => {
                const isSelected = selectedId === card.id;
                const isFlipped = flippedId === card.id;
                const isOpen = spread || isSelected;
                const x = (isOpen ? card.spreadX : card.stackX) * spreadScale;
                const y = (isOpen ? card.spreadY : card.stackY) * spreadScale;
                const rotate = isOpen ? card.spreadRotate : card.stackRotate;
                const z = isSelected ? 60 : 40;

                return (
                  <motion.div
                    key={card.id}
                    drag={!selectedId}
                    dragConstraints={dragAreaRef}
                    dragElastic={0.08}
                    onDragStart={() => {
                      dragRef.current = false;
                      setStrapStretch(0);
                      setDragRotation(0);
                    }}
                    onDrag={(_, info) => {
                      dragRef.current = true;
                      setStrapStretch(
                        Math.min(
                          150,
                          Math.max(
                            0,
                            info.offset.y * 0.9 +
                              Math.abs(info.offset.x) * 0.18,
                          ),
                        ),
                      );
                      setDragRotation(
                        Math.max(-10, Math.min(10, info.offset.x * 0.045)),
                      );
                    }}
                    onDragEnd={(_, info) => {
                      if (Math.abs(info.offset.x) > 36) {
                        setFlippedId(isFlipped ? null : card.id);
                      }
                      setStrapStretch(0);
                      setDragRotation(0);
                      setTimeout(() => {
                        dragRef.current = false;
                      }, 80);
                    }}
                    whileDrag={{
                      scale: 1.06,
                      zIndex: 70,
                      cursor: "grabbing",
                    }}
                    whileHover={{
                      scale: selectedId ? 1.02 : 1.05,
                      zIndex: 50,
                      y: -8,
                    }}
                    whileTap={{ scale: 0.98 }}
                    animate={{
                      x,
                      y,
                      rotate: rotate + dragRotation,
                      zIndex: z,
                      scale: isSelected ? 1.08 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 280, damping: 24 }}
                    onClick={() => handleCardClick(card.id)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        handleCardClick(card.id);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label={`${isFlipped ? "Tutup" : "Buka"} sisi card ${card.label}`}
                    className={`absolute bottom-0 left-0 touch-none origin-bottom ${
                      selectedId ? "cursor-pointer" : "cursor-grab"
                    } rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4`}
                    style={{
                      width: "clamp(180px, 24vw, 250px)",
                      marginLeft: "clamp(-90px, -12vw, -125px)",
                    }}
                  >
                    <div className="pointer-events-none absolute bottom-full left-1/2 z-0 flex w-20 -translate-x-1/2 translate-y-4 flex-col items-center sm:w-24">
                      <motion.div
                        animate={{
                          height: `calc(${window.innerWidth < 640 ? 8 : 11}rem + ${strapStretch}px)`,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 180,
                          damping: 18,
                        }}
                        className="relative w-8 overflow-hidden rounded-b-md border-x border-black/25 bg-[#1f2430] shadow-[inset_3px_0_3px_rgba(255,255,255,0.16),inset_-3px_0_3px_rgba(0,0,0,0.35),0_3px_6px_rgba(0,0,0,0.25)] sm:w-10"
                      >
                        <div className="absolute inset-0 opacity-55 [background:repeating-linear-gradient(118deg,transparent_0_3px,rgba(255,255,255,0.19)_3px_5px,transparent_5px_9px)]" />
                        <div className="absolute left-1/2 top-12 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-[#aeb4bd] bg-[#1f2430] shadow-[0_1px_2px_rgba(0,0,0,0.55)] sm:top-16 sm:h-5 sm:w-5" />
                      </motion.div>
                      <div className="relative -mt-1 h-9 w-14 rounded-b-full border-[4px] border-[#747b84] border-t-0 bg-transparent shadow-[0_2px_4px_rgba(0,0,0,0.35)] sm:h-11 sm:w-[4.5rem]">
                        <div className="absolute left-1/2 top-0 h-2 w-5 -translate-x-1/2 rounded-b bg-[#d5d8dc]" />
                      </div>
                      <div className="relative -mt-1 h-8 w-5 rounded-b-md border-2 border-[#4b5158] bg-gradient-to-r from-[#626a73] via-[#e1e4e7] to-[#626a73] shadow-[0_2px_4px_rgba(0,0,0,0.4)] sm:h-10 sm:w-6">
                        <div className="absolute left-1/2 top-0 h-3 w-2 -translate-x-1/2 rounded-b border-x border-b border-[#343a40]" />
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotateY: isFlipped ? 180 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 180,
                        damping: 22,
                      }}
                      className="relative z-10 aspect-[5/8] rounded-2xl shadow-[0_24px_55px_rgba(0,0,0,0.3)]"
                      style={{
                        transformStyle: "preserve-3d",
                        transformPerspective: 900,
                      }}
                    >
                      <div
                        className={`absolute inset-0 rounded-2xl overflow-hidden ring-1 transition-all duration-300 [backface-visibility:hidden] ${
                          isSelected
                            ? "ring-2 ring-accent ring-offset-2 ring-offset-white"
                            : "ring-white/30 hover:ring-white/70"
                        }`}
                      >
                        {card.type === "photo" ? (
                          <img
                            src={profileCardFront}
                            alt="Andry portfolio identification card"
                            className="w-full h-full object-contain bg-[#f1f1f1]"
                            draggable={false}
                          />
                        ) : (
                          <div
                            className={`relative w-full h-full bg-gradient-to-br ${card.gradient}`}
                          >
                            {card.accent && (
                              <div
                                className={`absolute inset-0 ${card.accent}`}
                              />
                            )}
                            {card.icon && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span
                                  className={`text-3xl md:text-4xl ${card.iconClass ?? "opacity-80"}`}
                                >
                                  {card.icon}
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-50" />
                        <div className="pointer-events-none absolute left-1/2 top-3 z-10 h-5 w-5 -translate-x-1/2 rounded-full border-[3px] border-[#d1d5db] bg-black/20 shadow-[inset_0_1px_2px_rgba(0,0,0,0.45),0_1px_2px_rgba(255,255,255,0.5)]" />
                      </div>

                      <div
                        className="absolute inset-0 overflow-hidden rounded-2xl bg-[#f1f1f1] [backface-visibility:hidden]"
                        style={{ transform: "rotateY(180deg)" }}
                      >
                        <img
                          src={profileCardBack}
                          alt="Andry portfolio identification card back"
                          className="h-full w-full object-contain"
                          draggable={false}
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedCard && (
          <HeroCardDetail
            card={selectedCard}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
