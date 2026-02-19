'use client'
import React from 'react'

export default function Contact({ social }: any) {
  return (
    <section id="contact">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <div className="mt-4 flex flex-col md:flex-row gap-4 items-start">
        <div className="flex-1">
          <p className="text-slate-700">Reach out via email or LinkedIn. The lightweight contact form opens your email client.</p>
          <div className="mt-4 flex gap-3">
            <a href={social.email} className="px-4 py-2 bg-emerald-600 text-white rounded">Email</a>
            <a href={social.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 border border-gray-200 rounded text-slate-700">LinkedIn</a>
            <a href={social.github} target="_blank" rel="noreferrer" className="px-4 py-2 border border-gray-200 rounded text-slate-700">GitHub</a>
          </div>
        </div>
        <form className="w-full md:w-96 bg-white p-4 rounded border border-gray-200 shadow-sm" onSubmit={(e) => e.preventDefault()}>
          <label className="block text-sm text-slate-700">Subject</label>
          <input className="w-full mt-1 p-2 rounded bg-gray-50 border border-gray-200 text-slate-900 text-sm" placeholder="Hello —" />
          <label className="block text-sm text-slate-700 mt-3">Message</label>
          <textarea className="w-full mt-1 p-2 rounded bg-gray-50 border border-gray-200 text-slate-900 text-sm" rows={4} placeholder="I saw your portfolio..." />
          <div className="mt-3">
            <button
              type="button"
              onClick={() => {
                const subject = encodeURIComponent('Inquiry from portfolio')
                const body = encodeURIComponent('Hi, I would like to connect...')
                window.location.href = `${social.email.replace('mailto:', 'mailto:')}?subject=${subject}&body=${body}`
              }}
              className="px-4 py-2 bg-emerald-600 text-white rounded"
            >
              Send Email
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
