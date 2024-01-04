import { experienceData } from '../data/Scholarship'
import Card from './Card'

const Experience = () => {
  return (
    <section id='experience' className='p-20 gap-5 flex flex-col items-center'>
      <h1 className='font-bold text-center text-4xl sm:text-5xl'>Experience</h1>
      <ol className='relative border-s border-gray-200 ml-3'>
        {
          experienceData.map((experience, index) => (
            <Card
              key={index}
              img={experience.img}
              title={experience.title}
              campus={experience.campus}
              date={experience.date}
              technologies={experience.technologies}
              learned={experience.do}
            />
          ))
        }
      </ol>
    </section>
  )
}

export default Experience
