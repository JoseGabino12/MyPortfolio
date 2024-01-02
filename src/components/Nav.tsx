import { sections } from '../data/Scholarship'

const Nav = () => {

  return (
    <section className='w-full flex justify-center'>
      <div className='flex-row flex bottom-0 gap-4 justify-around z-10 p-5 fixed rounded-t-lg backdrop-blur-md bg-white/30 sm:mb-10 sm:rounded-b-lg sm:bottom-auto text-black'>
        {
          sections.map((section, index) => (
            <a key={index} href={`#${section.name}`}>
              <h3 className='font-mono font-semibold italic capitalize hover:scale-110'>
                {section.name}
              </h3>
            </a>
          ))
        }
      </div>
    </section>
  )
}

export default Nav
