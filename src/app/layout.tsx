import './globals.css'
import type { ReactNode } from 'react'
import Navbar from '../components/Navbar'

export const metadata = {
  title: 'Shrishail Ravi Terni — AI x Finance Lab Notebook',
  description: 'AI enthusiast, builder, and researcher focused on finance and software.',
  openGraph: {
    title: 'Shrishail Ravi Terni',
    description: 'AI × Finance Lab Notebook — portfolio'
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-100 antialiased">
        <Navbar />
        <main className="min-h-screen px-4 py-8 md:py-12 max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  )
}
