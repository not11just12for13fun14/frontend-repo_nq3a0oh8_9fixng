import HeroSpline from './components/HeroSpline'
import HoloCard from './components/HoloCard'
import Timeline from './components/Timeline'
import SkillsMatrix from './components/SkillsMatrix'
import WealthPanel from './components/WealthPanel'
import StatPulse from './components/StatPulse'
import BioCard from './components/BioCard'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* starfield / grid background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1200px_800px_at_-20%_-10%,rgba(59,130,246,0.12),transparent),radial-gradient(1000px_600px_at_120%_120%,rgba(124,58,237,0.12),transparent),linear-gradient(to_bottom_right,rgba(2,6,23,1),rgba(2,6,23,1))]" />
      <div className="pointer-events-none fixed inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_90%)] bg-[linear-gradient(transparent_0,transparent_98%,rgba(59,130,246,0.15)_99%),linear-gradient(90deg,transparent_0,transparent_98%,rgba(99,102,241,0.12)_99%)] bg-[size:60px_60px] opacity-40" />

      {/* hero with spline */}
      <HeroSpline />

      {/* content */}
      <main className="relative z-10 mx-auto max-w-6xl p-6 sm:p-10 -mt-16 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <HoloCard title="Identitas" subtitle="Core Profile" className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs tracking-widest text-blue-300/60 uppercase mb-2">Nama Pengguna</p>
                <p className="text-xl font-semibold">Maulana Niko Ainul Yaqin</p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-blue-300/60 uppercase mb-2">Biodata</p>
                <p className="text-blue-200/80">Lahir 7 April 2009, Gresik, Jawa Timur</p>
              </div>
            </div>
            <div className="mt-6">
              <StatPulse />
            </div>
          </HoloCard>

          <WealthPanel />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Timeline />
          <SkillsMatrix />
        </div>

        <BioCard />

        <HoloCard title="Catatan Sistem" subtitle="AI Synopsis">
          <p className="text-blue-200/80 text-sm leading-relaxed">
            Data ini disusun secara modular oleh sistem analitik cerdas untuk memberikan
            gambaran menyeluruh namun ringkas mengenai identitas, rekam pendidikan,
            kompetensi, dan preferensi finansial. Antarmuka mengutamakan keterbacaan,
            dengan efek holografik halus, garis bercahaya lembut, serta panel transparan
            berlapis yang menghadirkan kesan command-center futuristik.
          </p>
        </HoloCard>

        <footer className="pt-6 pb-16 text-center text-blue-300/60 text-xs">
          © {new Date().getFullYear()} • Futuristic Portfolio Interface
        </footer>
      </main>
    </div>
  )
}

export default App
