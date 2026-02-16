'use client'
import React from 'react'

export default function Hero({ profile }: any) {
  return (
    <section className="grid md:grid-cols-3 gap-6 items-start">
      <div className="md:col-span-2">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">{profile.name}</h1>
        <p className="mt-2 text-emerald-300">{profile.headline}</p>
        <p className="mt-4 text-slate-300 max-w-prose">{profile.shortBio}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded text-sm">AI</span>
          <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded text-sm">Coding</span>
          <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded text-sm">Finance</span>
        </div>

        <div className="mt-6 flex gap-3">
          <a href="#projects" className="px-4 py-2 bg-emerald-500 text-slate-900 rounded">View Projects</a>
          <a href="#contact" className="px-4 py-2 border border-slate-700 rounded">Contact</a>
        </div>
      </div>

      <aside className="sticky top-24 p-4 bg-slate-800/60 border border-slate-700 rounded h-fit">
        <div className="text-sm text-slate-300">Currently exploring</div>
        <div className="mt-2 text-sm text-emerald-200">{profile.currentlyExploring.join(' • ')}</div>
      </aside>
    </section>
  )
}
