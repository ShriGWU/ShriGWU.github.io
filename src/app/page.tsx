import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import { profile } from '../data/profile'

export default function Home() {
  return (
    <div className="space-y-16">
      <Hero profile={profile} />
      <Projects projects={profile.projects} />
      <Experience experiences={profile.experiences} />
      <Contact social={profile.social} />
    </div>
  )
}
