const phases = [
  {
    title: 'Orientation',
    description: 'We audit existing obligations, tech stack, and team workflows to get a 360° read within the first week.',
    artifacts: ['Matter intake map', 'Risk prioritization', 'Advisor roster'],
  },
  {
    title: 'Execution Sprints',
    description: 'Each initiative runs in two-week sprints with written updates and a clear owner on both sides.',
    artifacts: ['Sprint board + KPIs', 'Working draft room', 'Stakeholder briefings'],
  },
  {
    title: 'Review & Forecast',
    description: 'We package insights for leadership and offer recommended scenarios for the next quarter.',
    artifacts: ['Executive summary', 'Budget + timeline', 'Opportunities backlog'],
  },
]

export default function Approach() {
  return (
    <section className="bg-slate-50 py-16" id="approach">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-slate-500 capitalize">Advisory model</p>
          <h2 className="mt-3 font-display text-3xl text-slate-900 sm:text-4xl">
            Clarity through disciplined operating rhythms.
          </h2>
          <p className="mt-4 text-slate-600">
            No mystery retainers or unpredictable touchpoints—just transparent cadences and documentation your team can reuse.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {phases.map((phase, idx) => (
            <article key={phase.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-100">
              <div className="flex items-start gap-4">
                <span className="text-sm font-semibold text-brand-700">{String(idx + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{phase.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{phase.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {phase.artifacts.map((artifact) => (
                      <span key={artifact} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600">
                        {artifact}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
