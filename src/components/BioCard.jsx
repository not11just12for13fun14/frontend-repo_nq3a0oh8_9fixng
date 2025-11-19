import HoloCard from './HoloCard'

export default function BioCard() {
  return (
    <HoloCard title="Biodata" subtitle="Identity Scan">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <p className="text-xs tracking-widest text-blue-300/60 uppercase">Nama</p>
          <p className="text-slate-100 font-medium">Maulana Niko Ainul Yaqin</p>
        </div>
        <div className="space-y-1">
          <p className="text-xs tracking-widest text-blue-300/60 uppercase">Tempat / Tanggal Lahir</p>
          <p className="text-slate-100 font-medium">Gresik, 7 April 2009</p>
        </div>
        <div className="space-y-1 sm:col-span-2">
          <p className="text-xs tracking-widest text-blue-300/60 uppercase">Domisili</p>
          <p className="text-slate-100 font-medium">Gresik, Jawa Timur</p>
        </div>
      </div>
    </HoloCard>
  )
}
