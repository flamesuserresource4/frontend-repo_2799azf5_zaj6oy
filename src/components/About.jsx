import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative bg-zinc-950 text-zinc-200">
      {/* Top fade to blend from hero */}
      <div className="pointer-events-none absolute -top-16 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-zinc-950/70" />

      <div className="relative mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Neural Cyber Nexus</h2>
        <p className="mt-4 text-zinc-300/90">
          Inspired by a holographic control room, this interactive background pairs a responsive 3D core with layered parallax, glow refractions, and data-particle motion.
          Move your cursor to subtly rotate the scene and awaken the glow. Idle and it breathes back to calm.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          <li className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="font-medium text-white">Camera Parallax</p>
            <p className="mt-1 text-sm text-zinc-400">Subtle rotation and perspective shift create floating depth.</p>
          </li>
          <li className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="font-medium text-white">Reactive Glow</p>
            <p className="mt-1 text-sm text-zinc-400">Nodes and gradients brighten near your cursor and fade when idle.</p>
          </li>
          <li className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="font-medium text-white">Multi-Plane Layers</p>
            <p className="mt-1 text-sm text-zinc-400">Holographic grids and circuits move at different speeds.</p>
          </li>
          <li className="rounded-xl border border-white/10 bg-white/5 p-5">
            <p className="font-medium text-white">Pulse Effects</p>
            <p className="mt-1 text-sm text-zinc-400">Click to send a light ripple across the background surface.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
