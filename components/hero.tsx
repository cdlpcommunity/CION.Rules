"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 140])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92])

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pt-24 sm:px-8"
    >
      {/* Aurora blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="cion-aurora absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-[#1e3a8a]/50 blur-[120px]" />
        <div
          className="cion-aurora absolute -right-24 top-40 h-[26rem] w-[26rem] rounded-full bg-[#ff5a36]/25 blur-[130px]"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="cion-aurora absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-[#2563eb]/25 blur-[130px]"
          style={{ animationDelay: "6s" }}
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 cion-grid" />

      {/* rotating isotype watermark */}
      <motion.div
        aria-hidden="true"
        style={{ y }}
        className="pointer-events-none absolute right-[-4rem] top-1/2 hidden -translate-y-1/2 opacity-[0.07] lg:block"
      >
        <Image src="/brand/isotipo.png" alt="" width={520} height={520} className="cion-spin-slow" />
      </motion.div>

      <motion.div style={{ opacity, scale }} className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-8 w-fit"
        >
          <Image
            src="/brand/isotipo.png"
            alt="Isotipo de CIÓN-Lab"
            width={96}
            height={96}
            priority
            className="h-20 w-20 drop-shadow-[0_0_40px_rgba(255,90,54,0.35)] sm:h-24 sm:w-24"
          />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-slate-300"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#ff5a36]" />
          Comunidad CIÓN-Lab
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl"
        >
          <span className="cion-gradient-text">Código de Interacción</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg"
        >
          Reglas, términos y condiciones oficiales de nuestro laboratorio de contenido. Seis
          módulos que sostienen un entorno seguro, respetuoso y creativo para toda la comunidad.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#modulos"
            className="group relative overflow-hidden rounded-full bg-[#ff5a36] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#ff5a36]/30 transition-transform hover:scale-105"
          >
            <span className="relative z-10">Explorar los módulos</span>
            <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-500 group-hover:translate-x-0" />
          </a>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/25 p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-[#ff5a36]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
