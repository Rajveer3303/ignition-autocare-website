import Reveal from "@/components/Reveal";

export default function SectionHeader({
  eyebrow,
  title,
  intro,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {intro && <p className="mt-4 text-base leading-relaxed text-ink-500">{intro}</p>}
    </Reveal>
  );
}
