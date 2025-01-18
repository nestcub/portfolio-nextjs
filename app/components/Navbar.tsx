'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'blogposts', 'learn']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const resumeUrl = '/neston-cabral-resume.pdf'
    window.open(resumeUrl, '_blank')
  }

  return (
    <nav className="sticky top-0 bg-black bg-opacity-90 backdrop-blur-sm z-10 border-b border-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <ul className="flex justify-center space-x-6 py-4">
          {['About', 'Skills', 'Projects', 'Blogposts', 'Learn'].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.toLowerCase() ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="#"
              onClick={handleResumeClick}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}