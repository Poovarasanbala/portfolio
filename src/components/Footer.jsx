import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-slate-500 text-sm">
      © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind & Three.js
    </footer>
  );
}