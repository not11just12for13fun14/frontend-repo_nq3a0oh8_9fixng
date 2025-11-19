import { motion } from 'framer-motion'
import { Activity, Wallet, BookOpenCheck, GraduationCap } from 'lucide-react'

const items = [
  { icon: Activity, label: 'Cognitive Pulse', value: 'Stable', color: 'from-blue-400/70 to-indigo-400/70' },
  { icon: Wallet, label: 'Crypto Investment', value: 'Active', color: 'from-indigo-400/70 to-purple-400/70' },
  { icon: BookOpenCheck, label: 'Skills Matrix', value: 'Multi-lingual', color: 'from-cyan-400/70 to-blue-400/70' },
  { icon: GraduationCap, label: 'Education Sync', value: 'Verified', color: 'from-violet-400/70 to-blue-400/70' },
]

export default function StatPulse() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {items.map(({ icon: Icon, label, value, color }, idx) => (
        <div key={label} className="relative overflow-hidden rounded-xl border border-blue-400/20 bg-slate-900/40 backdrop-blur-xl p-3">
          <div className="flex items-center gap-2">
            <div className={`h-8 w-8 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center text-slate-900/90`}>
              <Icon className="h-5 w-5 text-slate-900/90" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-blue-300/60">{label}</p>
              <p className="text-sm font-semibold text-slate-100">{value}</p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0.3 }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2.6 + idx * 0.2, repeat: Infinity, ease: 'easeInOut' }}
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(200px_60px_at_10%_10%,rgba(59,130,246,0.15),transparent),radial-gradient(200px_60px_at_90%_90%,rgba(124,58,237,0.14),transparent)]"
          />
        </div>
      ))}
    </div>
  )
}
