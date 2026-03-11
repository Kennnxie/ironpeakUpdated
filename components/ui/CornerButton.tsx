import type { ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type CornerButtonProps = {
  href: string
  children: ReactNode
  icon?: ReactNode
  className?: string
  cornerColorClass?: string
  cornerOffset?: number
  cornerSizeClass?: string
  iconClassName?: string
  cornerTransitionClass?: string
}

export default function CornerButton({
  href,
  children,
  icon,
  className,
  cornerColorClass = 'border-white',
  cornerOffset = -3,
  cornerSizeClass = 'w-5 h-5',
  iconClassName,
  cornerTransitionClass = 'duration-200',
}: CornerButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative inline-flex items-center gap-2 font-semibold transition-colors',
        className
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute border-l-2 border-t-2 opacity-0 transition-opacity group-hover:opacity-100',
          cornerTransitionClass,
          cornerSizeClass,
          cornerColorClass
        )}
        style={{ top: `${cornerOffset}px`, left: `${cornerOffset}px` }}
      />
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute border-r-2 border-t-2 opacity-0 transition-opacity group-hover:opacity-100',
          cornerTransitionClass,
          cornerSizeClass,
          cornerColorClass
        )}
        style={{ top: `${cornerOffset}px`, right: `${cornerOffset}px` }}
      />
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute border-b-2 border-l-2 opacity-0 transition-opacity group-hover:opacity-100',
          cornerTransitionClass,
          cornerSizeClass,
          cornerColorClass
        )}
        style={{ bottom: `${cornerOffset}px`, left: `${cornerOffset}px` }}
      />
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute border-b-2 border-r-2 opacity-0 transition-opacity group-hover:opacity-100',
          cornerTransitionClass,
          cornerSizeClass,
          cornerColorClass
        )}
        style={{ bottom: `${cornerOffset}px`, right: `${cornerOffset}px` }}
      />
      <span>{children}</span>
      {icon ? (
        <span className={cn('relative transition-transform duration-300', iconClassName)}>
          {icon}
        </span>
      ) : null}
    </Link>
  )
}
