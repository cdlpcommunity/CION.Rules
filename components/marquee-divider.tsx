const items = [
  "SALVAGUARDA MUTUA",
  "CERO TOLERANCIA AL ACOSO",
  "RESPETO Y CAMARADERÍA",
  "DEBIDO PROCESO",
  "TRANSPARENCIA",
  "COMUNIDAD CIÓN-LAB",
]

export function MarqueeDivider() {
  const row = [...items, ...items]
  return (
    <div
      aria-hidden="true"
      className="relative flex overflow-hidden border-y border-white/10 bg-[#0b1120]/60 py-5 select-none"
    >
      <div className="cion-marquee flex shrink-0 items-center gap-8 pr-8">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white/70">
              {t}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a36]" />
          </span>
        ))}
      </div>
      <div className="cion-marquee flex shrink-0 items-center gap-8 pr-8">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-white/70">
              {t}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5a36]" />
          </span>
        ))}
      </div>
    </div>
  )
}
