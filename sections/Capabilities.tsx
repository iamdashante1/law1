const capabilitySets = [
  {
    heading: 'Corporate',
    items: [
      'Entity structuring, governance, and board support',
      'Strategic transactions, diligence, and closings',
      'Financing support from seed through later-stage debt',
    ],
  },
  {
    heading: 'Commercial',
    items: [
      'Sales, vendor, and licensing ecosystems',
      'Product + privacy reviews embedded with PM teams',
      'Global expansion and local counsel coordination',
    ],
  },
  {
    heading: 'Risk & Disputes',
    items: [
      'Crisis response and investigations',
      'Insurance recovery strategy',
      'Litigation oversight with curated trial counsel',
    ],
  },
]

export default function Capabilities() {
  return (
    <section className="bg-white py-16" id="capabilities">
      <div className="container">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-500 capitalize">Capabilities</p>
            <h2 className="mt-3 font-display text-3xl text-slate-900 sm:text-4xl">A practice built for momentum.</h2>
          </div>
          <p className="max-w-xl text-slate-600">
            We bridge strategic planning and execution, delivering the context your leadership team needs before committing
            capital or time.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {capabilitySets.map((set) => (
            <div key={set.heading} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-100">
              <p className="text-sm font-semibold text-slate-500 capitalize">{set.heading}</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {set.items.map((item) => (
                  <li key={item} className="rounded-2xl bg-white px-3 py-2 shadow-sm shadow-slate-100">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
