'use client'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-b from-slate-900/80 to-transparent backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="font-mono text-sm text-emerald-300">AI × Finance Lab</a>
        <nav className="hidden md:flex gap-4 items-center">
          <a href="#projects" className="text-sm hover:underline">Projects</a>
          <a href="#experience" className="text-sm hover:underline">Experience</a>
          <a href="#contact" className="text-sm hover:underline">Contact</a>
          <a href="/resume.pdf" className="ml-3 px-3 py-1 rounded bg-emerald-500 text-slate-900 text-sm">Resume</a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4">
          <a href="#projects" className="block py-2">Projects</a>
          <a href="#experience" className="block py-2">Experience</a>
          <a href="#contact" className="block py-2">Contact</a>
        </div>
      )}
    </header>
  )
}
