import { ScholarshipInfo } from '../data/Scholarship'
import Card from './Card'

const Scholarship = () => {
  return (
    <section id='education' className='p-5 sm:p-20 gap-5 flex flex-col items-center'>
      <h1 className='font-bold text-4xl sm:text-5xl drop-shadow-md mt-5 sm:mt-0'>Education</h1>

      <ol className='relative border-s border-gray-600 dark:border-gray-50 ml-3'>
        {
          ScholarshipInfo.map((scholarship, index) => (
            <Card
              key={ index }
              img={ scholarship.img }
              description={ scholarship.description }
              title={ scholarship.title }
              campus={ scholarship.campus }
              date={ scholarship.date }
              technologies={ scholarship.technologies }
              root={ `scholarship/${scholarship.id}` }
            />
          ))
        }
      </ol>
    </section>
  )
}

export default Scholarship
