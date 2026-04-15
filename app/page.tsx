import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Team from '@/components/Team'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Team />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}