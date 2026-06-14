import { ReactNode } from "react";
import Reveal from "@/components/Reveal";

export default function FeatureCard({
  icon,
  title,
  text,
  delay = 0,
}: {
  icon?: ReactNode;
  title: string;
  text: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="group h-full rounded-3xl border border-ink-900/5 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover">
        {icon && (
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-bold text-ink-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-500">{text}</p>
      </div>
    </Reveal>
  );
}
