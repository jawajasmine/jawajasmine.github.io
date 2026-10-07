import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Impact from './components/Impact'
import Contact from './components/Contact'
import './App.scss'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ['home', 'portfolio', 'impact', 'experience', 'about', 'contact']
      const active = [...sections].reverse().find(id => {
        const el = document.getElementById(id)
        return el && el.getBoundingClientRect().top <= 120
      })
      if (active) setActiveSection(active)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar activeSection={activeSection} scrolled={scrolled} />
      <main>
        <Hero />
        <Portfolio />
        <Impact />
        <Experience />
        <About />
        <Contact />
      </main>
      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Jasmeen Jawa · Bengaluru, India</p>
        </div>
      </footer>
    </>
  )
}
