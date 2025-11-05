import Spline from '@splinetool/react-spline';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 20, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 120, damping: 20, mass: 0.5 });
  const rotateX = useTransform(sy, [-50, 50], [8, -8]);
  const rotateY = useTransform(sx, [-50, 50], [-8, 8]);

  useEffect(() => {
    const onMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 100 - 50;
      const y = (e.clientY / innerHeight) * 100 - 50;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [mx, my]);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen overflow-hidden">
      {/* Interactive Spline background (purple/blue on dark) */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Non-blocking gradient veil + vignette for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/10 to-zinc-950/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70rem_35rem_at_50%_-10%,rgba(59,35,233,0.15),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50rem_25rem_at_50%_110%,rgba(21,94,239,0.1),transparent)]" />

      {/* Cursor-reactive glow hotspot (does not block interaction) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-20"
        style={{ x: sx, y: sy }}
      >
        <div className="h-[120vh] w-[120vw] rounded-full bg-[radial-gradient(closest-side,rgba(91,33,182,0.18),rgba(14,0,36,0.0))] blur-3xl" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-28 pb-16 lg:pt-40 lg:pb-32">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
            style={{ rotateX, rotateY }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium shadow backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to opportunities
            </span>
            <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
              PRIMExALBIN
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-300">Crafting modern, interactive experiences</span>
            </h1>
            <p className="mt-5 max-w-xl text-base sm:text-lg text-zinc-300">
              I design and build premium web interfaces with performance, accessibility, and delightful motion at the core.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button onClick={scrollToProjects} className="rounded-full bg-white text-black px-6 py-3 text-sm font-semibold shadow hover:shadow-lg transition [transform:translateZ(0)] hover:-translate-y-0.5">
                View my projects
              </button>
              <a href="#contact" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold backdrop-blur hover:bg-white/10 transition">
                Contact me
              </a>
            </div>
          </motion.div>
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            <div className="h-[36vh] lg:h-[58vh]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
