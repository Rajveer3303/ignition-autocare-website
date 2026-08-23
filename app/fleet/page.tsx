import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import FeatureCard from "@/components/FeatureCard";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import TrustedGarage from "@/components/TrustedGarage";
import { ShieldCheckIcon, GaugeIcon, WrenchIcon, CarIcon, TagIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Fleet & Business Customers | Ignition Autocare — Multi-Vehicle Servicing",
  description:
    "Fleet MOTs, servicing and repairs for local businesses. Priority booking, account terms, collection and delivery at scale. Talk to us about your fleet needs.",
};

const FLEET_SERVICES = [
  {
    title: "Fleet MOT Testing",
    text: "Keep your whole fleet legal with coordinated MOT testing. We can schedule multiple vehicles efficiently and notify you when each is due — no missed tests, no compliance gaps.",
    icon: <ShieldCheckIcon />,
  },
  {
    title: "Multi-Vehicle Servicing",
    text: "From a single van to a pool of company cars, we work around your operational needs. Multiple bookings, staggered schedules, same consistent standard of work.",
    icon: <CarIcon />,
  },
  {
    title: "Collection & Delivery",
    text: "Your drivers don't need to bring vehicles to us. We collect, service, and return — minimising downtime and keeping your team on the road where they should be.",
    icon: <WrenchIcon />,
  },
  {
    title: "Priority Booking",
    text: "Fleet customers get priority access to our diaries. If a vehicle breaks down or needs urgent attention, we'll find a way to get it in quickly.",
    icon: <GaugeIcon />,
  },
  {
    title: "Account Terms",
    text: "[VERIFY: confirm whether account/invoice terms are available for fleet customers and if so, what the arrangement is]",
    icon: <TagIcon />,
  },
  {
    title: "Service Reminders",
    text: "We track your fleet's service and MOT schedules and remind you when each vehicle is due — so nothing slips through and nothing catches you out.",
    icon: <ShieldCheckIcon />,
  },
];

const WHO_WE_WORK_WITH = [
  "Van fleets and delivery operators",
  "Courier and logistics companies",
  "Company car pools",
  "NHS and care sector vehicles",
  "Local authorities and public sector",
  "Construction and trade businesses",
];

const FAQS = [
  {
    q: "How many vehicles do you need to qualify as a fleet customer?",
    a: "[VERIFY: confirm minimum fleet size or whether any business with more than one vehicle qualifies]",
  },
  {
    q: "Can you handle mixed fleets — cars and vans together?",
    a: "Yes. We work on all makes and models of cars and vans. A mixed fleet isn't a problem — we maintain the same standard across all vehicle types.",
  },
  {
    q: "Do you offer fixed-price fleet servicing?",
    a: "[VERIFY: confirm whether fixed-price or agreed-rate contracts are available for fleet customers]",
  },
  {
    q: "Can you manage MOT compliance across a whole fleet?",
    a: "Yes. We can track each vehicle's MOT due date and contact you in advance to schedule tests. No missed MOTs, no vehicles going out of compliance.",
  },
  {
    q: "What areas do you cover for fleet collection and delivery?",
    a: "We cover a 10-mile radius of our Castleford garage for collection and delivery. If you're unsure whether your site is in range, call us on 01977 807050.",
  },
];

export default function FleetPage() {
  return (
    <>
      <PageHero
        title="Fleet & Business Customers"
        intro="Running a fleet means keeping vehicles on the road, compliant and costing what you expect. We work with local businesses — from single-van operators to larger fleets — offering coordinated servicing, priority booking and collection & delivery so your vehicles are back in use as fast as possible."
        formLabel="Enquire About Fleet Services"
      />

      <section className="container-site py-16 sm:py-20">
        <SectionHeader
          eyebrow="What We Offer"
          title="Fleet Services That Work Around You"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FLEET_SERVICES.map((s, i) => (
            <FeatureCard key={s.title} {...s} delay={(i % 3) * 0.1} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="container-site py-16 sm:py-20">
          <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeader
                eyebrow="Who We Work With"
                title="We Work With All Types of Fleet"
                center={false}
              />
              <ul className="mt-8 space-y-3">
                {WHO_WE_WORK_WITH.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-ink-700">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Fleet enquiry form */}
            <Reveal>
              <div className="rounded-2xl border border-ink-900/5 bg-white p-6 shadow-card sm:p-8">
                <h3 className="font-heading text-xl font-bold text-ink-900">Fleet Enquiry</h3>
                <p className="mt-2 text-sm text-ink-500">
                  Tell us about your fleet and we&apos;ll be in touch to discuss how we can help.
                </p>
                <form
                  name="fleet-enquiry"
                  method="POST"
                  action="/contact-us?success=1"
                  data-netlify="true"
                  className="mt-6 space-y-4"
                >
                  <input type="hidden" name="form-name" value="fleet-enquiry" />
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-ink-700">
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      className="mt-1.5 w-full rounded-xl border border-ink-900/15 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-ink-700">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      className="mt-1.5 w-full rounded-xl border border-ink-900/15 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="fleet-phone" className="block text-sm font-medium text-ink-700">
                      Phone Number
                    </label>
                    <input
                      id="fleet-phone"
                      name="phone"
                      type="tel"
                      required
                      className="mt-1.5 w-full rounded-xl border border-ink-900/15 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="fleet-size" className="block text-sm font-medium text-ink-700">
                      Fleet Size (approximate)
                    </label>
                    <select
                      id="fleet-size"
                      name="fleet_size"
                      className="mt-1.5 w-full rounded-xl border border-ink-900/15 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300"
                    >
                      <option value="">Select fleet size</option>
                      <option value="2-5">2–5 vehicles</option>
                      <option value="6-15">6–15 vehicles</option>
                      <option value="16-30">16–30 vehicles</option>
                      <option value="30+">30+ vehicles</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="fleet-message" className="block text-sm font-medium text-ink-700">
                      What do you need? (optional)
                    </label>
                    <textarea
                      id="fleet-message"
                      name="message"
                      rows={3}
                      placeholder="e.g. MOTs for a van fleet, regular servicing for company cars..."
                      className="mt-1.5 w-full rounded-xl border border-ink-900/15 px-4 py-2.5 text-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full py-3">
                    Send Enquiry
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <TrustedGarage text="Based in Castleford. Priority booking, collection & delivery, and fleet scheduling built around your operational needs. Call 01977 807050 to talk fleet." />

      <section className="container-site py-16 sm:py-20">
        <SectionHeader eyebrow="FAQ" title="Fleet Questions" />
        <Reveal className="mx-auto mt-12 max-w-3xl">
          <FAQAccordion faqs={FAQS} />
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
