import { technologiesInfo } from '../data/Scholarship'

const Card = ({ title, campus, date, technologies }) => {
  const technologiesIcons = technologiesInfo.filter(tech => technologies.includes(tech.id))

  return (
    <div className=' bg-white text-black p-5'>
      <h1>{title}</h1>
      <h2>{campus}</h2>
      <h2>{date}</h2>

      <h1>Applied Technologies</h1>

      <div className='flex flex-row gap-2 text-2xl'>
        {
          technologiesIcons.map((tec, index) => (
            <tec.icon key={index} className={tec.color} />
          ))
        }
      </div>
    </div>
  )
}

export default Card
