import { useState } from "react";

const links = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 glass border-x-0 border-t-0">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-xl font-bold text-gradient">Poovarasan B</a>

        <ul className="hidden md:flex gap-8 text-sm">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-slate-300 hover:text-white transition">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white text-2xl" aria-label="Menu">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <ul className="md:hidden px-6 pb-4 space-y-3">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)} className="block text-slate-300">
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}