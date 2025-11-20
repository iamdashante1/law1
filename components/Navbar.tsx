'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Scale, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedButton from '@/components/AnimatedButton'
import Burger from '@/components/Burger'

type NavItem = { href: string; label: string }
const navItems: NavItem[] = [
  { href: '#services', label: 'Services' },
  { href: '#practice', label: 'Practice Areas' },
  { href: '#attorney', label: 'Attorney' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hovered, setHovered] = useState<string | null>(null)
  const [isLarge, setIsLarge] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track viewport >= lg to alter header styling
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const handler = (e: MediaQueryListEvent | MediaQueryList) => setIsLarge('matches' in e ? e.matches : (e as MediaQueryList).matches)
    handler(mq)
    mq.addEventListener('change', handler as any)
    return () => mq.removeEventListener('change', handler as any)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = prev }
    }
  }, [open])

  return (
    <motion.header
      {...(!isLarge && { initial: false, animate: scrolled ? 'scrolled' : 'top', variants: {
        top: { backgroundColor: 'rgba(11,33,68,0.15)', borderColor: 'rgba(255,255,255,0.06)' },
        scrolled: { backgroundColor: 'rgba(8,20,42,0.82)', borderColor: 'rgba(255,255,255,0.12)' },
      } })}
      className={`fixed top-0 z-50 w-full ${isLarge ? '' : 'backdrop-blur border-b'}`}
    >
      <div className="container relative flex items-center justify-between gap-3 py-3 md:py-4 pt-[env(safe-area-inset-top)] min-w-0">
        <Link href="#" className="flex items-center gap-2 flex-1 min-w-0">
          <Scale className="h-7 w-7 text-accent" />
          <span className="font-display text-lg sm:text-xl truncate">Legal</span>
        </Link>

        {/* Centered nav for large screens */}
        <div className="pointer-events-none absolute inset-0 hidden lg:flex items-center justify-center">
          <nav className="pointer-events-auto">
            <div className="relative flex items-center gap-3 px-1 py-1">
              {navItems.map((l) => (
                <div key={l.href} className="relative">
                  {hovered === l.href && (
                    <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-white/10" />
                  )}
                  <Link
                    href={l.href}
                    onMouseEnter={() => setHovered(l.href)}
                    onMouseLeave={() => setHovered((h) => (h === l.href ? null : h))}
                    className="relative z-10 px-4 py-1.5 text-sm text-white/80 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </div>
              ))}
            </div>
          </nav>
        </div>

        {/* Right-side actions */}
        <div className="hidden lg:flex items-center ml-4">
          <AnimatedButton href="#contact" variant="primary" className="px-4 py-2">
            <Phone className="h-4 w-4" /> Book Consultation
          </AnimatedButton>
        </div>

        {/* Medium screens: show CTA only */}
        <div className="hidden md:flex lg:hidden">
          <AnimatedButton href="#contact" variant="primary" className="px-4 py-2">
            <Phone className="h-4 w-4" /> Book
          </AnimatedButton>
        </div>

        {/* Burger for mobile */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <Burger open={open} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-brand-900/80 backdrop-blur z-40"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            key="panel"
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 26 }}
            className="md:hidden fixed inset-0 z-50"
            aria-modal="true"
            role="dialog"
          >
            <div className="absolute inset-0 bg-brand-950/90 backdrop-blur" onClick={() => setOpen(false)} />
            <div className="relative mx-auto mt-[calc(env(safe-area-inset-top)+72px)] w-[92%] max-w-md rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="flex flex-col divide-y divide-white/10">
                <div className="py-2">
                  {navItems.map(l => (
                    <Link onClick={()=>setOpen(false)} key={l.href} href={l.href} className="block rounded-lg px-3 py-3 text-white/90 text-base hover:bg-white/5">
                      {l.label}
                    </Link>
                  ))}
                </div>
                <div className="py-3 space-y-2 text-sm text-white/80">
                  <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> (555) 123‑4567</div>
                  <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> info@streetelaw.com</div>
                </div>
                <div className="pt-4 flex gap-2">
                  <AnimatedButton onClick={()=>setOpen(false)} href="#contact" className="flex-1" variant="primary">
                    <Phone className="h-4 w-4" /> Book Consultation
                  </AnimatedButton>
                  <AnimatedButton onClick={()=>setOpen(false)} href="tel:(555)123-4567" className="flex-1" variant="outline">
                    Call Now
                  </AnimatedButton>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
