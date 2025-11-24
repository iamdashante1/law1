'use client'
import React from 'react'
import clsx from 'clsx'
import { motion, MotionProps } from 'framer-motion'

const AnchorElement = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement>>(function AnchorElement(
  props,
  ref,
) {
  return <a ref={ref} {...props} />
})

const ButtonElement = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(function ButtonElement(
  props,
  ref,
) {
  return <button ref={ref} {...props} />
})

const MotionAnchor = motion(AnchorElement)
const MotionButton = motion(ButtonElement)

type MotionAnchorProps = React.ComponentProps<typeof MotionAnchor>
type MotionButtonProps = React.ComponentProps<typeof MotionButton>

type Variant = 'primary' | 'outline' | 'ghost' | 'inverted'

type CommonProps = {
  children: React.ReactNode
  className?: string
  variant?: Variant
}

type AnchorOnlyProps = Omit<MotionAnchorProps, 'className' | 'children' | 'href'> & {
  href: string
}

type ButtonOnlyProps = Omit<MotionButtonProps, 'className' | 'children'> & {
  href?: never
}

type AnimatedButtonProps = CommonProps & (AnchorOnlyProps | ButtonOnlyProps)

const motionBehavior = {
  whileHover: { y: -1, scale: 1.02 },
  whileTap: { scale: 0.98, y: 0 },
  transition: { type: 'spring', stiffness: 400, damping: 20 },
} satisfies Pick<MotionProps, 'whileHover' | 'whileTap' | 'transition'>

const AnimatedButton = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, AnimatedButtonProps>(function AnimatedButton(
  props,
  forwardedRef,
) {
  const { children, className, variant = 'primary', ...rest } = props
  const isAnchor = 'href' in props

  const baseClass = clsx(
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500/50 focus-visible:ring-offset-2',
    'transition-transform',
    !isAnchor && (rest as ButtonOnlyProps).disabled && 'opacity-70 cursor-not-allowed',
    variant === 'primary' && 'bg-slate-900 text-white hover:bg-black',
    variant === 'outline' && 'border border-slate-300 text-slate-900 hover:bg-slate-100',
    variant === 'ghost' && 'text-slate-700 hover:text-slate-900',
    variant === 'inverted' && 'border border-white/40 text-white hover:bg-white/10',
    className,
  )

  if (isAnchor) {
    const { href, target, rel, ...anchorRest } = rest as AnchorOnlyProps
    const computedRel = rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)

    return (
      <MotionAnchor
        {...anchorRest}
        {...motionBehavior}
        href={href}
        target={target}
        rel={computedRel}
        className={baseClass}
        ref={forwardedRef as React.Ref<HTMLAnchorElement>}
      >
        {children}
      </MotionAnchor>
    )
  }

  const { type = 'button', disabled, ...buttonRest } = rest as ButtonOnlyProps

  return (
    <MotionButton
      {...buttonRest}
      {...motionBehavior}
      type={type}
      disabled={disabled}
      className={baseClass}
      ref={forwardedRef as React.Ref<HTMLButtonElement>}
    >
      {children}
    </MotionButton>
  )
})

export default AnimatedButton
