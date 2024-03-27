import { IoArrowBackSharp } from "react-icons/io5"
import { technologiesInfo } from "../data/Scholarship"
import type { singlePage } from "../interfaces/interfaces"
import { LearnedComponent } from "./LearnedComponent"
import Badge from "./Badge"



export const SectionPageComponent = ({ info }: singlePage) => {
  const technologiesIcons = technologiesInfo.filter(tech => info?.technologies.includes(tech.id))

  return (
    <>
      <a href="/" className="p-5 flex gap-5 items-center">
        <IoArrowBackSharp className="text-4xl cursor-pointer" />
        <h1 className="font-bold text-lg sm:text-xl">{ info?.title }</h1>
      </a>

      <section className="flex flex-col p-10 gap-10 section-view justify-center">
        <div className="flex flex-col sm:flex-row gap-10 ">
          <div className="flex flex-col gap-5">
            <img src={ info?.img } alt={ info?.title } className="w-96 rounded-2xl self-center" />
            <h2 className="font-bold text-xl">Description</h2>
            <p>{ info?.description }</p>

            <h2 className="font-bold text-xl">Technologies I learned</h2>
            <ul className="flex flex-wrap gap-3">
              {
                technologiesIcons.map((tech, index) => (
                  <Badge key={ index } text={ tech.name } className={ tech.color } icon={ tech.icon } />
                ))
              }
            </ul>
          </div>

          <LearnedComponent info={ info } />

        </div>

      </section>
    </>
  )
}