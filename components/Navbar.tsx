"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS, SERVICE_LINKS, SITE } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="container-site flex h-20 items-center justify-between" aria-label="Main">
        <Link href="/" className="flex items-center gap-2" aria-label="Ignition Autocare home">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-white">
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
              <path
                d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="text-lg font-extrabold tracking-tight">
            Ignition <span className="text-brand-600">Autocare</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          <Link
            href="/"
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-brand-50 hover:text-brand-600 ${
              isActive("/") ? "text-brand-600" : "text-ink-700"
            }`}
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
              onClick={() => setServicesOpen((o) => !o)}
              className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-brand-50 hover:text-brand-600 ${
                SERVICE_LINKS.some((s) => isActive(s.href)) ? "text-brand-600" : "text-ink-700"
              }`}
            >
              Services
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 top-full w-64 rounded-2xl border border-ink-900/5 bg-white p-2 shadow-card-hover"
                >
                  {SERVICE_LINKS.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition-colors hover:bg-brand-50 hover:text-brand-600 ${
                        isActive(s.href) ? "text-brand-600" : "text-ink-700"
                      }`}
                    >
                      {s.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {NAV_LINKS.filter((l) => l.href !== "/").map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-brand-50 hover:text-brand-600 ${
                isActive(l.href) ? "text-brand-600" : "text-ink-700"
              }`}
            >
              {l.label}
            </Link>
          ))}

          <a href={SITE.phoneHref} className="btn-primary ml-3 px-5 py-2.5">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
            </svg>
            {SITE.phone}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl text-ink-900 transition-colors hover:bg-brand-50 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <div className="relative h-5 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 rounded bg-current transition-all duration-300 ${
                mobileOpen ? "top-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-6 rounded bg-current transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-6 rounded bg-current transition-all duration-300 ${
                mobileOpen ? "top-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ink-900/5 bg-white shadow-lg lg:hidden"
          >
            <div className="container-site flex max-h-[calc(100vh-5rem)] flex-col gap-1 overflow-y-auto py-4">
              <Link href="/" className="rounded-xl px-4 py-3 text-base font-semibold text-ink-700 hover:bg-brand-50 hover:text-brand-600">
                Home
              </Link>
              <button
                type="button"
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen((o) => !o)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-ink-700 hover:bg-brand-50 hover:text-brand-600"
              >
                Services
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`h-5 w-5 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    {SERVICE_LINKS.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block rounded-xl py-2.5 pl-8 pr-4 text-sm font-medium text-ink-500 hover:bg-brand-50 hover:text-brand-600"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              <Link href="/about" className="rounded-xl px-4 py-3 text-base font-semibold text-ink-700 hover:bg-brand-50 hover:text-brand-600">
                About Us
              </Link>
              <Link href="/contact-us" className="rounded-xl px-4 py-3 text-base font-semibold text-ink-700 hover:bg-brand-50 hover:text-brand-600">
                Contact Us
              </Link>
              <a href={SITE.phoneHref} className="btn-primary mt-2 w-full">
                Call {SITE.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
