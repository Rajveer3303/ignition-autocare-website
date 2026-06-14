const cls = "h-6 w-6";

export const WrenchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 5.6 21a2.1 2.1 0 0 1-3-3l5.84-5.82m2.98 2.99a6 6 0 0 0 7.94-7.94l-3.5 3.5-2.99-3 3.5-3.5a6 6 0 0 0-7.94 7.95" />
  </svg>
);

export const ShieldCheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M12 3l7.5 3v5.25c0 4.97-3.2 8.4-7.5 9.75-4.3-1.35-7.5-4.78-7.5-9.75V6L12 3z" />
  </svg>
);

export const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0z" />
  </svg>
);

export const TagIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.57 3H5a2 2 0 0 0-2 2v4.57a2 2 0 0 0 .59 1.42l8.7 8.7a2.1 2.1 0 0 0 2.98 0l4.42-4.42a2.1 2.1 0 0 0 0-2.98l-8.7-8.7A2 2 0 0 0 9.57 3z" />
    <circle cx="8" cy="8" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

export const TruckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 7.5h12v9h-12v-9zm12 2.25h3.75l3 3v3.75h-3M6 19.5a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8zm11 0a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8z" />
  </svg>
);

export const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.6c0 5.05-7.04 9.93-8.6 10.95a.73.73 0 0 1-.8 0C10.04 18.53 3 13.65 3 8.6A4.85 4.85 0 0 1 7.85 3.75c1.7 0 3.2.86 4.15 2.17a5.12 5.12 0 0 1 4.15-2.17A4.85 4.85 0 0 1 21 8.6z" />
  </svg>
);

export const CarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13m-14 0h14m-14 0a2 2 0 0 0-2 2v3h2m16-5a2 2 0 0 1 2 2v3h-2m-12 0a1.75 1.75 0 1 1-3.5 0m15.5 0a1.75 1.75 0 1 1-3.5 0" />
  </svg>
);

export const GaugeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15l3.5-5.5M5.2 18a9 9 0 1 1 13.6 0M12 6.5v.01M7 8.6l.01.01M17 8.6l-.01.01" />
  </svg>
);

export const WheelIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls} aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3" />
    <path strokeLinecap="round" d="M12 3v6m0 6v6m9-9h-6m-6 0H3" />
  </svg>
);

export const DiscIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls} aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4.5" />
    <path strokeLinecap="round" d="M12 7.5v.01M16.5 12h-.01M12 16.5v.01M7.5 12h-.01" />
  </svg>
);

export const CheckIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

export const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={cls} aria-hidden="true">
    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
  </svg>
);

export const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

export const PinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={cls} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.14-7.5 11.25-7.5 11.25S4.5 17.64 4.5 10.5a7.5 7.5 0 1115 0z" />
  </svg>
);

export const StarIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M11.48 3.5c.16-.5.88-.5 1.04 0l1.9 5.83a.55.55 0 00.52.38h6.13c.53 0 .75.68.32 1l-4.96 3.6a.55.55 0 00-.2.61l1.9 5.83c.16.5-.41.92-.84.6l-4.96-3.6a.55.55 0 00-.65 0l-4.96 3.6c-.43.32-1-.1-.84-.6l1.9-5.83a.55.55 0 00-.2-.62L2.6 10.72c-.42-.31-.2-1 .33-1h6.13a.55.55 0 00.52-.37l1.9-5.84z" />
  </svg>
);

export const GoogleIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
    />
    <path
      fill="#FF3D00"
      d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l6.19 5.238C39.971 36.205 44 31 44 24c0-1.341-.138-2.65-.389-3.917z"
    />
  </svg>
);
