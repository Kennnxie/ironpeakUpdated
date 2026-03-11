import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import CornerButton from '@/components/ui/CornerButton'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative h-[500px] rounded-sm overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80"
            alt="IronPeak team reviewing project plans"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase mb-4">
            About IronPeak Construction Group
          </p>
          <h2 className="text-4xl font-extrabold text-zinc-900 leading-tight mb-6">
            Experts in Residential & Commercial Construction
          </h2>
          <p className="text-zinc-600 leading-relaxed mb-4">
            Founded in 2014, IronPeak Construction Group is a full-service construction company built for homeowners, real estate investors, and small business owners who want reliable construction without surprises. We deliver high-quality residential and small commercial projects across the Bay Area with dependable timelines and clear communication at every stage.
          </p>
          <p className="text-zinc-600 leading-relaxed mb-10">
            We&apos;re a modern, no-nonsense builder. Every project runs on structure, planning, and execution, from the first blueprint review to the final walkthrough. Serving San Jose, Santa Clara, Sunnyvale, Palo Alto, and Fremont.
          </p>
          <CornerButton
            href="#services"
            className="px-7 py-3.5 bg-brand-red text-white hover:bg-red-900"
            cornerColorClass="border-zinc-900"
            icon={<ArrowRight size={16} />}
            iconClassName="group-hover:translate-x-1"
          >
            Discover More
          </CornerButton>
        </div>
      </div>
    </section>
  )
}
