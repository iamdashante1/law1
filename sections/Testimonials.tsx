'use client'
import Section from '@/components/Section'
import { motion } from 'framer-motion'

const testimonials = [
  { quote: "Clear, confident, and effective. We felt protected every step.", name: "A. Morgan, CEO" },
  { quote: "Smart strategy and excellent results. Highly recommend.", name: "R. Patel, Founder" },
  { quote: "Responsive, thoughtful, and relentless in negotiations.", name: "K. Lee, General Counsel" },
]

export default function Testimonials() {
  return (
    <Section className="container py-16 sm:py-20">
      <h2 id="testimonials" className="font-display text-3xl md:text-4xl">Client Feedback</h2>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6"
          >
            <p className="text-white/90">“{t.quote}”</p>
            <footer className="mt-4 text-sm text-white/60">— {t.name}</footer>
          </motion.blockquote>
        ))}
      </div>
    </Section>
  )
}
