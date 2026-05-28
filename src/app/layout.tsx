import type { Metadata } from 'next'
import { DM_Sans, Syne } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Novo Tempo Soluções em Engenharia | NT Engenharia',
    template: '%s | NT Engenharia',
  },
  description:
    'Empresa especializada em consultoria, projetos de engenharia estrutural, cálculo e BIM. Mais de 35 anos de experiência em estruturas de concreto e metálicas.',
  keywords: [
    'engenharia estrutural',
    'projetos de concreto',
    'BIM',
    'consultoria de engenharia',
    'estruturas metálicas',
    'cálculo estrutural',
    'São Paulo',
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://novotempoengenharia.com.br',
    siteName: 'NT Engenharia',
    title: 'Novo Tempo Soluções em Engenharia',
    description:
      'Especialistas em consultoria, projetos e cálculo estrutural. Mais de 35 anos transformando projetos em realidade.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${syne.variable}`}>
      <body className="antialiased font-sans bg-white text-gray-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Novo Tempo Soluções em Engenharia',
              alternateName: 'NT Engenharia',
              url: 'https://novotempoengenharia.com.br',
              logo: 'https://novotempoengenharia.com.br/assets/logo/logo-nt-color.svg',
              description:
                'Empresa especializada em consultoria, projetos de engenharia estrutural e BIM.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'São Paulo',
                addressRegion: 'SP',
                addressCountry: 'BR',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+55-11-98261-2500',
                contactType: 'customer service',
                availableLanguage: 'Portuguese',
              },
            }),
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
