import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h3 className="font-display text-lg text-slate-900">Law Studio</h3>
          <p className="mt-3 text-sm text-slate-600">
            Counsel for modern operators, investors, and creative leaders.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-500 capitalize">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-brand-700" />
              (555) 123-4567
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-brand-700" />
              hello@lawstudio.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-brand-700" />
              100 Main St, Suite 200, Anytown
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-slate-500 capitalize">Hours</h4>
          <p className="mt-3 text-sm text-slate-700">Mon – Fri · 9:00 – 17:00</p>
        </div>
      </div>
        <div className="border-t border-slate-200">
        <div className="container py-4 text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Law Studio. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
