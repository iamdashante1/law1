'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import clsx from 'clsx'

export type Option = { label: string; value: string }

type Props = {
  name: string
  options: Option[]
  value?: string
  onChange?: (val: string) => void
  placeholder?: string
  className?: string
}

export default function Dropdown({ name, options, value, onChange, placeholder = 'Select…', className }: Props) {
  const [open, setOpen] = useState(false)
  const [internal, setInternal] = useState<string | undefined>(value)
  const [active, setActive] = useState<number>(-1)
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const selected = useMemo(() => options.find(o => o.value === (value ?? internal)), [options, value, internal])

  useEffect(() => { setInternal(value) }, [value])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!rootRef.current) return
      if (!rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  function commit(val: string) {
    setInternal(val)
    onChange?.(val)
    setOpen(false)
    buttonRef.current?.focus()
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (!open && (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      setOpen(true)
      setActive(Math.max(0, options.findIndex(o => o.value === (value ?? internal))))
      return
    }
    if (!open) return
    if (e.key === 'Escape') {
      e.preventDefault(); setOpen(false); buttonRef.current?.focus(); return
    }
    if (e.key === 'ArrowDown') { e.preventDefault(); setActive(a => Math.min(options.length - 1, a + 1)); return }
    if (e.key === 'ArrowUp') { e.preventDefault(); setActive(a => Math.max(0, a - 1)); return }
    if (e.key === 'Home') { e.preventDefault(); setActive(0); return }
    if (e.key === 'End') { e.preventDefault(); setActive(options.length - 1); return }
    if (e.key === 'Enter') { e.preventDefault(); const opt = options[active]; if (opt) commit(opt.value); return }
  }

  useEffect(() => {
    if (!open) return
    const el = listRef.current?.querySelector<HTMLElement>(`[data-index='${active}']`)
    el?.scrollIntoView({ block: 'nearest' })
  }, [active, open])

  const display = selected?.label ?? placeholder

  return (
    <div ref={rootRef} className={clsx('relative', className)}>
      <input type="hidden" name={name} value={selected?.value ?? ''} />
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        onKeyDown={onKeyDown}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-white/90 focus:outline-none"
      >
        <span className={clsx(!selected && 'text-white/40')}>{display}</span>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/60" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            ref={listRef}
            role="listbox"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.12 }}
            className="absolute z-50 mt-2 max-h-56 w-full overflow-auto rounded-xl border border-white/10 bg-brand-900/95 backdrop-blur p-1"
          >
            {options.map((opt, i) => {
              const isSel = selected?.value === opt.value
              const isAct = active === i
              return (
                <li
                  key={opt.value}
                  data-index={i}
                  role="option"
                  aria-selected={isSel}
                  onMouseEnter={() => setActive(i)}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => commit(opt.value)}
                  className={clsx('cursor-pointer rounded-lg px-3 py-2 text-sm',
                    isAct ? 'bg-white/10 text-white' : 'text-white/80 hover:bg-white/5')}
                >
                  {opt.label}
                </li>
              )
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

