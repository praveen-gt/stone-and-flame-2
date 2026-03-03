import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Outfit } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-ui',
  display: 'swap',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: {
    default: 'Stone & Flame — Japanese Bar & Restaurant, Salamanca Hobart',
    template: '%s | Stone & Flame',
  },
  description:
    'A Japanese bar-led dining house in Salamanca, Hobart. Shaped by hibachi fire, restraint, and warm hospitality in a heritage sandstone building.',
  keywords: ['Japanese restaurant Hobart', 'Japanese bar Hobart', 'Salamanca dining', 'hibachi Hobart', 'Stone and Flame'],
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    siteName: 'Stone & Flame',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${playfair.variable} ${cormorant.variable} ${outfit.variable}`}>
      <body className="antialiased" style={{ backgroundColor: 'var(--color-charcoal)', color: 'var(--color-bone)' }}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
