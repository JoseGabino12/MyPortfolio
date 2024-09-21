import Card from "./Card"
import { projectsData } from "../data/Scholarship"

const Project = () => {
  return (
    <section id='projects' className='p-5 sm:p-20 gap-5 flex flex-col items-center'>
      <h1 className='font-bold text-center text-4xl sm:text-5xl drop-shadow-md'>Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {
          projectsData.map((project, index) => (
            <Card
              key={ index }
              img={ project.img }
              description={ project.description }
              title={ project.title }
              campus={ project.campus }
              date={ project.date }
              root={ `projects/${project.id}` }
              icon={ project.icon }
            />
          ))
        }
      </div>
    </section>
  )
}

export default Project