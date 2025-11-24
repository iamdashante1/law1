const highlights = [
  {
    title: 'Fractional General Counsel',
    summary: 'Plug-in leadership for scaling teams that need thoughtful legal infrastructure without hiring full-time.',
    details: ['Stand-up governance systems', 'Integrate with finance + ops cadences', 'Quarterly executive briefings'],
  },
  {
    title: 'Commercial & Product Strategy',
    summary: 'Contracts, GTM support, and product counseling for SaaS, media, and consumer brands.',
    details: ['Revenue enablement playbooks', 'Data + privacy readiness', 'Cross-border partnership support'],
  },
  {
    title: 'Complex Disputes',
    summary: 'Business-critical disputes handled with trial-ready discipline and negotiation savvy.',
    details: ['Early case assessments', 'Arbitration & mediation', 'Litigation oversight'],
  },
]

export default function Highlights() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="container space-y-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-slate-500 capitalize">Where we operate</p>
          <h2 className="mt-3 font-display text-3xl text-slate-900 sm:text-4xl">Multidisciplinary support without the bloat.</h2>
          <p className="mt-4 text-slate-600">
            Every engagement is bespoke—yet powered by reusable frameworks, research libraries, and trusted partner networks.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {item.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
