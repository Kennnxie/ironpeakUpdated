import Image from 'next/image'
import Link from 'next/link'
import NewsletterForm from '@/components/ui/NewsletterForm'
import {
  companyDescription,
  companyName,
  contactPhoneDisplay,
  coreServices,
  footerLinks,
  locationLabel,
  serviceAreaLabel,
  serviceFocusAreas,
} from '@/lib/site'

export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="bg-white rounded-xl px-8 py-5 inline-flex items-center">
          <Image
            src="/Logo-color.png"
            alt={companyName}
            width={200}
            height={64}
            className="h-24 w-auto"
          />
        </div>

        <NewsletterForm />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row gap-0">
        <div className="md:w-72 md:pr-12 md:border-r md:border-zinc-800 pb-10 md:pb-0 border-b border-zinc-800 md:border-b-0">
          <h4 className="text-white font-bold text-sm mb-3">About Company</h4>
          <div className="w-8 h-0.5 bg-brand-red mb-5" />
          <p className="text-zinc-500 text-sm leading-relaxed mb-5">
            {companyDescription}
          </p>
          <p className="text-zinc-500 text-sm">Tel: {contactPhoneDisplay}</p>
          <p className="text-zinc-500 text-sm mt-1">{locationLabel}</p>
          <p className="text-zinc-500 text-sm mt-4 leading-relaxed">
            Serving {serviceAreaLabel}
          </p>
        </div>

        <div className="flex-1 md:pl-12 pt-10 md:pt-0 grid grid-cols-1 sm:grid-cols-3 gap-10">
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Service Focus</h4>
            <div className="w-8 h-0.5 bg-brand-red mb-5" />
            <ul className="space-y-3">
              {serviceFocusAreas.map((item) => (
                <li key={item}>
                  <Link href="#services" className="text-zinc-500 text-sm hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3">Useful Links</h4>
            <div className="w-8 h-0.5 bg-brand-red mb-5" />
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-zinc-500 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-3">Core Services</h4>
            <div className="w-8 h-0.5 bg-brand-red mb-5" />
            <ul className="space-y-3">
              {coreServices.map((service) => (
                <li key={service} className="text-zinc-500 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-5 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-zinc-600 text-xs">
          &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
        </p>
        <p className="text-zinc-600 text-xs text-center md:text-right">
          {locationLabel} | Bay Area service coverage
        </p>
      </div>
    </footer>
  )
}
