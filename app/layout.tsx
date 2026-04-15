import type { Metadata } from 'next'
import { Outfit, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '500', '600', '700', '800'],
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Linkea – Innovación a la medida',
  description: 'Equipo de desarrollo de software en Paraguay. Sistemas a medida, apps web e infraestructura tecnológica.',
  icons: {
    icon: '/logos/LINKEA_favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${outfit.variable} ${ibmPlexMono.variable}`}>
        {children}
      </body>
    </html>
  )
}