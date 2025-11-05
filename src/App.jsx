import React, { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <footer id="contact" className="border-t border-white/10 bg-zinc-950 py-12 text-center text-sm text-zinc-400">
          <div className="mx-auto max-w-5xl px-6">
            <p>© {new Date().getFullYear()} PRIMExALBIN — Built with an interactive 3D background.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
