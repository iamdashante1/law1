'use client'
import { motion } from 'framer-motion'

export default function BackgroundOrbs() {
  const transition = { duration: 8, repeat: Infinity, repeatType: 'reverse' as const, ease: 'easeInOut' }
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-24 -left-24 h-80 w-80 blur-3xl"
        style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(199,162,67,0.35) 0%, rgba(199,162,67,0) 70%)' }}
        animate={{ x: [0, 20], y: [0, 10] }}
        transition={transition}
      />
      <motion.div
        className="absolute bottom-[-6rem] right-[-6rem] h-96 w-96 blur-3xl"
        style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(46,120,220,0.22) 0%, rgba(46,120,220,0) 70%)' }}
        animate={{ x: [0, -20], y: [0, -10] }}
        transition={transition}
      />
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 h-64 w-64 blur-2xl"
        style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%)' }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

