import type { Metadata } from "next";
import Image from "next/image";
import ContactButtons from "@/components/ContactButtons";
import FeatureCard from "@/components/FeatureCard";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import TapToPlayVideo from "@/components/TapToPlayVideo";
import {
  CheckIcon,
  ClockIcon,
  HeartIcon,
  ShieldCheckIcon,
  StarIcon,
  WrenchIcon,
} from "@/components/Icons";
import { REVIEW_STATS } from "@/lib/site";
import { TEAM } from "@/lib/team";

export const metadata: Metadata = {
  title: "Meet the Team | Level 3 Qualified Technicians in Castleford | Ignition Autocare",
  description:
    "Meet the Ignition Autocare team in Castleford. Level 3 qualified technicians with experience at some of the biggest names in the motor trade — Bosch Approved, fully transparent and here to help.",
};

const STATS = [
  { stat: "Level 3", label: "Qualified technicians" },
  { stat: "29+ yrs", label: "Motor trade expertise" },
  { stat: "Bosch", label: "Approved & assessed 2026" },
  { stat: `${REVIEW_STATS.rating}★`, label: `${REVIEW_STATS.count} Google reviews` },
];

const VALUES = [
  {
    title: "Level 3 Qualified",
    text: "Every technician on our team is Level 3 qualified, with the training to diagnose, service and repair modern vehicles correctly — first time.",
    icon: <ShieldCheckIcon />,
  },
  {
    title: "Big-Name Experience",
    text: "Our team has worked for some of the biggest names in the motor trade, and brings that experience and those standards to every car that comes through our doors.",
    icon: <WrenchIcon />,
  },
  {
    title: "Complete Transparency",
    text: "A clear quote before any work starts, nothing carried out without your go-ahead, and a video health check with every service. No surprises on the invoice.",
    icon: <CheckIcon />,
  },
  {
    title: "Quick & Efficient",
    text: "We respect your time. Every job is planned so your car is back with you as quickly as possible, and we keep you updated so you always know where things stand.",
    icon: <ClockIcon />,
  },
  {
    title: "Professional Throughout",
    text: "From your first call to handing back your keys, you'll deal with a friendly, professional team who treat your car with the same care as their own.",
    icon: <StarIcon />,
  },
  {
    title: "Here to Help",
    text: "A warning light, a strange noise or a failed MOT — whatever the problem, talk to us. You'll always get honest advice, even if the answer is that nothing needs doing.",
    icon: <HeartIcon />,
  },
];


export default function MeetTheTeamPage() {
  return (
    <>
      <PageHero
        title="Meet the Team"
        intro="Behind every MOT, service and repair at Ignition Autocare is a team of qualified, experienced professionals. We take pride in doing the job properly, explaining everything clearly, and getting you back on the road without fuss."
        formLabel="Book with Our Team"
        image="/images/garage/team-2026-v2.jpg"
        imageAlt="The Ignition Autocare team outside the Castleford garage"
        imagePosition="center 50%"
      />

      {/* Credentials strip */}
      <section className="bg-brand-600">
        <div className="container-site grid grid-cols-2 gap-6 py-10 text-center sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-extrabold text-white sm:text-3xl">{s.stat}</p>
              <p className="mt-1 text-sm font-medium text-brand-100">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who we are */}
      <section className="container-site py-10 sm:py-16">
        <SectionHeader eyebrow="Our People" title="The People Behind Every Job" />
        <Reveal className="mx-auto mt-6 max-w-3xl space-y-4 text-center text-base leading-relaxed text-ink-600 sm:text-lg">
          <p>
            Our technicians are Level 3 qualified and have built their experience working for some
            of the biggest names in the motor trade. That background shows in the way we work:
            methodical, efficient and to a consistently high standard — whether it&apos;s a routine
            MOT or a complex diagnostic fault.
          </p>
          <p>
            We believe you should never have to wonder what&apos;s being done to your car, or why.
            Every job is quoted before work begins, nothing is carried out without your approval,
            and you&apos;ll always get a straight answer from people who know what they&apos;re
            talking about.
          </p>
        </Reveal>
      </section>

      {/* What to expect */}
      <section className="bg-slate-50">
        <div className="container-site py-10 sm:py-16">
          <SectionHeader eyebrow="Our Standards" title="What You Can Expect From Us" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <FeatureCard key={v.title} {...v} delay={(i % 3) * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* The team */}
      <section className="container-site py-10 sm:py-16">
        <SectionHeader eyebrow="The Team" title="Friendly Faces, Expert Hands" />
        <Reveal className="mt-10 overflow-hidden rounded-3xl shadow-card">
          <Image
            src="/images/garage/team-2026-v2.jpg"
            alt="The Ignition Autocare team with our courtesy cars outside the Castleford garage"
            width={1600}
            height={1200}
            className="max-h-[480px] w-full object-cover"
            style={{ objectPosition: "center 62%" }}
          />
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <Reveal key={m.slug} delay={(i % 4) * 0.08} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-ink-900/5 bg-white p-2 shadow-card sm:p-4">
                <TapToPlayVideo
                  src={`/videos/team-${m.slug}.mp4`}
                  poster={`/images/garage/team-${m.slug}-poster.jpg`}
                  label={`Play video introduction from ${m.name}, ${m.role}`}
                  aspect="576 / 1024"
                  className="w-full"
                />
                <div className="px-1 pb-2 pt-3 sm:px-2 sm:pt-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-600 sm:text-sm">{m.role}</p>
                  <h3 className="mt-1 font-heading text-lg font-extrabold text-ink-900 sm:text-xl">{m.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-ink-600 sm:text-sm">{m.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Here to help */}
      <section className="bg-ink-900">
        <div className="container-site py-10 sm:py-16">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">Any Problem?</p>
            <h2 className="mt-2 font-heading text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              We&apos;re Here to Help
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Whatever&apos;s going on with your car, talk to our team. We&apos;ll listen, explain
              your options in plain English and give you an honest recommendation.
            </p>
            <ContactButtons
              message="Hi Ignition Autocare! I have a question about my car."
              size="lg"
              className="mt-8 justify-center"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
