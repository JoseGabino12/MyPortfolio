import { technologiesInfo } from '../data/Scholarship'
import type { CardProps } from '../types/types'

const Card = ({ title, campus, date, technologies, learned } : CardProps) => {  
  // const technologiesIcons = technologiesInfo.filter(tech => technologies.includes(tech.id))

  return (
    <div className='flex flex-col gap-4 backdrop-blur-md bg-white/30 drop-shadow-xl p-5 rounded-md font-serif'>
      <div>
        <h1 className='font-bold text-xl'>{title}</h1>
        <h2 className='italic'>{campus}</h2>
        <h2 className='italic'>{date}</h2>
      </div>

      <div>
        <h1 className='font-semibold'>What I did and learned</h1>
        {
        learned.map((item) => {
          return (
            <ul key={item} className='list-disc ml-3'>
              <li>{item}</li>
            </ul>
          )
        })
        }
      </div>
    </div>
  )
}

export default Card

// #110C3A -> Purple
// #35356D -> Purple Less Dark
// #67254D -> Purple pink
// #995763 -> Purple pink Less Dark
// #CC9EA2 -> Pink
