import useAnimation from '../hooks/useAnimation'
import Perfil from '../assets/img/perfil.jpg'
import { useEffect, useRef } from 'react'

const Presentation = () => {
  const pres = useRef()
  const observer = useAnimation()

  useEffect(() => {
    observer.observe(pres.current)
  }, [observer])

  return (
    <section className='gap-10 items-center p-5 flex flex-col sm:flex-row justify-center h-screen opacity-0 duration-1000' ref={pres}>
      <div>
        <img className='rounded-full w-60 h-60' src={Perfil} alt='José Gabino Morales González' />
      </div>

      <div className='gap-2 font-serif flex flex-col w-1/3'>
        <h3 className='font-mono font-light italic'>Software Engineer</h3>
        <h1 className='text-5xl'>José Gabino</h1>
        <h1 className='text-5xl'>Morales González</h1>
        <p className='text-justify mt-5 tracking-wide'>
          I am a Software Engineering student, with a focus on Front-end technologies. I am enthusiastic about self-directed learning and have the ability to work effectively in a team.
        </p>
      </div>

    </section>
  )
}

export default Presentation
