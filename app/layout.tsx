import type { Metadata } from 'next'
import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Legal | Attorneys at Law',
    template: '%s | Legal',
  },
  description: 'Trusted legal counsel with a personal touch.',
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Legal',
    title: 'Legal | Attorneys at Law',
    description: 'Trusted legal counsel with a personal touch.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal | Attorneys at Law',
    description: 'Trusted legal counsel with a personal touch.',
  },
  icons: { icon: '/icon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-gradient-to-b from-brand-900 via-brand-950 to-black text-white antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
