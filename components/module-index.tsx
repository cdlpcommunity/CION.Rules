"use client"

import { motion } from "framer-motion"
import { modulos } from "@/lib/codigo-data"
import { Reveal } from "@/components/reveal"

export function ModuleIndex() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })

  return (
    <section id="modulos" className="relative scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-[#ff5a36]">
            El código en seis módulos
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto mt-3 max-w-2xl text-center font-display text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl">
            Un marco claro para convivir, crear y crecer juntos
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modulos.map((m, i) => (
            <motion.button
              key={m.id}
              onClick={() => go(m.id)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition-colors hover:border-[#ff5a36]/50"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-6 -top-8 font-display text-[6rem] font-black leading-none text-white/[0.04] transition-colors group-hover:text-[#ff5a36]/10"
              >
                {m.numero}
              </span>

              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#ff5a36]/12 font-display text-lg font-bold text-[#ff5a36] transition-colors group-hover:bg-[#ff5a36] group-hover:text-white">
                {m.numero}
              </span>

              <h3 className="relative mt-5 font-display text-base font-bold leading-snug text-white">
                {m.titulo}
              </h3>
              <p className="relative mt-2 text-xs leading-relaxed text-slate-400">
                {m.estandarTitulo}
              </p>

              <span className="relative mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff5a36]">
                Ver módulo
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
