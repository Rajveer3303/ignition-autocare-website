"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Full-width page banner whose photo holds back as the page scrolls, so the
 * banner window travels across it and progressively reveals more of the image.
 *
 * The image block is twice the banner height with half a banner of overhang
 * above and below, and drifts by at most that overhang — so the photo can never
 * pull away from an edge. At 2x banner height the block is close to the aspect
 * of the portrait sources (recovery truck 0.79:1, tyre stock 0.67:1), which
 * keeps cropping minimal; sizing the image to the viewport instead pinned it
 * perfectly still but cropped ~41% off the sides and revealed only sky.
 */
const OVERHANG = 50; // % of banner height, above and below
const TRAVEL = 25; // % of the image block's own height (25% of 200% = OVERHANG)

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
