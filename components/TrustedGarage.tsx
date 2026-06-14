import Image from "next/image";
import RegLookupForm from "@/components/RegLookupForm";
import Reveal from "@/components/Reveal";

export default function TrustedGarage({
  text = "We combine precision, experience, and modern equipment to deliver a service you can trust. With 29 years in the trade and a brand-new facility in Castleford, we offer honest assessments, clear pricing, and dealership-level care at independent prices.",
}: {
  text?: string;
}) {
  return (
    <section className="bg-slate-50">
      <div className="container-site grid items-center gap-12 py-16 lg:grid-cols-2">
        <Reveal>
          <Image
            src="/images/mechanic-about.svg"
            unoptimized
            alt="Ignition Autocare technician working in the Castleford garage"
            width={800}
            height={600}
            className="w-full rounded-3xl shadow-card"
          />
        </Reveal>
        <Reveal delay={0.15}>
          <span className="section-eyebrow">Trusted Garage in Castleford</span>
          <h2 className="section-title">Book a Service Online</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-500">{text}</p>
          <div className="mt-7">
            <RegLookupForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
