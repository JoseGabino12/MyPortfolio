import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Contact = () => {
  return (
    <section className='w-full flex items-end justify-start content-end gap-5 p-5'>
      <a href='https://www.linkedin.com/in/gabinomorales/' target='_blank' rel='noreferrer'>
        <h3 className='font-mono font-light italic flex items-center'>
          <BsLinkedin className='mr-2 text-Linkedin bg-white rounded-sm' />
          José Gabino Morales González
        </h3>
      </a>

      <a href='https://github.com/JoseGabino12' target='_blank' rel='noreferrer'>
        <h3 className='font-mono font-light italic flex items-center'>
          <BsGithub className='mr-2 ' />
          JoseGabino12
        </h3>
      </a>
    </section>
  )
}

export default Contact
