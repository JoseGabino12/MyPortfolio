import type { CardProps } from '../types/types'

import { technologiesInfo } from '../data/Scholarship'
import Badge from './Badge'

const Card = ({ title, img, campus, date, technologies, learned } : CardProps) => {  
  const technologiesIcons = technologiesInfo.filter(tech => technologies.includes(tech.id))

  return (
    <div className='block sm:flex border-s border-gray-200 gap-10 pt-10'>
      <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700" />
      
      <div className='flex flex-col gap-5 mb-10 ms-4'>
        <time dateTime={date} className='text-gray-300 italic'>{date}</time>
        <img src={img} alt={img} className='w-60 h-60 rounded-md' />
      </div>

      <div className='max-w-4xl flex flex-col gap-3 ms-4 sm:ms-0'>
        <h1 className='font-bold text-xl'>{title}</h1>
        <h2 className='italic'>{campus}</h2>

        <div className='border-b border-gray-200 pb-4'>
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

        <div className='flex flex-wrap items-center gap-5'>
          {
          technologiesIcons.map((tech) => {
            return (
              <Badge key={tech.id} text={tech.name} className={tech.color} icon={tech.icon} />
            )
          })
          }
        </div>
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
