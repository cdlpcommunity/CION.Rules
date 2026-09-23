"use client"

import { motion } from "framer-motion"
import type { Modulo } from "@/lib/codigo-data"
import { CriterionItem } from "@/components/criterion-item"
import { Reveal } from "@/components/reveal"

export function ModuleSection({ modulo }: { modulo: Modulo }) {
  return (
    <section id={modulo.id} className="relative scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        {/* Header */}
        <div className="relative mb-10">
          <motion.span
            aria-hidden="true"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 0.08, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pointer-events-none absolute -top-16 left-0 select-none font-display text-[8rem] font-black leading-none text-white sm:-top-20 sm:text-[11rem]"
          >
            {modulo.numero}
          </motion.span>

          <div className="relative">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#ff5a36]/30 bg-[#ff5a36]/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#ff5a36]">
                {modulo.numeroLargo}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-2xl font-extrabold leading-tight tracking-tight text-white text-balance sm:text-4xl">
                {modulo.titulo}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="rounded-md bg-white/10 px-2 py-0.5 font-display text-xs font-bold text-white">
                  {modulo.estandarEtiqueta}
                </span>
                <span className="font-display text-sm font-semibold text-slate-200 sm:text-base">
                  {modulo.estandarTitulo}
                </span>
              </p>
            </Reveal>
          </div>
        </div>

        {/* Intro */}
        <Reveal delay={0.1}>
          <div className="relative mb-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-6 sm:p-7">
            <span className="absolute left-0 top-6 h-10 w-1 rounded-full bg-[#ff5a36]" aria-hidden="true" />
            <p className="text-pretty text-sm leading-relaxed text-slate-200 sm:text-base">
              {modulo.intro}
            </p>
          </div>
        </Reveal>

        {/* Criteria */}
        <div className="space-y-3">
          {modulo.criterios.map((c, i) => (
            <CriterionItem key={c.letra} criterio={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
