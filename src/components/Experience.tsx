import { experienceData } from '../data/Scholarship'
import Card from './Card'

const Experience = () => {
  return (
    <section id='experience' className='p-5 sm:p-20 gap-5 flex flex-col items-center section-title snap-start'>
      <h1 className='font-bold text-center text-4xl sm:text-5xl drop-shadow-md'>Experience</h1>
      <ol className='relative border-s border-gray-200 ml-3'>
        {
          experienceData.map((experience, index) => (
            <Card
              key={index}
              img={experience.img}
              description={experience.description}
              title={experience.title}
              campus={experience.campus}
              date={experience.date}
              technologies={experience.technologies}
              root={`experience/${experience.id}`}
            />
          ))
        }
      </ol>
    </section>
  )
}

export default Experience
