"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";

const PHOTOS = [
  { src: "/images/garage/exterior-aerial.jpg", alt: "Aerial view of Ignition Autocare garage in Castleford" },
  { src: "/images/garage/workshop-green-car.jpg", alt: "Vehicle on the ramp inside the Ignition Autocare workshop" },
  { src: "/images/garage/exterior-front.jpg", alt: "Ignition Autocare garage front entrance in Castleford" },
  { src: "/images/garage/workshop-red-car.jpg", alt: "Cars on ramps inside the Ignition Autocare workshop" },
  { src: "/images/garage/interior-1.jpg", alt: "Interior of the Ignition Autocare workshop" },
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

      {/*
        The hero container is shorter in aspect than the 16:9 source, so object-cover
        crops horizontally (~7% per side at 375px, ~25% total at 320px). The video is
        trimmed to end on the garage frontage, where the "IGNITION MOT·TYRES·AUTOCARE"
        signage sits at roughly 70-91% across the frame. Centre-cropping clipped that
        signage on small phones; biasing to 65% keeps it fully visible down to 320px.
      */}
      <video
        className={`pointer-events-none absolute inset-0 h-full w-full object-cover object-[65%_center] transition-opacity duration-1000 ${
          videoEnded ? "opacity-0" : "opacity-100"
        }`}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={() => setVideoEnded(true)}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
    </>
  );
}
