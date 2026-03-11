import { MapPin, Phone } from 'lucide-react'
import CornerButton from '@/components/ui/CornerButton'
import {
  contactPhoneDisplay,
  contactPhoneHref,
  locationLabel,
  serviceAreaLabel,
} from '@/lib/site'

export default function ContactCard() {
  return (
    <div className="w-full md:w-auto border border-zinc-800 bg-zinc-900 px-6 py-5">
      <p className="text-white text-sm font-semibold mb-2">Planning a project in the Bay Area?</p>
      <p className="text-zinc-400 text-sm leading-relaxed mb-5 max-w-md">
        IronPeak works with homeowners, investors, and small business owners who want a clear process and dependable execution.
      </p>
      <div className="flex flex-col gap-3 text-sm text-zinc-300 mb-5">
        <a href={contactPhoneHref} className="flex items-center gap-3 hover:text-white transition-colors">
          <Phone size={15} className="text-brand-red flex-shrink-0" />
          {contactPhoneDisplay}
        </a>
        <p className="flex items-start gap-3">
          <MapPin size={15} className="text-brand-red flex-shrink-0 mt-0.5" />
          <span>
            {locationLabel}
            <br />
            <span className="text-zinc-500">Serving {serviceAreaLabel}</span>
          </span>
        </p>
      </div>
      <CornerButton
        href="#contact"
        className="px-6 py-3 bg-brand-red text-white text-sm hover:bg-red-900"
        cornerColorClass="border-zinc-900"
        cornerSizeClass="w-4 h-4"
      >
        Request a Quote
      </CornerButton>
    </div>
  )
}
