'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 20) }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => { setTheme(theme === 'dark' ? 'light' : 'dark') }

  let navbarClass = 'bg-transparent'
  if (scrolled) {
    navbarClass = 'bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-gray-800'
  }

  return (
    <header className={'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ' + navbarClass}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-bold tracking-tight text-gray-900 dark:text-white hover:opacity-80 transition-opacity">
          Sankalpa<span className="text-cyan-500">.</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          {mounted && (
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full w-9 h-9 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Toggle theme">
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          )}
          <Button variant="ghost" size="icon" className="md:hidden rounded-full w-9 h-9" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-gray-800 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setMenuOpen(false)} className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
