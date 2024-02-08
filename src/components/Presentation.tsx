import perfil from '../assets/img/perfil.jpg'

const Presentation = () => {
  return (
    <section id='home' className='text-center sm:text-start gap-10 items-center p-5 flex-col sm:flex-row justify-center flex section-title snap-start'>
      <div>
        <img className='rounded-full w-60 h-60 [animation-fill-mode:both] [animation-delay:200ms] animate-fade-in-up' src={perfil.src} alt='José Gabino Morales González' />
      </div>

      <div className='gap-2 font-serif flex flex-col sm:w-1/3 [animation-fill-mode:both] [animation-delay:200ms] animate-fade-in-up'>
        <h3 className='font-mono font-light italic'>Software Engineer</h3>
        <h1 className='text-4xl sm:text-5xl drop-shadow-md'>José Gabino</h1>
        <h1 className='text-4xl sm:text-5xl drop-shadow-md'>Morales González</h1>
        <p className='mt-5 tracking-wide'>
          Passionate software engineer with a focus on development, specializing in frontend engineering. 
        </p>
        <p>
          Recently graduated, I have one year of experience as a frontend developer, during which I played a crucial role in designing and implementing innovative technological solutions, demonstrating a strong interest in all aspects of software development. 
        </p>
      </div>
      
    </section>
  )
}

export default Presentation
