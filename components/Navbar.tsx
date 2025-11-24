'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import AnimatedButton from '@/components/AnimatedButton'

const navItems = [
  { label: 'Model', href: '#model' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Approach', href: '#approach' },
  { label: 'Experience', href: '#experience' },
  { label: 'Engage', href: '#engage' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="container flex h-16 items-center justify-between gap-6">
          <Link href="#" className="font-display text-lg text-slate-900">
            Law Studio
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-slate-900">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <AnimatedButton href="tel:+15551234567" variant="ghost">Call (555) 123-4567</AnimatedButton>
            <AnimatedButton href="#engage">Book Intro</AnimatedButton>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-700"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-slate-900/60" onClick={() => setOpen(false)} />
          <div className="fixed top-0 right-0 z-50 flex h-full w-72 flex-col bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 p-4">
              <span className="font-semibold text-slate-900">Menu</span>
              <button
                className="rounded-full border border-slate-200 p-2 text-slate-700"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-2 p-4 text-slate-800">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm hover:bg-slate-100"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto space-y-3 p-4">
              <AnimatedButton href="#engage" className="w-full">Book Intro</AnimatedButton>
              <AnimatedButton href="tel:+15551234567" variant="outline" className="w-full">Call (555) 123-4567</AnimatedButton>
            </div>
          </div>
        </>
      )}
    </>
  )
}
