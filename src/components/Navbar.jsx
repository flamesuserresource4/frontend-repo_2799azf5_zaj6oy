import { useEffect, useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.4 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${
      scrolled ? 'backdrop-blur-md bg-white/60 dark:bg-zinc-900/60 shadow-sm' : 'bg-transparent'
    }`}>
      {/* Scroll progress bar */}
      <motion.div style={{ scaleX }} className="origin-left h-[2px] bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-400" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-emerald-400 text-white shadow">
              <Rocket size={18} />
            </span>
            <span className="text-lg">PRIMExALBIN</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#home" className="text-zinc-700 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-zinc-700 dark:text-zinc-200 hover:text-black dark:hover:text-white transition-colors">About</a>
            <button onClick={goToProjects} className="rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium shadow hover:shadow-md transition">View my projects</button>
          </nav>

          <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-zinc-200 dark:border-zinc-800" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3">
            <a href="#home" onClick={() => setOpen(false)} className="py-2">Home</a>
            <a href="#about" onClick={() => setOpen(false)} className="py-2">About</a>
            <button onClick={goToProjects} className="mt-2 rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 text-sm font-medium shadow">View my projects</button>
          </div>
        </div>
      )}
    </header>
  );
}
