import { sections } from '../data/Scholarship'
import { useCurrentSection } from '../hooks/useCurrentSection'

const Nav = () => {
  const activeSection = useCurrentSection()

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className='w-full flex justify-center'>
      <div className='flex-row flex bottom-0 gap-4 justify-around z-10 p-5 fixed rounded-t-lg backdrop-blur-md bg-white/30 sm:mb-10 sm:rounded-b-lg sm:bottom-auto text-black'>
        {
          sections.map((section, index) => (
            <a key={index} href={`#${section.name}`} onClick={() => scrollToSection(section)} className={activeSection === section && 'text-white'}>
              <h3 className='font-mono font-semibold italic capitalize hover:scale-110'>
                <section.icon className='text-2xl' />
              </h3>
            </a>
          ))
        }
      </div>
    </section>
  )
}

export default Nav
