"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Full-width page banner with a parallax photo.
 *
 * The image block is rendered taller than the banner (OVERHANG on each side) and
 * drifts upward as the banner scrolls past, so more of a tall photo is revealed.
 * Several source photos are portrait, and a fixed crop of those could only ever
 * show one horizontal slice — this shows more of them instead.
 *
 * Movement is capped at OVERHANG so the image can never pull away from an edge.
 */
const OVERHANG = 24; // % of banner height, top and bottom
const TRAVEL = 16; // % of the image block's own height (16% of 148% ≈ 23.7% < OVERHANG)

export default function HeroBanner({
  src,
  alt,
  position = "center",
  children,
}: {
  src: string;
  alt: string;
  position?: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `-${TRAVEL}%`]);

  return (
    <div
      ref={ref}
      className="relative h-56 w-full overflow-hidden bg-ink-900 sm:h-72 lg:h-[22rem]"
    >
      <motion.div
        style={{
          top: `-${OVERHANG}%`,
          height: `${100 + OVERHANG * 2}%`,
          ...(reduceMotion ? {} : { y }),
        }}
        className="absolute inset-x-0 will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: position }}
        />
      </motion.div>

      {/*
        Darkens only the lower half, where the heading sits. An even overlay
        crushed the photo — several sources are mid-tone, and on wide desktop
        banners the visible band is darker still, which read as a black bar.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/45 to-transparent"
      />

      <div className="absolute inset-x-0 bottom-0">
        <div className="container-site pb-6 sm:pb-8">{children}</div>
      </div>
    </div>
  );
}
