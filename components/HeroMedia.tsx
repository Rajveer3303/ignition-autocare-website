"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";

const PHOTOS = [
  { src: "/images/garage-front.jpg", alt: "Ignition Autocare garage front entrance in Castleford" },
  { src: "/images/workshop-mural.jpg", alt: "Inside the Ignition Autocare workshop in Castleford" },
  { src: "/images/garage-aerial.jpg", alt: "Aerial view of the Ignition Autocare garage in Castleford" },
  { src: "/images/workshop-lifts.jpg", alt: "Vehicles on ramps inside the Ignition Autocare workshop" },
  { src: "/images/reception.jpg", alt: "Customer reception area at Ignition Autocare" },
];

const AUTOPLAY_INTERVAL = 4500;

const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

export default function HeroMedia() {
  const [videoEnded, setVideoEnded] = useState(false);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const goToNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % PHOTOS.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + PHOTOS.length) % PHOTOS.length);
  };

  useEffect(() => {
    if (!videoEnded) return;
    const timer = setInterval(goToNext, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [videoEnded, index]);

  return (
    <>
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.3}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50) goToNext();
              else if (info.offset.x > 50) goToPrev();
            }}
            className="absolute inset-0 h-full w-full cursor-grab active:cursor-grabbing"
          >
            <Image
              src={PHOTOS[index].src}
              alt={PHOTOS[index].alt}
              fill
              priority={index === 0}
              className="object-cover"
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>

        <div
          className={`absolute inset-x-0 bottom-4 z-10 flex justify-center gap-1.5 transition-opacity duration-700 ${
            videoEnded ? "opacity-100" : "opacity-0"
          }`}
        >
          {PHOTOS.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Show photo ${i + 1}`}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-white" : "w-1.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      <video
        className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          videoEnded ? "opacity-0" : "opacity-100"
        }`}
        autoPlay
        muted
        playsInline
        onEnded={() => setVideoEnded(true)}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
    </>
  );
}
