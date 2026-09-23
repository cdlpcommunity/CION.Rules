import { modulos } from "@/lib/codigo-data"
import { ScrollProgress } from "@/components/scroll-progress"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { ModuleIndex } from "@/components/module-index"
import { MarqueeDivider } from "@/components/marquee-divider"
import { ModuleSection } from "@/components/module-section"
import { SiteFooter } from "@/components/site-footer"

export function CodigoContent() {
  return (
    <div className="cion-page relative min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <SiteHeader />

      <main>
        <Hero />
        <ModuleIndex />
        <MarqueeDivider />

        {modulos.map((m, i) => (
          <div key={m.id}>
            <ModuleSection modulo={m} />
            {i < modulos.length - 1 && (
              <div aria-hidden="true" className="mx-auto max-w-4xl px-5 sm:px-8">
                <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
              </div>
            )}
          </div>
        ))}

        <SiteFooter />
      </main>
    </div>
  )
}
