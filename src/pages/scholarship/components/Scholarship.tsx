import type { scholarshipPage } from "../../../interfaces/interfaces"
import { technologiesInfo } from "../../../data/Scholarship";

import Badge from "../../../components/Badge";

import { IoArrowBackSharp } from "react-icons/io5";

const Scholarship = ({ scholarship } : scholarshipPage) => {
  const technologiesIcons = technologiesInfo.filter(tech => scholarship?.technologies.includes(tech.id))

  return (
    <section className="flex flex-col p-10 gap-10 section-view">

      <a href="/" className="flex gap-5 items-center">
        <IoArrowBackSharp className="text-4xl cursor-pointer" />
        <h1 className="font-bold text-lg sm:text-xl">{scholarship?.title}</h1>
      </a>

      <div className="flex flex-col sm:flex-row gap-10">
        <div className="flex flex-col gap-5">
          <img src={scholarship?.img} alt={scholarship?.title} className="w-96 rounded-2xl self-center"/>
          <h2 className="font-bold text-xl">Description</h2>
          <p>{scholarship?.description}</p>

          <h2 className="font-bold text-xl">Technologies I learned</h2>
          <ul className="flex flex-wrap gap-3">
            {
              technologiesIcons.map((tech, index) => (
                <Badge key={index} text={tech.name} className={tech.color} icon={tech.icon} />
              ))
            }
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl">What I did and learned</h2>
          <ul className="font-sans font-normal text-base rounded-t-md backdrop-blur-md bg-white/30">
            {
              scholarship?.do.map((thing, index) => (
                <li className="p-8 border-b border-gray-300 transition duration-300 ease-in-out hover:bg-white/30" key={index}>
                  <h4 className="font-bold italic mb-2">{thing.subtitle}</h4>
                  {thing.description}
                </li>
              ))
            }
          </ul>
        </div>



      </div>

    </section>
  )
}

export default Scholarship