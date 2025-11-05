import React from 'react';

const demoProjects = [
  {
    title: 'Holographic Grid Engine',
    desc: 'Shader-driven grid with depth parallax and volumetric light layers.',
    tag: 'WebGL / Shaders',
  },
  {
    title: 'Data Particle Trails',
    desc: 'GPU-accelerated particle streaks that follow interaction velocity.',
    tag: 'R3F / GPGPU',
  },
  {
    title: 'Emissive Node Network',
    desc: 'Interactive cable mesh with pulse propagation and node glow.',
    tag: 'Three.js',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-zinc-950 py-20">
      {/* Top fade to blend from About */}
      <div className="pointer-events-none absolute -top-16 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-zinc-950/70" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
          <p className="text-sm text-zinc-400">Curated work aligned with the Neural Cyber Nexus aesthetic.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {demoProjects.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.04] p-6">
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" style={{
                background: 'radial-gradient(60% 60% at 50% 10%, rgba(56,189,248,0.18), rgba(139,92,246,0.12), rgba(0,0,0,0))'
              }} />
              <div className="relative z-10">
                <span className="inline-flex items-center rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">{p.tag}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{p.desc}</p>
                <div className="mt-5 flex items-center gap-3">
                  <a href="#" className="text-cyan-300 hover:text-cyan-200">Live</a>
                  <a href="#" className="text-zinc-400 hover:text-white">Code</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
