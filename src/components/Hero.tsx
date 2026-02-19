'use client'
import React from 'react'

export default function Hero({ profile }: any) {
  return (
    <section className="grid md:grid-cols-3 gap-6 items-start">
      <div className="md:col-span-2">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">{profile.name}</h1>
        <p className="mt-2 text-emerald-600">{profile.headline}</p>
        <p className="mt-4 text-slate-700 max-w-prose">{profile.shortBio}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-gray-100 border border-gray-200 rounded text-sm text-slate-700">AI</span>
          <span className="px-3 py-1 bg-gray-100 border border-gray-200 rounded text-sm text-slate-700">Coding</span>
          <span className="px-3 py-1 bg-gray-100 border border-gray-200 rounded text-sm text-slate-700">Finance</span>
        </div>

        
      </div>

      <aside className="sticky top-24 p-4 bg-white border border-gray-200 rounded h-fit flex flex-col items-center gap-4">
        <img src={profile.photo} alt="Profile" className="w-36 h-36 rounded-full object-cover shadow-md" />
      </aside>
    </section>
  )
}
