import HoloCard from './HoloCard'

export default function Timeline() {
  const items = [
    {
      time: '2021–2022',
      title: 'MI At-Taufiq',
      note: 'Catatan tahfidz juz 29–30',
    },
    {
      time: '2024–2025',
      title: 'MTS Ma’arif NU Randegansari',
      note: 'Lulusan',
    },
    {
      time: '2024–2025',
      title: 'Pondok Pesantren Al-Munawaroh',
      note: 'Alumni total 3 tahun',
    },
  ]

  return (
    <HoloCard title="Riwayat Pendidikan" subtitle="Education Feed">
      <ol className="relative border-s border-blue-400/20 ml-2 pl-6 space-y-5">
        {items.map((it, idx) => (
          <li key={idx} className="group">
            <div className="absolute -left-[9px] mt-1 h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_12px_2px_rgba(59,130,246,0.6)]" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <p className="text-xs text-blue-300/70 tracking-wider">{it.time}</p>
              <p className="text-slate-100 font-medium">{it.title}</p>
            </div>
            <p className="text-blue-200/80 text-sm">{it.note}</p>
          </li>
        ))}
      </ol>
    </HoloCard>
  )
}
