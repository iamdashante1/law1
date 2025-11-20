import Link from 'next/link'
import { posts } from '@/content/posts'
import Section from '@/components/Section'

export const metadata = {
  title: 'Blog | Legal',
  description: 'Insights on law, contracts, and dispute strategy.',
}

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1))
  return (
    <Section className="container py-20">
      <h1 className="font-display text-3xl md:text-4xl">Insights & Resources</h1>
      <p className="mt-3 text-white/70 max-w-2xl">Practical guidance on contracts, disputes, and risk management.</p>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {sorted.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.07] transition block">
            <div className="text-xs text-white/50">{formatDate(p.date)}</div>
            <h2 className="mt-2 text-xl font-medium">{p.title}</h2>
            <p className="mt-2 text-white/70 text-sm">{p.summary}</p>
          </Link>
        ))}
      </div>
    </Section>
  )
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat('en', { dateStyle: 'medium' }).format(new Date(iso))
}
