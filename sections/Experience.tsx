const caseStudies = [
  {
    client: 'Global hospitality group',
    impact: 'Rebuilt vendor ecosystem across 18 countries with unified templates and guardrails',
    result: 'Enabled rollout of two new business lines in under 120 days.',
  },
  {
    client: 'Series C fintech company',
    impact: 'Designed litigation readiness and negotiated resolution of multi-party dispute',
    result: 'Preserved key partnerships and avoided public filing.',
  },
  {
    client: 'Boutique creative studio',
    impact: 'Centralized IP, licensing, and production agreements under one rights management hub',
    result: 'Cleared backlog of 70+ deals and unlocked new revenue channels.',
  },
]

const testimonials = [
  { quote: 'Dashante plots strategy like a COO and negotiates like a closer.', name: 'Chief Legal Officer, SaaS' },
  { quote: 'We finally have legal advice that keeps pace with our product roadmap.', name: 'Head of Product, Media' },
]

export default function Experience() {
  return (
    <section className="bg-white py-16" id="experience">
      <div className="container grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
        <div>
          <p className="text-sm font-semibold text-slate-500 capitalize">Case snapshots</p>
          <div className="mt-6 space-y-4">
            {caseStudies.map((study) => (
              <article key={study.client} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-100">
                <p className="text-xs text-slate-500 capitalize">{study.client}</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{study.impact}</p>
                <p className="mt-2 text-sm text-slate-600">{study.result}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-100">
          <p className="text-sm font-semibold text-slate-500 capitalize">Partner praise</p>
          <div className="mt-4 space-y-6">
            {testimonials.map((t) => (
              <blockquote key={t.quote}>
                <p className="text-lg text-slate-900">“{t.quote}”</p>
                <footer className="mt-2 text-sm text-slate-600">— {t.name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
