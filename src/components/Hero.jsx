import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OG17yM2eUIs8MUmA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="bg-gradient-to-br from-cyan-300 via-blue-400 to-slate-200 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl">
            MechaVision 3D
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-300 sm:text-xl">
            Studio desain mekanikal futuristik untuk pemasaran 3D, prototipe industrial, dan action figure custom. Kami menggabungkan presisi engineering dengan estetika neon biru yang modern.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#services" className="rounded-xl bg-cyan-500 px-6 py-3 text-slate-900 shadow-[0_0_25px_#22d3ee] transition hover:bg-cyan-400">
              Lihat Layanan
            </a>
            <a href="#portfolio" className="rounded-xl border border-slate-700/60 bg-slate-900/60 px-6 py-3 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300">
              Portofolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
