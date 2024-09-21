import { ScholarshipInfo } from '../data/Scholarship'
import CardExperience from './CardExperience'

const Scholarship = () => {
  return (
    <section id='education' className='gap-5 flex flex-col'>
      <h1 className='font-bold text-4xl sm:text-5xl drop-shadow-md'>Education</h1>
      <p>This is what I have studied.</p>
      <div className="grid w-auto gap-2">
        {
          ScholarshipInfo.map((scholarship, index) => (
            <CardExperience
              key={index}
              img={scholarship.img}
              campus={scholarship.campus}
              description={scholarship.description}
              title={scholarship.title}
              date={scholarship.date}
              root={`scholarship/${scholarship.id}`}
              icon={scholarship.icon}
              className='w-80 h-40 sm:w-96 sm:h-72'
            />
          ))
        }
      </div>
    </section>
  )
}

export default Scholarship
