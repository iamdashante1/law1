'use client'
import { motion } from 'framer-motion'
import clsx from 'clsx'

export default function Burger({ open, className }: { open: boolean; className?: string }) {
  const common = 'absolute left-0 right-0 h-0.5 bg-white rounded'
  const transition = { type: 'spring', stiffness: 400, damping: 30 }

  return (
    <div className={clsx('relative h-6 w-7', className)} aria-hidden>
      <motion.span
        className={common}
        initial={false}
        animate={open ? { top: '12px', rotate: 45 } : { top: '4px', rotate: 0 }}
        transition={transition}
      />
      <motion.span
        className={common}
        initial={false}
        animate={open ? { opacity: 0 } : { opacity: 1 }}
        transition={transition}
        style={{ top: '12px' }}
      />
      <motion.span
        className={common}
        initial={false}
        animate={open ? { top: '12px', rotate: -45 } : { top: '20px', rotate: 0 }}
        transition={transition}
      />
    </div>
  )
}

