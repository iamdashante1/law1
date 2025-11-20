'use client'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import React from 'react'

type Props = {
  href?: string
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'outline' | 'ghost'
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLElement>
  type?: 'button' | 'submit' | 'reset'
}

export default function AnimatedButton({ href, children, className, variant = 'primary', disabled, onClick, type = 'button' }: Props) {
  const base = clsx(
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium transition-colors',
    disabled && 'opacity-70 cursor-not-allowed',
    variant === 'primary' && 'bg-accent text-black',
    variant === 'outline' && 'border border-white/20 text-white/90 hover:bg-white/5',
    variant === 'ghost' && 'text-white/80 hover:text-white',
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
