export function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">{title}</h2>
          {subtitle && <p className="mt-3 text-slate-400">{subtitle}</p>}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} MechaVision 3D. All rights reserved.</p>
          <p className="text-sm text-slate-500">Futuristic marketing • Industrial prototyping • Custom action figures</p>
        </div>
      </div>
    </footer>
  );
}
