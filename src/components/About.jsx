import { profile } from "../data/portfolio";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const stats = [
  { value: "5+", label: "ERP Modules Delivered" },
  { value: "3", label: "Languages: PHP, JS, Python" },
  { value: "2026", label: "Professional Since" },
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <SectionTitle eyebrow="Introduction" title="About Me" />
      <Reveal>
        <p className="text-slate-300 leading-relaxed max-w-3xl">{profile.about}</p>
      </Reveal>
      <div className="grid sm:grid-cols-3 gap-6 mt-10">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1}>
            <TiltCard className="p-6 text-center">
              <p className="font-display text-4xl font-bold text-gradient">{s.value}</p>
              <p className="text-slate-400 text-sm mt-2">{s.label}</p>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}