'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function Section({ children, className="" }: { children: ReactNode, className?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-100px' }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

