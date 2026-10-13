"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  className,
  immediate = false,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  /**
   * Animate in on page load instead of on scroll. Use for hero content: an item
   * sitting at the bottom edge of the first screen never "enters" the viewport,
   * so a scroll-triggered reveal left it invisible until the visitor scrolled.
   */
  immediate?: boolean;
}) {
  const reduce = useReducedMotion();
  const shown = { opacity: 1, y: 0 };
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      {...(immediate
        ? { animate: shown }
        : {
            whileInView: shown,
            // Trigger as soon as any part is on screen. The previous -80px margin
            // kept items in the bottom 80px of the screen hidden until a scroll.
            viewport: { once: true, margin: "0px" },
          })}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
