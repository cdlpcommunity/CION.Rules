"use client"

import { motion } from "framer-motion"

type View = "desktop" | "mobile"

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
      <line x1="10.5" y1="18.5" x2="13.5" y2="18.5" />
    </svg>
  )
}

function MonitorIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden="true">
      <rect x="2.5" y="3.5" width="19" height="12" rx="2" />
      <line x1="8" y1="20.5" x2="16" y2="20.5" />
      <line x1="12" y1="15.5" x2="12" y2="20.5" />
    </svg>
  )
}

export function DeviceViewToggle({
  view,
  native,
  onChange,
}: {
  view: View
  native: View
  onChange: (v: View) => void
}) {
  const options: { key: View; label: string; Icon: typeof PhoneIcon }[] = [
    { key: "mobile", label: "Teléfono", Icon: PhoneIcon },
    { key: "desktop", label: "PC", Icon: MonitorIcon },
  ]

  return (
    <div className="fixed top-4 left-1/2 z-[120] flex -translate-x-1/2 flex-col items-center gap-2">
      <motion.div
        initial={{ opacity: 0, y: -12, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 260, damping: 22 }}
        className="flex items-center gap-1 rounded-full border border-white/15 bg-[#0F172A]/90 p-1 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.7)] backdrop-blur-md"
        role="group"
        aria-label="Cambiar vista del dispositivo"
      >
        {options.map(({ key, label, Icon }) => {
          const active = view === key
          return (
            <button
              key={key}
              type="button"
              onClick={() => onChange(key)}
              aria-pressed={active}
              title={`Ver como ${label}`}
              className={`relative flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                active ? "text-white" : "text-white/55 hover:text-white/80"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="deviceViewHighlight"
                  className="absolute inset-0 rounded-full bg-[#FF5A36] shadow-[0_6px_18px_-4px_rgba(255,90,54,0.7)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <Icon className="relative z-10 h-4 w-4" />
              <span className="relative z-10">{label}</span>
              {native === key && (
                <span
                  className="relative z-10 ml-0.5 rounded-full bg-white/20 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide"
                  title="Detectado automáticamente"
                >
                  Auto
                </span>
              )}
            </button>
          )
        })}
      </motion.div>
    </div>
  )
}
