import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Contact from './components/Contact'
import './App.scss'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ['home', 'about', 'skills', 'portfolio', 'experience', 'contact']
      const offsets = sections.map(id => {
        const el = document.getElementById(id)
        return el ? { id, top: el.getBoundingClientRect().top } : null
      }).filter(Boolean)

      const active = offsets.reverse().find(s => s.top <= 120)
      if (active) setActiveSection(active.id)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar activeSection={activeSection} scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>Crafted with ❤️ by Jasmeen Jawa &nbsp;·&nbsp; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  )
}
