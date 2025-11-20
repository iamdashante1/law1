import Section from '@/components/Section'
import { Briefcase, Building2, HeartHandshake, Home, Landmark, ShieldAlert } from 'lucide-react'

const areas = [
  { icon: Building2, title: 'Business Law' },
  { icon: Briefcase, title: 'Employment' },
  { icon: Home, title: 'Real Estate' },
  { icon: Landmark, title: 'Civil Litigation' },
  { icon: ShieldAlert, title: 'Insurance Defense' },
  { icon: HeartHandshake, title: 'Family Law' },
]

export default function PracticeAreas() {
  return (
    <Section className="container py-16 sm:py-20">
      <h2 id="practice" className="font-display text-3xl md:text-4xl">Practice Areas</h2>
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {areas.map(({ icon: Icon, title }) => (
          <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 hover:bg-white/[0.08] transition">
            <div className="flex items-center gap-3">
              <Icon className="h-5 w-5 text-accent" />
              <h3 className="font-medium">{title}</h3>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
