import { experienceData } from '../data/Scholarship'
import Card from './Card'
import Carousel from './Carousel'

const Experience = () => {
  return (
    <section id='experience' className='p-5 sm:p-20 gap-5 flex flex-col items-center rounded-b-[80px] sm:rounded-b-[150px] bg-[#F1F0EF] dark:bg-[#2B2B2B]'>
      <h1 className='font-bold text-center text-4xl sm:text-5xl drop-shadow-md mt-5 sm:mt-0'>Experience</h1>
      <ol className='relative border-s border-gray-600 dark:border-gray-50 ml-3'>
        {
          experienceData.map((experience, index) => (
            <Card
              key={ index }
              img={ experience.img }
              description={ experience.description }
              title={ experience.title }
              campus={ experience.campus }
              date={ experience.date }
              technologies={ experience.technologies }
              root={ `experience/${experience.id}` }
            />
          ))
        }
      </ol>
    </section>
  )
}

export default Experience
