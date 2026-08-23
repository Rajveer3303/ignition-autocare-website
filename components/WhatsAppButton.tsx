"use client";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

const WA_NUMBER = "447401302273";
const WA_MESSAGE = encodeURIComponent(
  "Hi Ignition Autocare! I'd like to enquire about your services. Can you help?"
);
const WA_HREF = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function FloatingButtons() {
  const [showLabel, setShowLabel] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowLabel(false), 10000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3">
      {/* Call button */}
      <a
        href={SITE.phoneHref}
        aria-label="Call Ignition Autocare"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md border border-black/10 transition hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.45 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.07 6.07l.91-.91a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      </a>

      {/* WhatsApp button + label */}
      <div className="flex items-center gap-2">
        {showLabel && (
          <span className="rounded-full border border-black/20 bg-white/90 px-3 py-1 text-xs text-black/60 shadow-sm whitespace-nowrap">
            Contact us on WhatsApp
          </span>
        )}
        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="flex h-11 w-11 items-center justify-center rounded-full shadow-md border border-black/10 transition hover:scale-110"
          style={{ backgroundColor: "#25D366" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="22" height="22" fill="white">
            <path d="M16.003 3C9.376 3 4 8.373 4 14.997c0 2.17.584 4.21 1.6 5.97L4 29l8.242-1.573A12.94 12.94 0 0 0 16.003 28C22.63 28 28 22.627 28 16.003 28 9.376 22.63 3 16.003 3zm0 23.636a10.6 10.6 0 0 1-5.41-1.48l-.387-.23-4.894.934.976-4.77-.253-.4A10.582 10.582 0 0 1 4.364 16c0-6.415 5.223-11.636 11.639-11.636S27.636 9.585 27.636 16c0 6.414-5.222 11.636-11.633 11.636zm6.382-8.713c-.35-.175-2.07-1.02-2.39-1.136-.32-.116-.553-.175-.786.175-.233.35-.9 1.136-1.103 1.37-.203.233-.406.262-.756.087-.35-.175-1.477-.544-2.814-1.736-1.04-.927-1.742-2.072-1.946-2.422-.203-.35-.022-.54.153-.714.157-.157.35-.408.524-.612.175-.203.233-.35.35-.583.116-.233.058-.437-.029-.612-.087-.175-.786-1.894-1.078-2.594-.284-.68-.573-.587-.786-.598l-.67-.012c-.233 0-.612.087-.932.437-.32.35-1.223 1.194-1.223 2.913s1.252 3.38 1.427 3.613c.175.233 2.464 3.764 5.972 5.277.835.36 1.487.576 1.994.737.838.267 1.601.23 2.204.14.672-.1 2.07-.845 2.363-1.663.291-.816.291-1.516.203-1.663-.087-.146-.32-.233-.67-.408z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
