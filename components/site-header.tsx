"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { modulos } from "@/lib/codigo-data"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const go = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <button
          onClick={() => go("inicio")}
          className="group flex items-center gap-3"
          aria-label="Ir al inicio"
        >
          <Image
            src="/brand/isotipo.png"
            alt="Isotipo CIÓN-Lab"
            width={40}
            height={40}
            className="h-9 w-9 transition-transform duration-500 group-hover:rotate-12"
          />
          <span className="hidden font-display text-sm font-semibold tracking-[0.25em] text-white sm:block">
            CIÓN<span className="text-[#ff5a36]">·</span>LAB
          </span>
        </button>

        <div className="relative">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-haspopup="true"
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-[#ff5a36]/60 hover:bg-[#ff5a36]/10"
          >
            <span className="hidden sm:inline">Índice de módulos</span>
            <span className="sm:hidden">Módulos</span>
            <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </motion.span>
          </button>

          <AnimatePresence>
            {open && (
              <>
                <div className="fixed inset-0 z-0" onClick={() => setOpen(false)} aria-hidden="true" />
                <motion.ul
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 z-10 mt-3 w-72 overflow-hidden rounded-2xl border border-white/10 bg-[#0f172a]/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl"
                >
                  {modulos.map((m, i) => (
                    <li key={m.id}>
                      <button
                        onClick={() => go(m.id)}
                        className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-white/5"
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#ff5a36]/15 font-display text-xs font-bold text-[#ff5a36]">
                          {m.numero}
                        </span>
                        <span className="text-xs font-medium leading-tight text-slate-200">
                          {m.titulo}
                        </span>
                      </button>
                      {i < modulos.length - 1 && <div className="mx-3 h-px bg-white/5" />}
                    </li>
                  ))}
                </motion.ul>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  )
}
