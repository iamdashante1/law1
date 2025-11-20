import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container py-28 text-center">
      <h1 className="font-display text-4xl">Page not found</h1>
      <p className="mt-3 text-white/70">We couldn’t find what you’re looking for.</p>
      <Link href="/" className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-black font-medium">Back to home</Link>
    </div>
  )
}

