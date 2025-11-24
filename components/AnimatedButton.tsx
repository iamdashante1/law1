'use client'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import React from 'react'

const MotionAnchor = motion('a')
const MotionButton = motion.button

type BaseProps = {
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'outline' | 'ghost' | 'inverted'
}

type AnchorProps = BaseProps & {
  href: string
  target?: React.HTMLAttributeAnchorTarget
  rel?: string
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

type ButtonProps = BaseProps & {
  href?: never
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

type AnimatedButtonProps = AnchorProps | ButtonProps

export default function AnimatedButton(props: AnimatedButtonProps) {
  const { children, className, variant = 'primary' } = props
  const base = clsx(
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500/50 focus-visible:ring-offset-2',
    'transition-transform',
    'href' in props ? undefined : props.disabled && 'opacity-70 cursor-not-allowed',
    variant === 'primary' && 'bg-slate-900 text-white hover:bg-black',
    variant === 'outline' && 'border border-slate-300 text-slate-900 hover:bg-slate-100',
    variant === 'ghost' && 'text-slate-700 hover:text-slate-900',
    variant === 'inverted' && 'border border-white/40 text-white hover:bg-white/10',
    className,
  )

  const motionProps = {
    whileHover: { y: -1, scale: 1.02 },
    whileTap: { scale: 0.98, y: 0 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 20 },
  }

  if ('href' in props) {
    const { href, target, rel, onClick } = props
    const computedRel = rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)
    return (
      <MotionAnchor href={href} target={target} rel={computedRel} className={base} onClick={onClick} {...motionProps}>
        {children}
      </MotionAnchor>
    )
  }

  const { disabled, type = 'button', onClick } = props
  return (
    <MotionButton type={type} disabled={disabled} className={base} onClick={onClick} {...motionProps}>
      {children}
    </MotionButton>
  )
}
