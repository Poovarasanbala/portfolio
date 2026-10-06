import { profile } from "../data/portfolio";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-24">
      <SectionTitle eyebrow="Contact" title="Get In Touch" />
      <Reveal>
        <div className="glass rounded-3xl p-10 text-center">
          <p className="text-slate-300 max-w-md mx-auto">
            Open to job opportunities and freelance work. Let's build something great together.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="inline-block mt-6 px-8 py-3 rounded-xl bg-linear-to-r from-indigo-500 to-purple-500 text-white font-medium shadow-lg shadow-indigo-500/30 hover:scale-105 transition"
          >
            Say Hello
          </a>
          <div className="mt-8 space-y-1 text-slate-300 text-sm">
            <p>✉️ {profile.email}</p>
            <p>📞 {profile.phone}</p>
          </div>
          <div className="flex justify-center gap-6 mt-6 text-sm">
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-indigo-300 hover:text-white">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-indigo-300 hover:text-white">LinkedIn</a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}