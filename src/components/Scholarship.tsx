import { ScholarshipInfo } from '../data/Scholarship'
import Card from './Card'

const Scholarship = () => {
  return (
    <section id='education' className='p-20 gap-5 flex flex-col items-center'>
      <h1 className='font-bold text-4xl sm:text-5xl'>Education</h1>
      <ol className='relative border-s border-gray-200 ml-3'>
        {
          ScholarshipInfo.map((scholarship, index) => (
            <Card
              key={index}
              img={scholarship.img}
              title={scholarship.title}
              campus={scholarship.campus}
              date={scholarship.date}
              technologies={scholarship.technologies}
              learned={scholarship.do}
            />
          ))
        }
      </ol>
    </section>
  )
}

export default Scholarship
