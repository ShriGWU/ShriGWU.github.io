'use client'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-mono text-sm text-emerald-600">AI × Finance Lab</button>
        <nav className="hidden md:flex gap-4 items-center">
          <button onClick={() => scrollTo('projects')} className="text-sm text-slate-700">Projects</button>
          <button onClick={() => scrollTo('experience')} className="text-sm text-slate-700">Experience</button>
          <button onClick={() => scrollTo('contact')} className="text-sm text-slate-700">Contact</button>
          <button onClick={() => window.open('/Shrishail_Terni_Updated_CV.pdf', '_blank')} className="ml-3 px-3 py-1 rounded bg-emerald-600 text-white text-sm">Resume</button>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4">
          <button onClick={() => { setOpen(false); scrollTo('projects') }} className="block w-full text-left py-2">Projects</button>
          <button onClick={() => { setOpen(false); scrollTo('experience') }} className="block w-full text-left py-2">Experience</button>
          <button onClick={() => { setOpen(false); scrollTo('contact') }} className="block w-full text-left py-2">Contact</button>
          <button onClick={() => { setOpen(false); window.open('/Shrishail_Terni_Updated_CV.pdf', '_blank') }} className="block w-full text-left py-2">Resume</button>
        </div>
      )}
    </header>
  )
}
