import Section from '@/components/Section'
import { FileSignature, Gavel, Shield } from 'lucide-react'

const items = [
  { icon: Gavel, title: 'Litigation & Dispute Resolution', desc: 'Strategic representation in complex civil and commercial disputes.' },
  { icon: FileSignature, title: 'Contracts & Transactions', desc: 'Clear, protective agreements that advance your business goals.' },
  { icon: Shield, title: 'Risk & Compliance', desc: 'Proactive counsel to prevent issues and safeguard operations.' },
]

export default function Services() {
  return (
    <Section className="container py-16 sm:py-20" >
      <h2 id="services" className="font-display text-3xl md:text-4xl">How We Help</h2>
      <p className="mt-3 text-white/70 max-w-2xl">Tailored legal services rooted in diligence, clarity, and a commitment to your success.</p>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6">
            <Icon className="h-6 w-6 text-accent" />
            <h3 className="mt-4 font-medium">{title}</h3>
            <p className="mt-2 text-white/70 text-sm">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
