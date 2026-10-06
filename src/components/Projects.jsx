import { projects } from "../data/portfolio";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <SectionTitle eyebrow="My work" title="Key Projects" />
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1} className={i === 0 ? "lg:col-span-2" : ""}>
            <TiltCard className="p-7 h-full">
              <p className="text-xs uppercase tracking-widest text-cyan-400">{p.subtitle}</p>
              <h3 className="font-display text-2xl font-semibold text-white mt-1">{p.title}</h3>
              <p className="text-slate-400 mt-3 text-sm">{p.description}</p>
              <ul className="mt-4 space-y-1.5 text-slate-300 text-sm">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span className="text-indigo-400">▹</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-5">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-indigo-200">
                    {t}
                  </span>
                ))}
              </div>
              {p.code && (
                <a href={p.code} target="_blank" rel="noreferrer" className="inline-block mt-5 text-sm text-indigo-300 hover:text-white">
                  View Code →
                </a>
              )}
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}