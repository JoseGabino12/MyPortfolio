import { experienceData } from '../data/Scholarship'
import CardExperience from './CardExperience'

const Experience = () => {
  return (
    <section id="experience" className="gap-5 flex flex-col items-center">
      <h1 className="font-bold text-center text-4xl sm:text-5xl drop-shadow-md">Experience</h1>
      <p>I have worked at these companies.</p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3 justify-center">
        {experienceData.map((experience, index) => (
          <CardExperience
            key={index}
            img={experience.img}
            campus={experience.campus}
            description={experience.description}
            title={experience.title}
            date={experience.date}
            root={`experience/${experience.id}`}
            icon={experience.icon}
            className='w-80 h-40 sm:w-64 sm:h-[581px]'
          />
        ))}
      </div>
    </section>
  )
}

export default Experience