import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-xl border border-slate-700/40 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-2">
              <div className="rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 p-2 text-white shadow-[0_0_20px_#22d3ee]">
                <Rocket size={20} />
              </div>
              <span className="font-semibold tracking-wide text-slate-200">MechaVision 3D</span>
            </a>
            <nav className="hidden gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <button
              onClick={() => setOpen((v) => !v)}
              className="text-slate-200 md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
          {open && (
            <div className="flex flex-col gap-2 border-t border-slate-700/40 p-4 md:hidden">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800/60 hover:text-cyan-400"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
