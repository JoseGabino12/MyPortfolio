import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

import perfil from '../assets/img/perfil.jpg'

const Presentation = () => {

  useEffect(() => {
    AOS.init({
      once: false
    })
  }, [])

  return (
    <section
      id='home'
      className='text-center sm:text-start gap-10 items-center p-5 flex-col sm:flex-row justify-center flex min-h-screen'
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-once="false"
    >
      <div>
        <img className='rounded-full w-60 h-60' src={ perfil.src } alt='José Gabino Morales González' />
      </div>

      <div className='gap-2 font-serif flex flex-col sm:w-1/3'>
        <h3 className='font-mono font-light italic'>Software Engineer</h3>
        <h1 className='text-4xl sm:text-5xl drop-shadow-md'>José Gabino</h1>
        <h1 className='text-4xl sm:text-5xl drop-shadow-md'>Morales González</h1>
        <p className='mt-5 font-sans tracking-wide'>
          +1 year of experience in creating innovative and user-centric web applications. Specialized in frontend development with a strong focus on performance, scalability, and responsive design.
        </p>
      </div>
    </section>
  )
}

export default Presentation
