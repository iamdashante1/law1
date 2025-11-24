import AnimatedButton from '@/components/AnimatedButton'
import { CalendarDays, Mail, Phone } from 'lucide-react'

const channels = [
  {
    label: 'Schedule an intro',
    description: 'Choose a 20-minute alignment session with Dashante.',
    icon: CalendarDays,
    href: 'https://calendly.com',
  },
  {
    label: 'Call the desk',
    description: 'Immediate response for active matters.',
    icon: Phone,
    href: 'tel:+15551234567',
  },
  {
    label: 'Send background',
    description: 'Share a Loom, memo, or deck for a rapid assessment.',
    icon: Mail,
    href: 'mailto:hello@lawstudio.com',
  },
]

export default function Engagement() {
  return (
    <section className="bg-slate-900 py-16 text-white" id="engage">
      <div className="container space-y-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-slate-300 capitalize">Engage</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">Ready when the stakes are highest.</h2>
          <p className="mt-4 text-slate-200">
            We respond the same day with a scope outline, budget guardrails, and immediate next steps.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {channels.map((channel) => (
            <div key={channel.label} className="rounded-3xl bg-slate-800 p-5 shadow-lg shadow-black/40">
              <channel.icon className="h-6 w-6 text-accent" />
              <p className="mt-4 text-lg font-semibold">{channel.label}</p>
              <p className="mt-2 text-sm text-slate-200">{channel.description}</p>
              <AnimatedButton href={channel.href} className="mt-5 w-full" variant="inverted">
                Go now
              </AnimatedButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
