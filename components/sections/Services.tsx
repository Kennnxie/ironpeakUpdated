import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import CornerButton from '@/components/ui/CornerButton'
import { services } from '@/lib/services'
import ServiceCard from '@/components/ui/ServiceCard'

export default function Services() {
  return (
      <section id="services" className="relative overflow-hidden py-24 bg-zinc-50 scroll-mt-24">
        <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'url("/trianglewall.avif")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-red" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                Our Services
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-zinc-900 leading-tight max-w-lg">
              Built for Every Stage of Your Project
            </h2>
          </div>
          <CornerButton
            href="#contact"
            className="px-6 py-3.5 bg-brand-red text-sm text-white whitespace-nowrap self-start md:self-auto hover:bg-red-900"
            cornerColorClass="border-zinc-900"
            icon={<ArrowUpRight size={15} />}
            iconClassName="group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            View All Services
          </CornerButton>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
          {services.map((service) => (
            <ServiceCard key={service.slug} {...service} className="h-[28rem]" />
          ))}
        </div>

        <p className="text-center text-zinc-500 text-sm mt-12">
          Want to see our full range of services?{' '}
          <Link href="#contact" className="inline-flex items-center gap-1 text-brand-red font-semibold hover:underline">
            Get in Touch
            <ArrowUpRight size={14} />
          </Link>
        </p>
      </div>
    </section>
  )
}
