import { Cpu, Wrench, Cube } from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'Desain Mekanikal',
    desc: 'Rancang sistem mekanik presisi untuk produk industri dan robotik dengan standar manufaktur.',
    points: ['Analisis kinematika', 'DFM/DFA', 'Simulasi gerak'],
  },
  {
    icon: Wrench,
    title: 'Prototipe Industrial',
    desc: 'Pembuatan prototipe cepat untuk validasi fungsi dan ergonomi sebelum produksi massal.',
    points: ['3D printing multi-material', 'CNC & finishing', 'Uji fungsional'],
  },
  {
    icon: Cube,
    title: 'Action Figure Custom',
    desc: 'Model karakter mekanikal dengan detail tinggi, joint stabil, dan pengecatan premium.',
    points: ['Poseable joints', 'Kustom warna & decals', 'Packaging edisi kolektor'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
          Layanan Utama
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-400">
          Solusi menyeluruh dari konsep hingga prototipe siap tampil.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 transition hover:border-cyan-500/40 hover:shadow-[0_0_40px_#22d3ee33]"
            >
              <div className="mb-4 inline-flex rounded-xl bg-slate-800/70 p-3 text-cyan-300 ring-1 ring-inset ring-slate-700 group-hover:text-cyan-200">
                <s.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-100">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-slate-300">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/80" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
