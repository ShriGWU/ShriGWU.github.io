'use client'
import React from 'react'

export default function Experience({ experiences }: any) {
  return (
    <section id="experience">
      <h2 className="text-2xl font-semibold">Experience</h2>
      <div className="mt-6 space-y-4">
        {experiences.map((e: any, i: number) => (
          <div key={i} className="flex gap-4">
            <div className="w-28 text-sm text-slate-400">{e.date}</div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{e.title}</div>
                  <div className="text-sm text-slate-400">{e.org}</div>
                </div>
              </div>
              <ul className="mt-2 list-disc list-inside text-slate-300 text-sm">
                {e.bullets.map((b: string, j: number) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
