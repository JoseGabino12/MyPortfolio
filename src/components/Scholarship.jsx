import { useEffect, useRef } from 'react'
import { ScholarshipInfo } from '../data/Scholarship'
import useAnimation from '../hooks/useAnimation'
import Card from './Card'

const Scholarship = () => {
  const scolar = useRef()
  const scholarship = useAnimation()

  useEffect(() => {
    scholarship.observe(scolar.current)
  }, [scholarship])

  return (
    <section className='flex flex-col justify-center gap-6 m-5 items-center opacity-0 duration-1000 blur-sm translate-x-full' ref={scolar}>
      <h1 className='font-bold text-5xl'>Education</h1>
      <div className='flex flex-col md:flex-row gap-10'>
        {
          ScholarshipInfo.map((scholarship, index) => (
            <Card key={index} title={scholarship.title} campus={scholarship.campus} date={scholarship.date} technologies={scholarship.technologies} learned={scholarship.do} />
          ))
        }
      </div>

    </section>
  )
}

export default Scholarship
