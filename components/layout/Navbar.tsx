'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Phone, X } from 'lucide-react'
import CornerButton from '@/components/ui/CornerButton'
import { cn } from '@/lib/utils'
import {
  contactPhoneDisplay,
  contactPhoneHref,
  locationLabel,
  navLinks,
  serviceAreaLabel,
} from '@/lib/site'

const sectionIds = navLinks.map((link) => link.href.replace('#', ''))

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const navHeight = 96

    const check = () => {
      const header = headerRef.current
      if (!header) return

      const about = document.getElementById('about')
      if (about) {
        const progress = Math.max(0, Math.min(1, 1 - about.getBoundingClientRect().top / window.innerHeight))
        const offset = 16 * (1 - progress)
        const radius = 4 * (1 - progress)

        header.style.top = `${offset}px`
        header.style.left = `${offset}px`
        header.style.right = `${offset}px`
        header.style.borderRadius = `${radius}px`
      }

      let current = 'hero'
      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (!section) continue
        if (section.getBoundingClientRect().top <= navHeight + 10) current = id
      }
      setActiveSection(current)
    }

    check()
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [drawerOpen])

  return (
    <>
      <header
        ref={headerRef}
        className="fixed z-50 bg-white shadow-lg"
        style={{ top: '16px', left: '16px', right: '16px', borderRadius: '4px' }}
      >
        <nav className="h-24 flex items-center max-w-7xl mx-auto px-8 lg:px-12 gap-6">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/Logo-color.png"
              alt="IronPeak Construction Group"
              width={220}
              height={70}
              className="h-[88px] w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center flex-1 justify-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-5 pb-1 pt-2 text-base font-medium transition-colors whitespace-nowrap border-b-2',
                    isActive
                      ? 'text-zinc-900 border-brand-red'
                      : 'text-zinc-600 border-transparent hover:text-zinc-900 hover:border-brand-red'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <div className="flex items-center ml-auto gap-4">
            <CornerButton
              href="#contact"
              className="hidden md:inline-flex px-6 py-3 bg-brand-red text-sm text-white whitespace-nowrap hover:bg-red-900"
              cornerColorClass="border-zinc-900"
              cornerSizeClass="w-4 h-4"
              cornerTransitionClass="duration-0"
              icon={<ArrowRight size={15} />}
              iconClassName="group-hover:translate-x-1"
            >
              Get a Quote
            </CornerButton>
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
              className="group flex items-center justify-center p-2 rounded transition-colors hover:bg-black/5"
            >
              <div className="flex flex-col gap-1.5 group-hover:gap-2.5 transition-opacity duration-200">
                <span className="block w-6 h-px bg-zinc-800 transition-opacity duration-200" />
                <span className="block w-4 h-px bg-zinc-800 self-end transition-opacity duration-200 group-hover:w-6" />
              </div>
            </button>
          </div>
        </nav>
      </header>

      <div
        className={cn(
          'fixed inset-0 z-50 bg-black/20 backdrop-blur-sm transition-opacity duration-300',
          drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setDrawerOpen(false)}
      />

      <div
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-96 bg-white shadow-2xl transition-transform duration-300 ease-in-out overflow-y-auto',
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col min-h-full px-10 py-10">
          <div className="flex items-start justify-end mb-8">
            <button
              onClick={() => setDrawerOpen(false)}
              aria-label="Close menu"
              className="text-zinc-400 hover:text-zinc-900 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex flex-col items-center text-center mb-10">
            <Image
              src="/Logo-color.png"
              alt="IronPeak Construction Group"
              width={150}
              height={48}
              className="h-14 w-auto mb-4"
            />
            <p className="text-zinc-500 text-sm leading-relaxed">Serving {serviceAreaLabel}</p>
          </div>

          <div className="mb-10">
            <p className="text-zinc-900 font-bold text-sm mb-5">Links</p>
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setDrawerOpen(false)}
                  className="text-zinc-700 text-base py-3.5 border-b border-zinc-100 hover:text-brand-red hover:border-brand-red transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="mb-10">
            <p className="text-zinc-900 font-bold text-sm mb-5">Contact Us</p>
            <div className="flex flex-col gap-4">
              <a href={contactPhoneHref} className="flex items-center gap-3 text-zinc-600 hover:text-brand-red transition-colors text-sm">
                <Phone size={14} className="text-brand-red flex-shrink-0" />
                {contactPhoneDisplay}
              </a>
              <a
                href="https://maps.google.com/?q=San+Jose+CA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-zinc-600 hover:text-brand-red transition-colors text-sm"
              >
                <MapPin size={14} className="text-brand-red flex-shrink-0 mt-0.5" />
                {locationLabel}
              </a>
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-zinc-100">
            <p className="text-zinc-500 text-sm leading-relaxed mb-4">Serving {serviceAreaLabel}</p>
            <CornerButton
              href="#contact"
              className="px-6 py-3 bg-brand-red text-sm text-white hover:bg-red-900"
              cornerColorClass="border-zinc-900"
              cornerSizeClass="w-4 h-4"
              cornerTransitionClass="duration-0"
              icon={<ArrowRight size={15} />}
              iconClassName="group-hover:translate-x-1"
            >
              Get a Quote
            </CornerButton>
          </div>
        </div>
      </div>
    </>
  )
}
