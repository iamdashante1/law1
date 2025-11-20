import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-950">
      <div className="container py-8 sm:py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-lg mb-3">Legal</h3>
          <p className="text-white/70 text-sm">Dedicated advocacy, clear guidance, and results that matter.</p>
        </div>
        <div>
          <h4 className="font-medium mb-3">Contact</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-accent" /> (555) 123‑4567</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-accent" /> info@streetelaw.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" /> 100 Main St, Suite 200, Anytown</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3">Hours</h4>
          <p className="text-white/80 text-sm">Mon–Fri 9:00–17:00</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-3 sm:py-4 pb-[env(safe-area-inset-bottom)] text-xs text-white/60">&copy; {new Date().getFullYear()} Legal. All rights reserved.</div>
      </div>
    </footer>
  )
}
