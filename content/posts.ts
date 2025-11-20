export type Post = {
  slug: string
  title: string
  date: string // ISO
  summary: string
  content: string[] // paragraphs
}

export const posts: Post[] = [
  {
    slug: 'how-to-prepare-for-your-first-consultation',
    title: 'How to Prepare for Your First Consultation',
    date: '2024-09-01',
    summary: 'A short checklist to make your first meeting efficient and productive.',
    content: [
      'Your initial consultation sets the tone for our work together. Bringing the right information helps us move quickly and precisely.',
      'Gather key documents (contracts, emails, notices), prepare a brief timeline of events, and list your top three goals. Think about risks you want to avoid and outcomes you’d consider a win.',
      'We’ll discuss options, likely timelines, and next steps so you leave with clarity and confidence.',
    ],
  },
  {
    slug: 'contracts-101-what-to-look-for',
    title: 'Contracts 101: What to Look For',
    date: '2024-08-18',
    summary: 'Understand the clauses that matter most before you sign.',
    content: [
      'A clear contract prevents disputes. Focus on scope, payment terms, deadlines, IP ownership, termination rights, dispute resolution, and confidentiality.',
      'If something is ambiguous, it probably needs revision. Align the contract with how you actually intend to operate, not just what sounds good in theory.',
      'We can review, redline, and negotiate to protect your interests without slowing the deal.',
    ],
  },
  {
    slug: 'dispute-resolution-choosing-the-right-path',
    title: 'Dispute Resolution: Choosing the Right Path',
    date: '2024-07-22',
    summary: 'Litigation, mediation, or arbitration? Here’s how to think about it.',
    content: [
      'Each forum has tradeoffs. Litigation creates precedent but can be slow. Arbitration is private and typically faster, but appeals are limited. Mediation can resolve matters early with minimal cost if both sides are motivated.',
      'We help evaluate leverage, cost, timeline, and outcome ranges so you can choose a strategy that fits the dispute and your goals.',
    ],
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug)
}

