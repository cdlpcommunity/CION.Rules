"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { redesSociales } from "@/lib/codigo-data"
import { Reveal } from "@/components/reveal"
import { InstagramIcon, TikTokIcon, YouTubeIcon } from "@/components/social-icons"

const iconMap = {
  YouTube: YouTubeIcon,
  TikTok: TikTokIcon,
  Instagram: InstagramIcon,
} as const

export function SiteFooter() {
  return (
    <footer id="comunidad" className="relative overflow-hidden scroll-mt-24 pt-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="cion-aurora absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#ff5a36]/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-transparent p-8 text-center sm:p-12">
            <Image
              src="/brand/isotipo.png"
              alt="Isotipo de CIÓN-Lab"
              width={72}
              height={72}
              className="mx-auto mb-6 h-16 w-16 drop-shadow-[0_0_30px_rgba(255,90,54,0.3)]"
            />
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-white text-balance sm:text-3xl">
              Formar parte de CIÓN-Lab es aceptar este código
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-slate-300 sm:text-base">
              Nuestro laboratorio de contenido crece sobre el respeto mutuo. Síguenos, participa y
              construye comunidad con nosotros.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {redesSociales.map((red, i) => {
                const Icon = iconMap[red.nombre as keyof typeof iconMap]
                return (
                  <motion.a
                    key={red.nombre}
                    href={red.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4 }}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group flex flex-col items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-[#ff5a36]/50 hover:bg-[#ff5a36]/10"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-white transition-colors group-hover:bg-[#ff5a36]">
                      {Icon && <Icon className="h-5 w-5" />}
                    </span>
                    <span className="font-display text-sm font-bold text-white">{red.nombre}</span>
                    <span className="text-xs text-slate-400">{red.handle}</span>
                  </motion.a>
                )
              })}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 sm:flex-row">
          <Image
            src="/brand/logotipo.png"
            alt="Logotipo de CIÓN-Lab"
            width={120}
            height={40}
            className="h-8 w-auto opacity-90"
          />
          <p className="text-center text-xs text-slate-500 sm:text-right">
            © {new Date().getFullYear()} CIÓN-Lab · Laboratorio de contenido de la Comunidad CIÓN.
            <br className="hidden sm:block" /> Código de Interacción · Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
