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
    <section className='m-5 opacity-0 duration-1000 blur-sm translate-x-full' ref={scolar}>
      <h1>Scholarship</h1>
      <div className='flex flex-row gap-10'>
        {
          ScholarshipInfo.map((scholarship, index) => (
            <Card key={index} title={scholarship.title} campus={scholarship.campus} date={scholarship.date} technologies={scholarship.technologies} />
          ))
        }
      </div>

    </section>
  )
}

export default Scholarship
