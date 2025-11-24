'use client'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import React from 'react'

type Props = {
  href?: string
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'outline' | 'ghost' | 'inverted'
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLElement>
  type?: 'button' | 'submit' | 'reset'
}

export default function AnimatedButton({ href, children, className, variant = 'primary', disabled, onClick, type = 'button' }: Props) {
  const base = clsx(
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors',
    disabled && 'opacity-70 cursor-not-allowed',
    variant === 'primary' && 'bg-slate-900 text-white hover:bg-black',
    variant === 'outline' && 'border border-slate-300 text-slate-900 hover:bg-slate-100',
    variant === 'ghost' && 'text-slate-700 hover:text-slate-900',
    variant === 'inverted' && 'border border-white/40 text-white hover:bg-white/10',
    className,
  )

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ y: -1, scale: 1.02 }}
        whileTap={{ scale: 0.98, y: 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        className={base}
        onClick={onClick as any}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      whileHover={{ y: -1, scale: 1.02 }}
      whileTap={{ scale: 0.98, y: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={base}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}
