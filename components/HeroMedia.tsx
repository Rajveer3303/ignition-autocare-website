"use client";

import { useState } from "react";
import Image from "next/image";

export default function HeroMedia() {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <>
      <Image
        src="/images/garage-exterior.jpg"
        alt="Ignition Autocare garage exterior in Castleford"
        fill
        priority
        className="object-cover"
      />
      <video
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
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
