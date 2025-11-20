'use client'
import { motion } from 'framer-motion'
import { ShieldCheck, Scale, Phone, Clock, BadgeCheck, ChevronDown } from 'lucide-react'
import AnimatedButton from '@/components/AnimatedButton'
import BackgroundOrbs from '@/components/BackgroundOrbs'

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Background image + animated orbs */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1964&auto=format&fit=crop')] bg-cover bg-center opacity-15"></div>
      <BackgroundOrbs />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-brand-950/40 to-brand-950/70" />

      <div className="container relative min-h-[80vh] md:min-h-[90vh] py-24 md:py-32 flex flex-col justify-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80"
        >
          <BadgeCheck className="h-4 w-4 text-accent" /> 10+ years of trusted counsel
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-4 font-display text-3xl sm:text-5xl md:text-6xl tracking-tight max-w-3xl"
        >
          Practical Counsel. Proven Results.
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20, }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 max-w-xl sm:max-w-2xl text-white/80"
        >
          Strategic guidance across disputes, contracts, and risk—so you can move forward with clarity and confidence.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4"
        >
          <AnimatedButton href="#contact" className="w-full sm:w-auto" variant="primary">
            <ShieldCheck className="h-5 w-5" /> Book a Consultation
          </AnimatedButton>
          <AnimatedButton href="tel:(555)123-4567" className="w-full sm:w-auto" variant="outline">
            <Phone className="h-5 w-5" /> (555) 123‑4567
          </AnimatedButton>
        </motion.div>

        {/* Highlights */}
        <motion.ul
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 max-w-3xl"
        >
          <li className="flex items-center gap-2 text-white/80 text-sm">
            <Clock className="h-4 w-4 text-accent" /> Fast response and clear next steps
          </li>
          <li className="flex items-center gap-2 text-white/80 text-sm">
            <Scale className="h-4 w-4 text-accent" /> Business‑minded strategy
          </li>
          <li className="flex items-center gap-2 text-white/80 text-sm">
            <ShieldCheck className="h-4 w-4 text-accent" /> Transparent, upfront fees
          </li>
        </motion.ul>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-white/40 text-xs"
        >
          <span>As featured in</span>
          <span className="tracking-wider">Chambers</span>
          <span className="tracking-wider">SuperLawyers</span>
          <span className="tracking-wider">Law360</span>
          <span className="tracking-wider">ABA Journal</span>
        </motion.div>

        {/* Scroll cue */}
        <a href="#services" className="group mt-12 inline-flex items-center gap-2 text-white/60 hover:text-white">
          <ChevronDown className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
          <span className="text-sm">Scroll to explore</span>
        </a>
      </div>
    </div>
  )
}
