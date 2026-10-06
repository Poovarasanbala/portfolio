import { experience } from "../data/portfolio";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-24">
      <SectionTitle eyebrow="Career" title="Work Experience" />
      <div className="relative border-l border-indigo-400/30 pl-8">
        {experience.map((e) => (
          <Reveal key={e.role}>
            <span className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full bg-indigo-400 shadow-[0_0_12px_#818cf8]" />
            <div className="glass rounded-2xl p-6">
              <div className="flex flex-wrap justify-between gap-2">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">{e.role}</h3>
                  <p className="text-indigo-300">{e.company}</p>
                </div>
                <span className="text-sm text-slate-400 glass rounded-full px-3 py-1 h-fit">{e.period}</span>
              </div>
              <ul className="mt-4 space-y-2 text-slate-300 text-sm">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="text-cyan-400">▹</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}