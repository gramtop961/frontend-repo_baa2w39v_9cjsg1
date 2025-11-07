import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import { Section, Footer } from './components/Sections';

function App() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />

      <Section
        id="about"
        title="Tentang MechaVision 3D"
        subtitle="Kami memadukan estetika futuristik dengan rekayasa presisi untuk materi pemasaran 3D, prototipe industrial, dan figur koleksi."
      >
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="text-lg font-semibold">Filosofi Desain</h3>
            <p className="mt-2 text-slate-300">
              Neon biru dan abu metalik sebagai bahasa visual yang clean, tajam, dan berorientasi teknologi. Setiap detail dirancang agar siap tampil untuk kampanye dan ekshibisi.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="text-lg font-semibold">Proses Terintegrasi</h3>
            <p className="mt-2 text-slate-300">
              Mulai dari riset, konsep, pemodelan 3D, simulasi gerak, hingga prototipe fisik yang bisa diuji dan dipresentasikan ke stakeholder.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="text-lg font-semibold">Standar Industri</h3>
            <p className="mt-2 text-slate-300">
              Perhatian tinggi pada toleransi, mekanisme joint, dan struktur untuk memastikan karya tidak hanya indah, tetapi juga fungsional.
            </p>
          </div>
        </div>
      </Section>

      <Services />

      <Section
        id="portfolio"
        title="Portofolio"
        subtitle="Cuplikan proyek dari kampanye pemasaran hingga prototipe robotik dan action figure edisi kolektor."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950"
            >
              <div className="aspect-video w-full bg-[radial-gradient(circle_at_30%_20%,_#22d3ee22,_transparent_60%)]" />
              <div className="p-5">
                <h4 className="font-semibold text-slate-100">Proyek #{i}</h4>
                <p className="mt-1 text-sm text-slate-400">Mekanikal, rendering neon, dan finishing metalik.</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="blog" title="Blog" subtitle="Insight engineering, pipeline 3D, dan studi kasus brand.">
        <div className="grid gap-6 lg:grid-cols-3">
          {[{
            title: 'Merancang Joint Poseable yang Tahan Lama',
            tag: 'Engineering',
          }, {
            title: 'Estetika Neon Biru di Materi Pemasaran Tekno',
            tag: 'Branding',
          }, {
            title: 'Dari CAD ke Figur: Alur Prototipe yang Efisien',
            tag: 'Pipeline',
          }].map((p) => (
            <article key={p.title} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <span className="inline-block rounded-md bg-cyan-500/10 px-2 py-1 text-xs font-medium text-cyan-300 ring-1 ring-cyan-500/30">
                {p.tag}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-100">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-400">Ringkasan singkat yang menggambarkan inti tulisan dan manfaatnya bagi brand.</p>
              <button className="mt-4 text-sm font-medium text-cyan-300 hover:text-cyan-200">Baca selengkapnya →</button>
            </article>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Hubungi Kami" subtitle="Ceritakan kebutuhan Anda—kami siapkan solusi 3D yang presisi dan memukau.">
        <form className="mx-auto max-w-2xl space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              required
              type="text"
              placeholder="Nama"
              className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Perusahaan / Brand (opsional)"
            className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
          />
          <textarea
            required
            rows={5}
            placeholder="Ceritakan proyek Anda..."
            className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
          />
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-slate-400">
              <input type="checkbox" className="rounded border-slate-700 bg-slate-900 text-cyan-500 focus:ring-cyan-500" />
              Kirim saya update via email
            </label>
            <button type="submit" className="rounded-xl bg-cyan-500 px-6 py-3 font-medium text-slate-900 shadow-[0_0_25px_#22d3ee] transition hover:bg-cyan-400">
              Kirim Pesan
            </button>
          </div>
        </form>
      </Section>

      <Footer />
    </div>
  );
}

export default App;
