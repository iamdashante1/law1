import Section from '@/components/Section'
import Image from 'next/image'

export default function Attorney() {
  return (
    <Section className="container py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
          <Image
            src="https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=1829&auto=format&fit=crop"
            alt="Lead attorney portrait"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <h2 id="attorney" className="font-display text-3xl md:text-4xl">Dashante Streete, Esq.</h2>
          <p className="mt-4 text-white/70">Dashante brings over a decade of experience advising clients through high‑stakes disputes and critical transactions. Known for sharp analysis and steady counsel, she pairs courtroom tenacity with practical, business‑minded strategy.</p>
          <ul className="mt-6 space-y-2 text-white/80 text-sm">
            <li>• J.D., Top Law School</li>
            <li>• Bar Admissions: State, Federal</li>
            <li>• Recognition: Super Lawyers Rising Star</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
