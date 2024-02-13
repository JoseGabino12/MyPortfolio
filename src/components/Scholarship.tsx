import { ScholarshipInfo } from '../data/Scholarship'
import Card from './Card'

const Scholarship = () => {
  return (
    <section id='education' className='p-5 sm:p-20 gap-5 flex flex-col items-center section-title snap-start'>
      <h1 className='font-bold text-4xl sm:text-5xl drop-shadow-md'>Education</h1>

      <ol className='relative border-s border-gray-200 ml-3'>
        {
          ScholarshipInfo.map((scholarship, index) => (
            <li
              key={ index }
              className='animate-fade-in-left [animation-fill-mode:both] test-cards'
            >
              <Card
                img={ scholarship.img }
                description={ scholarship.description }
                title={ scholarship.title }
                campus={ scholarship.campus }
                date={ scholarship.date }
                technologies={ scholarship.technologies }
                root={ `scholarship/${scholarship.id}` }
              />
            </li>
          ))
        }
      </ol>
    </section>
  )
}

export default Scholarship
