import ContactButtons from "@/components/ContactButtons";
import HeroBanner from "@/components/HeroBanner";
import RegLookupForm from "@/components/RegLookupForm";
import Reveal from "@/components/Reveal";
import ReviewStrip from "@/components/ReviewStrip";

const DEFAULT_WA_MESSAGE = "Hi Ignition Autocare! I'd like to enquire about your fleet services.";

export default function PageHero({
  title,
  intro,
  formLabel = "Book a Service Online",
  contactCta = false,
  alsoBook = false,
  whatsappMessage = DEFAULT_WA_MESSAGE,
  image,
  imageAlt,
  imagePosition = "center",
  service,
}: {
  title: string;
  intro: string;
  formLabel?: string;
  /** Show Call + WhatsApp buttons instead of the reg form. */
  contactCta?: boolean;
  /** With contactCta, also show the reg form beneath the buttons. */
  alsoBook?: boolean;
  /** Pre-filled WhatsApp text for the contact buttons. */
  whatsappMessage?: string;
  /** Booking-app service slug to pre-select when the reg form is submitted. */
  service?: string;
  /** Optional banner photo. Without it the hero renders exactly as before. */
  image?: string;
  imageAlt?: string;
  /**
   * CSS object-position for the banner. Several source photos are portrait, so a
   * wide banner shows only a horizontal band of them — this picks which band.
   */
  imagePosition?: string;
}) {
  const booking = (
    <>
      <h2 className="mb-3 text-lg font-bold text-ink-900">{formLabel}</h2>
      {contactCta ? (
        <>
          <ContactButtons message={whatsappMessage} />
          {alsoBook && (
            <div className="mt-5 border-t border-ink-900/5 pt-5">
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink-500">
                Or book in online with your reg
              </p>
              <RegLookupForm compact service={service} />
            </div>
          )}
        </>
      ) : (
        <RegLookupForm service={service} />
      )}
      {/* Social proof sits directly against the reg lookup, above the fold */}
      <ReviewStrip className="mt-4" />
    </>
  );

  // No photo: original hero, unchanged.
  if (!image) {
    return (
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl"
        />
        <div className="container-site relative py-10 sm:py-16">
          <Reveal className="max-w-3xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-500">{intro}</p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8 max-w-xl rounded-3xl border border-ink-900/5 bg-white p-6 shadow-card">
            {booking}
          </Reveal>
        </div>
      </section>
    );
  }

  // Photo: full-width banner with the heading over it, mirroring the homepage hero.
  return (
    <section>
      <HeroBanner src={image} alt={imageAlt ?? title} position={imagePosition}>
        <Reveal className="max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight text-white drop-shadow-sm sm:text-4xl lg:text-5xl">
            {title}
          </h1>
        </Reveal>
      </HeroBanner>

      <div className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl"
        />
        <div className="container-site relative py-10 sm:py-14">
          <Reveal className="max-w-3xl">
            <p className="text-lg leading-relaxed text-ink-500">{intro}</p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8 max-w-xl rounded-3xl border border-ink-900/5 bg-white p-6 shadow-card">
            {booking}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
