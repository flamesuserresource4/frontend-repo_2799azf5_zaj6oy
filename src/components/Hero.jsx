import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/90 dark:from-zinc-950/80 dark:via-zinc-950/30 dark:to-zinc-950/95" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-28 pb-16 lg:pt-40 lg:pb-32">
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-zinc-900/60 px-3 py-1 text-xs font-medium shadow backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to opportunities
            </span>
            <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
              PRIMExALBIN
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-emerald-400">Crafting modern, interactive experiences</span>
            </h1>
            <p className="mt-5 max-w-xl text-base sm:text-lg text-zinc-600 dark:text-zinc-300">
              I design and build premium web interfaces with performance, accessibility, and delightful motion at the core.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={scrollToProjects} className="rounded-full bg-black text-white dark:bg-white dark:text-black px-6 py-3 text-sm font-semibold shadow hover:shadow-lg transition">
                View my projects
              </button>
              <a href="#contact" className="rounded-full border border-zinc-300 dark:border-zinc-700 px-6 py-3 text-sm font-semibold backdrop-blur hover:bg-white/70 dark:hover:bg-zinc-900/60 transition">
                Contact me
              </a>
            </div>
          </motion.div>
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {/* Empty spacer to balance layout; Spline sits in background */}
            <div className="h-[40vh] lg:h-[60vh]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
