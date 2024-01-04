import { experienceData } from '../data/Scholarship'
import Card from './Card'

const Experience = () => {
  return (
    <section id='experience' className='p-20 gap-5 flex flex-col items-center'>
      <h1 className='font-bold text-center text-4xl sm:text-5xl'>Experience</h1>
      <div className='grid sm:grid-cols-1 gap-5'>
        {
          experienceData.map((experience, index) => (
            <Card
              key={index}
              title={experience.title}
              campus={experience.campus}
              date={experience.date}
              technologies={experience.technologies}
              learned={experience.do}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Experience
