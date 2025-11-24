import AnimatedButton from '@/components/AnimatedButton'
import Image from 'next/image'

const signals = [
  { title: 'Series C operator', summary: 'Commercial strategy + rapid dispute intake' },
  { title: 'Creative studio', summary: 'Global IP and partnership framework' },
  { title: 'Family office', summary: 'Multi-asset governance refresh' },
]

export default function Hero() {
  return (
    <section className="bg-white pt-24 pb-16 md:pt-28" id="model">
      <div className="container grid items-start gap-14 lg:grid-cols-[1.1fr,0.9fr]">
        <div>
          <p className="text-sm font-semibold text-slate-500 capitalize">Law Studio</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Precision counsel for decisive teams.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-600">
            We embed with founders, investors, and operators to translate legal risk into practical direction—covering
            governance, commercial negotiations, and complex disputes in equal measure.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <AnimatedButton href="#engage">Discuss a matter</AnimatedButton>
            <AnimatedButton href="mailto:hello@lawstudio.com" variant="outline">
              Email hello@lawstudio.com
            </AnimatedButton>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1528892952291-009c663ce843?q=80&w=800&auto=format&fit=crop"
                alt="Attorney portrait"
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-slate-500 capitalize">Lead counsel</p>
              <p className="text-lg font-semibold text-slate-900">Dashante Hart</p>
              <p className="text-sm text-slate-600">Outside GC · Arbitrator · Strategist</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm shadow-slate-200">
            <p className="text-sm font-semibold text-slate-900">Matters in flight</p>
            <ul className="mt-4 space-y-4">
              {signals.map((signal) => (
                <li key={signal.title} className="rounded-xl border border-slate-200 px-3 py-3">
                  <p className="text-sm font-medium text-slate-900">{signal.title}</p>
                  <p className="text-sm text-slate-600">{signal.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
