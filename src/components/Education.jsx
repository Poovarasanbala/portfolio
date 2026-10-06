import { education, certifications, academicProjects } from "../data/portfolio";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-24">
      <SectionTitle eyebrow="Background" title="Education & Certifications" />

      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal>
          <TiltCard className="p-6 h-full">
            <p className="text-xs uppercase tracking-widest text-cyan-400">Education</p>
            <h3 className="font-display text-xl font-semibold text-white mt-1">{education.degree}</h3>
            <p className="text-indigo-300 mt-1">{education.school}</p>
            <p className="text-slate-400 text-sm">{education.period}</p>
          </TiltCard>
        </Reveal>

        <Reveal delay={0.1}>
          <TiltCard className="p-6 h-full">
            <p className="text-xs uppercase tracking-widest text-cyan-400">Certifications</p>
            <ul className="mt-3 space-y-2 text-slate-300 text-sm">
              {certifications.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="text-indigo-400">✓</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </TiltCard>
        </Reveal>
      </div>

      <h3 className="font-display text-xl font-semibold text-white mt-14 mb-6">Academic Projects</h3>
      <div className="grid gap-6 sm:grid-cols-2">
        {academicProjects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <TiltCard className="p-6 h-full">
              <h4 className="font-semibold text-white">{p.title}</h4>
              <p className="text-slate-400 text-sm mt-2">{p.description}</p>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}