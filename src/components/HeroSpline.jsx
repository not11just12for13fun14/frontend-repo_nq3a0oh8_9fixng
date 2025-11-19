import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function HeroSpline() {
  return (
    <section className="relative h-[72vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_10%,rgba(59,130,246,0.15),transparent),radial-gradient(900px_500px_at_90%_90%,rgba(124,58,237,0.14),transparent)]" />

      {/* content */}
      <div className="relative z-10 mx-auto max-w-6xl h-full flex items-end p-6 sm:p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="backdrop-blur-xl bg-slate-900/40 border border-blue-400/20 rounded-2xl p-4 sm:p-6 shadow-2xl"
        >
          <p className="text-xs sm:text-sm tracking-widest text-blue-300/70 uppercase">Holographic Identity</p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-100 mt-1">Maulana Niko Ainul Yaqin</h1>
          <p className="text-blue-200/80 mt-2 text-sm md:text-base">Lahir 7 April 2009, Gresik, Jawa Timur</p>
        </motion.div>
      </div>
    </section>
  )
}
