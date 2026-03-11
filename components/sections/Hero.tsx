import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import CornerButton from '@/components/ui/CornerButton'

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[720px] flex items-center">
      <Image
        src="https://images.unsplash.com/photo-1541976590-713941681591?w=1920&q=80"
        alt="Construction site"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <p className="text-brand-red text-sm font-bold tracking-[0.25em] uppercase mb-5">
          Delivering Quality Construction
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight max-w-2xl mb-6">
          Built With Strength And Precision
        </h1>
        <p className="text-white/70 text-lg max-w-md mb-10 leading-relaxed">
          Bay Area&apos;s trusted construction partner since 2014. Residential and commercial projects delivered on time, on budget, and without surprises.
        </p>
        <div className="flex items-center gap-4">
          <CornerButton
            href="#services"
            className="min-h-[58px] px-7 py-4 bg-brand-red text-white hover:bg-red-900"
            icon={<ArrowRight size={16} />}
            iconClassName="group-hover:translate-x-1"
          >
            Explore Our Services
          </CornerButton>
          <CornerButton
            href="#contact"
            className="min-h-[58px] px-8 py-4 border-2 border-white/70 text-white hover:bg-white hover:text-zinc-900 hover:border-white hover:shadow-lg"
            cornerColorClass="border-brand-red"
            cornerOffset={-5}
            icon={<ArrowUpRight size={16} />}
            iconClassName="group-hover:translate-x-1"
          >
            Contact Us
          </CornerButton>
        </div>
      </div>
    </section>
  )
}
