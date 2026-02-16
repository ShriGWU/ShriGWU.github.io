'use client'
import React, { useState } from 'react'

export default function Projects({ projects }: any) {
  const [filter, setFilter] = useState('All')
  const tags = Array.from(new Set(projects.flatMap((p: any) => p.tags)))
  const filtered = filter === 'All' ? projects : projects.filter((p: any) => p.tags.includes(filter))

  return (
    <section id="projects">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-3 flex gap-2 flex-wrap">
        <button onClick={() => setFilter('All')} className={`px-3 py-1 rounded ${filter==='All' ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800'}`}>All</button>
        {tags.map((t: string) => (
          <button key={t} onClick={() => setFilter(t)} className={`px-3 py-1 rounded ${filter===t ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800'}`}>{t}</button>
        ))}
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {filtered.map((p: any) => (
          <article key={p.name} className="p-4 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded">
            <div className="flex justify-between items-start">
              <h3 className="font-medium">{p.name}</h3>
              <a href={p.repo} className="text-sm text-emerald-300 underline" target="_blank" rel="noreferrer">GitHub →</a>
            </div>
            <p className="mt-2 text-slate-300 text-sm">{p.description}</p>
            <div className="mt-3 flex gap-2 flex-wrap">
              {p.tags.map((t: string) => (
                <span key={t} className="text-xs px-2 py-1 bg-slate-800 rounded">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
