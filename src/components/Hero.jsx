import React, { useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function Hero() {
  // Track pointer for glow hotspot and subtle parallax
  const [hovering, setHovering] = useState(false);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spx = useSpring(px, { stiffness: 120, damping: 20, mass: 0.5 });
  const spy = useSpring(py, { stiffness: 120, damping: 20, mass: 0.5 });
  const rotateX = useTransform(spy, [0, 1], [8, -8]);
  const rotateY = useTransform(spx, [0, 1], [-8, 8]);
  const translateX = useTransform(spx, [0, 1], ['-1.5%', '1.5%']);
  const translateY = useTransform(spy, [0, 1], ['-1.5%', '1.5%']);

  const containerRef = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      px.set(x);
      py.set(y);
    };
    const el = containerRef.current;
    el?.addEventListener('pointermove', onMove);
    el?.addEventListener('pointerenter', () => setHovering(true));
    el?.addEventListener('pointerleave', () => setHovering(false));
    return () => {
      el?.removeEventListener('pointermove', onMove);
      el?.removeEventListener('pointerenter', () => setHovering(true));
      el?.removeEventListener('pointerleave', () => setHovering(false));
    };
  }, [px, py]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-zinc-950 text-white">
      {/* 3D Scene */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
        }}
        className="absolute inset-0 will-change-transform"
      >
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* Vignette + gradient overlays – non-blocking */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-transparent to-zinc-950/70" />
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(60% 60% at 50% 40%, rgba(36, 99, 235, 0.20) 0%, rgba(139, 92, 246, 0.12) 35%, rgba(12, 10, 23, 0.0) 70%)'
      }} />

      {/* Cursor hotspot glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          left: useTransform(spx, (v) => `calc(${v * 100}% )`),
          top: useTransform(spy, (v) => `calc(${v * 100}% )`),
          width: hovering ? 420 : 280,
          height: hovering ? 420 : 280,
          background:
            'radial-gradient(closest-side, rgba(56,189,248,0.28), rgba(147,51,234,0.17), rgba(0,0,0,0))',
          transition: 'width 300ms ease, height 300ms ease',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-3 text-xs tracking-[0.25em] text-cyan-300/80 uppercase">Neural Cyber Nexus</p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 drop-shadow">Interactive 3D IT Background</h1>
        <p className="mt-5 max-w-2xl text-zinc-300/90">
          A living network sphere suspended in a cyber environment — responsive glow, parallax depth, and particle motion that follows your cursor.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#projects" className="group relative inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-5 py-2.5 text-cyan-200 hover:bg-cyan-400/20 transition">
            Explore Projects
          </a>
          <a href="#about" className="relative inline-flex items-center gap-2 rounded-full border border-zinc-700/60 bg-zinc-800/60 px-5 py-2.5 text-zinc-200 hover:bg-zinc-700/60 transition">
            Learn More
          </a>
        </div>
      </div>

      {/* Bottom fade to blend into next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-zinc-950" />
    </section>
  );
}
