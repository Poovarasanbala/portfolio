import { motion } from "framer-motion";
import { profile } from "../data/portfolio";
import Hero3D from "./Hero3D";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen max-w-6xl mx-auto px-6 pt-28 pb-12 grid md:grid-cols-2 items-center gap-8">
      <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
        <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1 text-sm text-indigo-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to work
        </span>

        <p className="mt-6 text-slate-400">Hi, I'm</p>
        <h1 className="font-display text-5xl sm:text-6xl font-bold text-white leading-tight">
          <span className="text-gradient">{profile.name}</span>
        </h1>
        <h2 className="font-display text-2xl sm:text-3xl text-slate-200 mt-2">{profile.title}</h2>
        <p className="text-slate-400 mt-4 max-w-md">{profile.tagline}</p>
        <p className="text-slate-500 text-sm mt-3">📍 {profile.location}</p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="px-6 py-3 rounded-xl bg-linear-to-r from-indigo-500 to-purple-500 text-white font-medium shadow-lg shadow-indigo-500/30 hover:scale-105 transition">
            View Projects
          </a>
          <a href={profile.resume} download className="px-6 py-3 rounded-xl glass text-slate-100 hover:border-indigo-400/50 hover:scale-105 transition">
            Download Resume
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="h-[380px] sm:h-[480px]"
      >
        <Hero3D />
      </motion.div>
    </section>
  );
}