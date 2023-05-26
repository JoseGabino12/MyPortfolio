import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Nav = () => {
  return (
    <section className='w-full flex items-end justify-end z-10 content-end gap-5 p-5 fixed bg-gradient-to-r to-[#CC9EA2] from-[#110C3A] mb-10'>
      <a href='https://www.linkedin.com/in/gabinomorales/' target='_blank' rel='noreferrer'>
        <h3 className='font-mono font-light italic flex items-center'>
          <BsLinkedin className='mr-2 text-Linkedin' />
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

export default Nav
