import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="relative py-24 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-7">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About</h2>
                <p className="mt-4 text-zinc-600 dark:text-zinc-300 max-w-2xl">
                  I’m Albin — building ultra‑detailed, responsive interfaces with smooth motion and a clean, modern aesthetic. I focus on thoughtful systems, scalability, and consistency to deliver reliable, premium products.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['React', 'Vite', 'Tailwind', 'Framer Motion', 'Spline', 'TypeScript'].map((s) => (
                    <span key={s} className="text-xs rounded-full border border-zinc-200 dark:border-zinc-800 px-3 py-1 bg-white/70 dark:bg-zinc-900/60 backdrop-blur">{s}</span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 backdrop-blur p-6">
                  <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-emerald-400 opacity-30 blur-3xl" />
                  <h3 className="text-lg font-semibold">What I bring</h3>
                  <ul className="mt-4 space-y-3 text-sm text-zinc-700 dark:text-zinc-200 list-disc list-inside">
                    <li>Pixel‑perfect UI with scalable component systems</li>
                    <li>High performance and accessibility out of the box</li>
                    <li>Polished micro‑interactions and motion design</li>
                    <li>Production‑ready delivery with clean handoff</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
