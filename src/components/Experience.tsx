'use client'
import React, { useState } from 'react'
import { profile } from '../data/profile'

export default function Experience({ experiences: propExperiences }: any) {
  const experiences = propExperiences ?? profile.experiences ?? []
  const [active, setActive] = useState(0)

  const extractYear = (date?: string) => {
    if (!date) return '—'
    if (/present|now|ongoing/i.test(date)) return 'Present'
    const m = date.match(/\b(19|20)\d{2}\b/g)
    return m && m.length ? m[m.length - 1] : date
  }

  const summaryOf = (exp: any) => {
    if (exp.summary) return exp.summary
    if (Array.isArray(exp.highlights) && exp.highlights.length) return exp.highlights[0]
    if (exp.description) return exp.description
    if (Array.isArray(exp.bullets) && exp.bullets.length) return exp.bullets[0]
    return ''
  }

  return (
    <section id="experience" className="py-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900">Experience</h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="col-span-1 flex flex-col items-center md:items-start">
            <ul className="space-y-3">
              {experiences.map((exp: any, idx: number) => {
                const year = extractYear(exp.date)
                const isActive = idx === active
                return (
                  <li key={idx}>
                    <button
                      onMouseEnter={() => setActive(idx)}
                      onFocus={() => setActive(idx)}
                      className={`w-20 text-sm py-2 rounded-full transition-shadow duration-150 focus:outline-none ${
                        isActive
                          ? 'bg-emerald-600 text-white shadow-lg'
                          : 'bg-white border text-slate-700 hover:shadow-sm'
                      }`}
                      aria-pressed={isActive}
                    >
                      {year}
                    </button>
                  </li>
                )
              })}
            </ul>

            <p className="mt-4 text-xs text-slate-500 hidden md:block">Hover or focus a year to preview the experience.</p>
          </div>

          <div className="col-span-2">
            <div className="relative min-h-[140px]">
              {experiences.map((exp: any, idx: number) => {
                const show = idx === active
                return (
                  <article
                    key={idx}
                    className={`absolute inset-0 transition-all duration-300 ${
                      show ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 -translate-x-6 pointer-events-none'
                    }`}
                    aria-hidden={!show}
                  >
                    <div className="rounded-xl bg-white border p-6 shadow-md">
                      <h3 className="text-lg font-semibold text-slate-900">{exp.title ?? exp.name ?? ''}</h3>
                      <div className="text-sm text-slate-500 mt-1">{exp.org ?? exp.company ?? exp.organization ?? ''} • {exp.date ?? ''}</div>
                      <p className="mt-4 text-slate-700">{summaryOf(exp)}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
