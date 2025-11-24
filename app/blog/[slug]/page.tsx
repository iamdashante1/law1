import { notFound } from 'next/navigation'
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
    <section className="bg-white py-20">
      <div className="container">
        <div className="text-xs capitalize text-slate-500">{formatDate(post.date)}</div>
        <h1 className="mt-2 font-display text-3xl text-slate-900 md:text-4xl">{post.title}</h1>
        <article className="mt-6 space-y-5 text-slate-700">
          {post.content.map((para, i) => (
            <p key={i} className="leading-7">{para}</p>
          ))}
        </article>
      </div>
    </section>
  )
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat('en', { dateStyle: 'medium' }).format(new Date(iso))
}
