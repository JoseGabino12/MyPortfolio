import { useState, useEffect } from 'react'
import { sections } from '../data/Scholarship'

export const useCurrentSection = () => {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = sections.find((sectionId) => {
        const section = document.getElementById(sectionId.name)
        if (section) {
          const rect = section.getBoundingClientRect()
          return rect.top <= 80 && rect.bottom >= 80 // 80 es un valor de desplazamiento para ajustar la activación del enlace
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      } else {
        setActiveSection('')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return activeSection
}
