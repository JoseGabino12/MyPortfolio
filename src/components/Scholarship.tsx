import { ScholarshipInfo } from '../data/Scholarship'
import Card from './Card'

const Scholarship = () => {
  return (
    <section id='education' className='flex flex-col sm:h-screen justify-center gap-6 m-5 p-5 items-center'>
      <h1 className='font-bold text-4xl sm:text-5xl'>Education</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
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
