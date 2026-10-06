import { skills } from "../data/portfolio";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <SectionTitle eyebrow="What I know" title="Skills & Technologies" />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={i * 0.07}>
            <TiltCard className="p-6 h-full">
              <h3 className="font-display text-lg font-semibold text-white mb-4">{g.group}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-200 text-sm border border-indigo-400/20">
                    {s}
                  </span>
                ))}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}