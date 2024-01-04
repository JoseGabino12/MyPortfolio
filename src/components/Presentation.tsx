import perfil from '../assets/img/perfil.jpg'

const Presentation = () => {
  return (
    <section id='home' className='text-center sm:text-start gap-10 items-center p-5 flex-col sm:flex-row justify-center sm:h-screen flex'>
      <div>
        <img className='rounded-full w-60 h-60' src={perfil.src} alt='José Gabino Morales González' />
      </div>

      <div className='gap-2 font-serif flex flex-col sm:w-1/3'>
        <h3 className='font-mono font-light italic'>Software Engineer</h3>
        <h1 className='text-4xl sm:text-5xl'>José Gabino</h1>
        <h1 className='text-4xl sm:text-5xl'>Morales González</h1>
        <p className='text-center sm:text-justify mt-5 tracking-wide'>
          I am a Software Engineering student, with a focus on Front-end technologies. I am enthusiastic about self-directed learning and have the ability to work effectively in a team.
        </p>
      </div>
      
    </section>
  )
}

export default Presentation
