'use client'
import Section from '@/components/Section'
import { useMemo, useState } from 'react'
import { Loader2, Phone, Mail, MapPin, Clock } from 'lucide-react'
import AnimatedButton from '@/components/AnimatedButton'
import Dropdown from '@/components/Dropdown'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState<string | null>(null)
  const [err, setErr] = useState<string | null>(null)
  const formspreeId = useMemo(() => process.env.NEXT_PUBLIC_FORMSPREE_ID, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setOk(null)
    setErr(null)
    setLoading(true)

    const fd = new FormData(e.currentTarget)

    if (!formspreeId) {
      setLoading(false)
      setErr('Form not configured. Set NEXT_PUBLIC_FORMSPREE_ID.')
      return
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: fd,
      })
      const data = await res.json().catch(() => ({}))
      if (res.ok) {
        setOk('Thanks—your message has been sent!')
        e.currentTarget.reset()
      } else {
        setErr(data?.errors?.[0]?.message || 'Unable to send. Please try again.')
      }
    } catch (error) {
      setErr('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Section className="container py-16 sm:py-20">
      <h2 id="contact" className="font-display text-3xl md:text-4xl">Contact</h2>
      <p className="mt-3 text-white/70 max-w-2xl">Tell us a bit about your matter. We usually reply within one business day.</p>

      <div className="mt-8 rounded-2xl border border-white/10 overflow-hidden">
        <div className="grid md:grid-cols-5">
          {/* Info panel */}
          <aside className="relative md:col-span-2">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1964&auto=format&fit=crop')] bg-cover bg-center opacity-20" />
            <div className="relative h-full p-6 sm:p-8 bg-white/5">
              <h3 className="font-medium">Office</h3>
              <ul className="mt-4 space-y-3 text-white/80 text-sm">
                <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-accent" /> 100 Main St, Suite 200, Anytown</li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> (555) 123‑4567</li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> info@streetelaw.com</li>
                <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> Mon–Fri 9:00–17:00</li>
              </ul>
              <div className="mt-6 flex flex-col sm:flex-row gap-2">
                <AnimatedButton href="tel:(555)123-4567" variant="outline" className="w-full sm:w-auto">Call Now</AnimatedButton>
                <AnimatedButton href="mailto:info@streetelaw.com" variant="ghost" className="w-full sm:w-auto">Email Us</AnimatedButton>
              </div>
            </div>
          </aside>

          {/* Form panel */}
          <div className="md:col-span-3 p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="sr-only" htmlFor="name">Name</label>
                <input id="name" name="name" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40" placeholder="Your name" required />
              </div>
              <div>
                <label className="sr-only" htmlFor="email">Email</label>
                <input id="email" name="email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40" placeholder="Email" type="email" required />
              </div>
              <div className="sm:col-span-2">
                <label className="sr-only" htmlFor="phone">Phone</label>
                <input id="phone" name="phone" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40" placeholder="Phone" type="tel" />
              </div>
              <Dropdown
                name="topic"
                placeholder="Topic"
                options={[
                  { label: 'General', value: 'General' },
                  { label: 'Contracts', value: 'Contracts' },
                  { label: 'Litigation', value: 'Litigation' },
                  { label: 'Real Estate', value: 'Real Estate' },
                ]}
              />
              <Dropdown
                name="urgency"
                placeholder="Urgency"
                options={[
                  { label: 'Normal', value: 'Normal' },
                  { label: 'Time-sensitive', value: 'Time-sensitive' },
                ]}
              />
              <div className="sm:col-span-2">
                <label className="sr-only" htmlFor="message">Message</label>
                <textarea id="message" name="message" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40" placeholder="Brief description" rows={6} required />
              </div>

              {/* Honeypot */}
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              {/* Subject for Formspree */}
              <input type="hidden" name="_subject" value="New Inquiry — Legal" />

              <div className="sm:col-span-2 flex items-start gap-2 text-xs text-white/70">
                <input id="consent" name="consent" type="checkbox" className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent" />
                <label htmlFor="consent">I agree to be contacted and have read the privacy policy.</label>
              </div>

              <div className="sm:col-span-2 flex flex-col sm:flex-row gap-3">
                <AnimatedButton type="submit" disabled={loading} className="flex-1" variant="primary">
                  {loading && <Loader2 className="h-4 w-4 animate-spin" />} Send Message
                </AnimatedButton>
                <AnimatedButton href="tel:(555)123-4567" className="flex-1" variant="outline">
                  <Phone className="h-4 w-4" /> Call Us
                </AnimatedButton>
              </div>

              {ok && <p className="sm:col-span-2 text-emerald-400 text-sm">{ok}</p>}
              {err && <p className="sm:col-span-2 text-red-400 text-sm">{err}</p>}
            </form>
          </div>
        </div>
      </div>
    </Section>
  )
}
