import HoloCard from './HoloCard'
import { Coins } from 'lucide-react'

export default function WealthPanel() {
  return (
    <HoloCard title="Tabungan Jangka Panjang" subtitle="Crypto Portfolio">
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-400/70 to-purple-400/70 flex items-center justify-center">
          <Coins className="h-6 w-6 text-slate-900/90" />
        </div>
        <div className="space-y-1">
          <p className="text-slate-100 font-medium">Investasi Crypto</p>
          <p className="text-blue-200/80 text-sm">Status portofolio: Aktif • Strategi jangka panjang</p>
        </div>
      </div>
    </HoloCard>
  )
}
