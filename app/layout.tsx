import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Sora, Manrope } from 'next/font/google'
import './globals.css'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Código de Interacción · CIÓN-Lab',
  description:
    'Reglas, términos y condiciones oficiales de la comunidad CIÓN-Lab. Un código de interacción para un entorno seguro, respetuoso y creativo.',
  generator: 'v0.app',
  openGraph: {
    title: 'Código de Interacción · CIÓN-Lab',
    description:
      'Reglas, términos y condiciones oficiales de la comunidad CIÓN-Lab.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0F172A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${sora.variable} ${manrope.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
