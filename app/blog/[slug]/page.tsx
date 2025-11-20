import { notFound } from 'next/navigation'
import Section from '@/components/Section'
import { getPostBySlug, posts } from '@/content/posts'

type Params = { params: { slug: string } }

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Params) {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} | Legal`,
    description: post.summary,
  }
}

export default function BlogPost({ params }: Params) {
  const post = getPostBySlug(params.slug)
  if (!post) return notFound()
  return (
    <Section className="container py-20">
      <div className="text-xs text-white/50">{formatDate(post.date)}</div>
      <h1 className="mt-2 font-display text-3xl md:text-4xl">{post.title}</h1>
      <article className="mt-6 space-y-5">
        {post.content.map((para, i) => (
          <p key={i} className="text-white/80 leading-7">{para}</p>
        ))}
      </article>
    </Section>
  )
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat('en', { dateStyle: 'medium' }).format(new Date(iso))
}
