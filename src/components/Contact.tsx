import { infoContactData } from '../data/Scholarship'

const Contact = () => {
  return (
    <section id='contact' className='text-center p-5 pb-40 h-screen gap-5 flex flex-col items-center justify-center snap-center'>
      <h1 className='font-bold text-4xl sm:text-5xl'>Contact me</h1>
      <h2>Do you want to contact me? Here are my contact details.</h2>

      <div className='flex flex-col sm:flex-row gap-10'>
        {
          infoContactData.map((contact, index) => (

            <a href={contact.link} target='_blank' key={index} className='backdrop-blur-md bg-white/30 p-3 flex items-center gap-2 rounded-md hover:cursor-pointer hover:scale-110' rel='noreferrer'>
              <h2>{contact.data}</h2>
            </a>
          ))
        }

      </div>
    </section>
  )
}

export default Contact
