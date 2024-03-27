import Card from "./Card"
import { projectsData } from "../data/Scholarship"

const Project = () => {
  return (
    <section id='projects' className='p-5 sm:p-20 gap-5 flex flex-col items-center section-title snap-center snap-always'>
      <h1 className='font-bold text-center text-4xl sm:text-5xl drop-shadow-md'>Projects</h1>
      <ol className='relative border-s border-gray-200 ml-3'>
        {
          projectsData.map((project, index) => (
            <li
              key={ index }
              className='animate-fade-in-left [animation-fill-mode:both] card-animation'
            >
              <Card
                img={ project.img }
                description={ project.description }
                title={ project.title }
                campus={ project.campus }
                date={ project.date }
                technologies={ project.technologies }
                root={ `projects/${project.id}` }
              />
            </li>
          ))
        }
      </ol>
    </section>
  )
}

export default Project