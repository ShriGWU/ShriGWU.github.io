'use client'
import React, { useState } from 'react'

type Project = {
  name: string
  description: string
  tags: string[]
  repo?: string
  demo?: string
  highlights?: string[]
}

export default function Projects({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState('All')
  const tags = Array.from(new Set(projects.flatMap((p) => p.tags))) as string[]
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter))

  return (
    <section id="projects">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="mt-3 flex gap-2 flex-wrap">
        <button onClick={() => setFilter('All')} className={`px-3 py-1 rounded ${filter==='All' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-slate-700'}`}>All</button>
        {tags.map((t) => (
          <button key={t} onClick={() => setFilter(t)} className={`px-3 py-1 rounded ${filter===t ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-slate-700'}`}>{t}</button>
        ))}
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {filtered.map((p) => (
          <article key={p.name} className="p-4 bg-white border border-gray-200 rounded shadow-sm">
            <div className="flex items-start">
              <h3 className="font-medium text-slate-800">{p.name}</h3>
            </div>
            <p className="mt-2 text-slate-700 text-sm">{p.description}</p>
            <div className="mt-3 flex gap-2 flex-wrap">
              {(p.tags as string[]).map((t) => (
                <span key={t} className="text-xs px-2 py-1 bg-gray-100 text-slate-700 rounded">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
