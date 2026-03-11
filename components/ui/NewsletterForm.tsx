'use client'

import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-auto rounded-2xl border border-zinc-800 bg-zinc-900 p-3"
    >
      {submitted ? (
        <p className="text-white text-sm px-4 py-3">Thanks, you&apos;re subscribed.</p>
      ) : (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your email address"
            aria-label="Email address for newsletter"
            required
            className="min-w-0 flex-1 rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:border-brand-red transition-colors md:w-80"
          />
          <button
            type="submit"
            className="group relative rounded-xl bg-brand-red px-6 py-3 text-white text-sm font-semibold transition-colors hover:bg-red-900 whitespace-nowrap"
          >
            <span className="pointer-events-none absolute -top-[3px] -left-[3px] w-4 h-4 border-t-2 border-l-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <span className="pointer-events-none absolute -top-[3px] -right-[3px] w-4 h-4 border-t-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <span className="pointer-events-none absolute -bottom-[3px] -left-[3px] w-4 h-4 border-b-2 border-l-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            <span className="pointer-events-none absolute -bottom-[3px] -right-[3px] w-4 h-4 border-b-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            Subscribe
          </button>
        </div>
      )}
    </form>
  )
}
