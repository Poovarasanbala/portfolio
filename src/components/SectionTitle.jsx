import Reveal from "./Reveal";

export default function SectionTitle({ eyebrow, title }) {
  return (
    <Reveal className="mb-12">
      <p className="text-sm tracking-widest uppercase text-indigo-400 mb-2">{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">{title}</h2>
      <div className="mt-4 h-1 w-16 rounded bg-linear-to-r from-indigo-400 to-cyan-400" />
    </Reveal>
  );
}