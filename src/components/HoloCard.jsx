import { motion } from 'framer-motion'

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

const glowVariants = {
  initial: { opacity: 0.6 },
  animate: {
    opacity: [0.6, 0.9, 0.6],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
  },
}

export default function HoloCard({ title, subtitle, children, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'relative rounded-2xl border border-blue-400/20 bg-slate-900/40 backdrop-blur-xl overflow-hidden',
        'shadow-[0_0_0_1px_rgba(59,130,246,0.15)]',
        className
      )}
    >
      {/* subtle glow frame */}
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="animate"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_-20%_-20%,rgba(99,102,241,0.08),transparent_60%),radial-gradient(1000px_500px_at_120%_120%,rgba(59,130,246,0.08),transparent_60%)]"
      />

      {/* top bar */}
      {(title || subtitle) && (
        <div className="flex items-center justify-between px-5 py-3 border-b border-blue-400/10 bg-slate-900/30">
          <div>
            <p className="text-xs tracking-widest text-blue-300/60 uppercase">{subtitle}</p>
            <h3 className="text-lg font-semibold text-slate-100 leading-tight">{title}</h3>
          </div>
          <div className="flex gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_2px_rgba(52,211,153,0.6)]" />
            <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_2px_rgba(59,130,246,0.6)]" />
            <span className="h-2 w-2 rounded-full bg-indigo-400 shadow-[0_0_12px_2px_rgba(129,140,248,0.6)]" />
          </div>
        </div>
      )}

      <div className="relative p-5">
        {children}
      </div>

      {/* bottom scan line */}
      <motion.div
        aria-hidden
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute left-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
      />
    </motion.div>
  )
}
