import HoloCard from './HoloCard'

export default function SkillsMatrix() {
  const skills = [
    { name: 'Bahasa Inggris', level: 80 },
    { name: 'Bahasa Indonesia', level: 90 },
    { name: 'Teknologi (Dasar–Menengah)', level: 70 },
    { name: 'Al-Qur’an', level: 85 },
    { name: 'Pemahaman Finansial', level: 65 },
  ]

  return (
    <HoloCard title="Keahlian" subtitle="Skills Matrix">
      <div className="space-y-4">
        {skills.map((s) => (
          <div key={s.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-blue-200/80">{s.name}</p>
              <p className="text-xs text-blue-300/70">{s.level}%</p>
            </div>
            <div className="h-2 rounded bg-slate-800/80 overflow-hidden border border-blue-400/20">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 shadow-[0_0_18px_2px_rgba(99,102,241,0.5)_inset]"
                style={{ width: `${s.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </HoloCard>
  )
}
