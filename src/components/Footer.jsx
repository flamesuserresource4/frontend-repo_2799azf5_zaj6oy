import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 border-t border-zinc-200 dark:border-zinc-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">PRIMExALBIN</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 max-w-sm">Designing clean, professional, and playful digital experiences with precision and care.</p>
          </div>
          <div className="md:col-span-2 flex md:justify-end">
            <div className="flex items-center gap-3">
              <a href="mailto:hello@primexalbin.dev" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-white/70 dark:hover:bg-zinc-900/60 backdrop-blur" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-white/70 dark:hover:bg-zinc-900/60 backdrop-blur" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 hover:bg-white/70 dark:hover:bg-zinc-900/60 backdrop-blur" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 text-xs text-zinc-500 dark:text-zinc-400">© {new Date().getFullYear()} PRIMExALBIN. All rights reserved.</div>
      </div>
    </footer>
  );
}
