import Link from 'next/link'
import { posts } from '@/content/posts'

export const metadata = {
  title: 'Blog | Legal',
  description: 'Insights on law, contracts, and dispute strategy.',
}

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1))
  return (
    <section className="bg-white py-20">
      <div className="container">
        <h1 className="font-display text-3xl text-slate-900 md:text-4xl">Insights & Resources</h1>
        <p className="mt-3 max-w-2xl text-slate-600">Practical guidance on contracts, disputes, and risk management.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {sorted.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="block rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-100 transition hover:-translate-y-1"
            >
              <div className="text-xs capitalize text-slate-500">{formatDate(p.date)}</div>
              <h2 className="mt-2 text-xl font-semibold text-slate-900">{p.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{p.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat('en', { dateStyle: 'medium' }).format(new Date(iso))
}
