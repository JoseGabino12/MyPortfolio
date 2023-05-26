// import NextU from '../assets/img/nextu-logo.webp'
import { experienceData } from '../data/Scholarship'
import Card from './Card'

const Experience = () => {
  return (
    <section className='p-5 gap-5 m-52 flex flex-col items-center'>
      <h1 className='font-bold text-5xl'>Experience</h1>
      <div className='h-full flex flex-col gap-5'>
        {
          experienceData.map((experience, index) => (
            <Card key={index} title={experience.title} campus={experience.campus} date={experience.date} technologies={experience.technologies} learned={experience.do} />
          ))
        }
      </div>
    </section>
  )
}

export default Experience
