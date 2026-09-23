"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import type { Criterio } from "@/lib/codigo-data"

export function CriterionItem({ criterio, index }: { criterio: Criterio; index: number }) {
  const [open, setOpen] = useState(false)
  const hasSanciones = criterio.sanciones && criterio.sanciones.length > 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
        open
          ? "border-[#ff5a36]/50 bg-white/[0.06]"
          : "border-white/10 bg-white/[0.02] hover:border-white/25"
      }`}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6"
      >
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-display text-base font-bold transition-colors duration-300 ${
            open ? "bg-[#ff5a36] text-white" : "bg-[#ff5a36]/12 text-[#ff5a36]"
          }`}
        >
          {criterio.letra}
        </span>
        <span className="flex-1">
          <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#ff5a36]/80">
            Criterio {criterio.letra}
          </span>
          <span className="mt-0.5 block font-display text-sm font-semibold leading-snug text-white sm:text-base">
            {criterio.titulo}
          </span>
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors ${
            open ? "border-[#ff5a36] text-[#ff5a36]" : "border-white/20 text-white/60"
          }`}
          aria-hidden="true"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pl-5 sm:px-6 sm:pl-[4.75rem]">
              {criterio.cuerpo && (
                <p className="text-pretty text-sm leading-relaxed text-slate-300">{criterio.cuerpo}</p>
              )}

              {hasSanciones && (
                <ul className={`space-y-3 ${criterio.cuerpo ? "mt-4" : ""}`}>
                  {criterio.sanciones!.map((s, i) => (
                    <li
                      key={i}
                      className="relative rounded-xl border border-white/10 bg-[#0b1120]/60 p-4 pl-5"
                    >
                      <span className="absolute inset-y-3 left-0 w-1 rounded-full bg-[#ff5a36]" aria-hidden="true" />
                      <p className="font-display text-sm font-semibold text-white">{s.nivel}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-400">{s.detalle}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
