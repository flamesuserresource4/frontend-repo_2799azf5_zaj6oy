import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neon Commerce',
    desc: 'Headless e‑commerce storefront with blazing fast UX.',
    tags: ['Next.js', 'Tailwind', 'Stripe'],
    link: '#',
    gradient: 'from-indigo-500 via-fuchsia-500 to-emerald-400',
  },
  {
    title: 'Vision Studio',
    desc: 'Interactive 3D portfolio with real‑time scenes.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: '#',
    gradient: 'from-emerald-400 via-teal-400 to-cyan-500',
  },
  {
    title: 'Pulse Dashboard',
    desc: 'Analytics dashboard with live data and charts.',
    tags: ['Vite', 'Recharts', 'Radix UI'],
    link: '#',
    gradient: 'from-fuchsia-500 via-pink-500 to-rose-500',
  },
  {
    title: 'Atlas Docs',
    desc: 'Developer docs with instant search and MDX.',
    tags: ['Docusaurus', 'Algolia', 'MDX'],
    link: '#',
    gradient: 'from-violet-500 via-purple-500 to-indigo-500',
  },
  {
    title: 'Nimbus UI',
    desc: 'Component library with polished accessibility.',
    tags: ['React', 'TypeScript', 'Storybook'],
    link: '#',
    gradient: 'from-sky-500 via-blue-500 to-indigo-600',
  },
  {
    title: 'Flux App',
    desc: 'Realtime collaboration app with presence.',
    tags: ['Supabase', 'WebSockets', 'React'],
    link: '#',
    gradient: 'from-amber-400 via-orange-500 to-rose-500',
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 16 } },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 -z-0 pointer-events-none bg-[radial-gradient(40rem_20rem_at_50%_-10%,rgba(99,102,241,0.12),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Projects</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300 max-w-2xl">A selection of high‑impact builds blending aesthetics, performance, and interactivity.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-full border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm font-medium hover:bg-white/70 dark:hover:bg-zinc-900/60 backdrop-blur">Get in touch</a>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              variants={item}
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group perspective-1000 relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur shadow-sm transition will-change-transform"
            >
              <div className={`absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br ${p.gradient} opacity-30 blur-3xl`} />
              {/* Shine effect */}
              <div className="pointer-events-none absolute inset-0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700">
                <div className="h-full w-1/3 rotate-6 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              </div>
              <div className="p-6 relative">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black shadow group-hover:scale-105 transition">
                    <ExternalLink size={16} />
                  </span>
                </div>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-[11px] uppercase tracking-wide rounded-full border border-zinc-200 dark:border-zinc-800 px-2.5 py-1 text-zinc-700 dark:text-zinc-200 bg-white/60 dark:bg-zinc-900/50">{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
