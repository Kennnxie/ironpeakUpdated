import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { Service } from '@/lib/services'

type Props = Service & { className?: string }

export default function ServiceCard({ title, description, image, className }: Props) {
  return (
    <div className={cn('group relative overflow-hidden rounded-sm cursor-pointer', className)}>

      {/* Progress line — runs left to right over 3s on hover */}
      <div className="absolute top-0 left-0 right-0 h-[3px] z-20 overflow-hidden">
        <div className="h-full w-full bg-brand-red origin-left scale-x-0 group-hover:animate-card-progress" />
      </div>

      {/* Background image — zooms on hover */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient — always on so title is readable, deepens on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent transition-opacity duration-300" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 p-7">
        {/* Title — always visible */}
        <h3 className="text-white font-bold text-xl leading-snug mb-2">{title}</h3>
        {/* Description — fades in and slides up on hover */}
          <p className="text-white/75 text-sm leading-relaxed">
          {description}
        </p>
      </div>

    </div>
  )
}
