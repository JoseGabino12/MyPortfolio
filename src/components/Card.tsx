import type { CardProps } from '../interfaces/interfaces'

import { technologiesInfo } from '../data/Scholarship'
import Badge from './Badge'

const Card = ({
  title,
  img,
  description,
  campus,
  date,
  technologies,
  root
}: CardProps) => {
  const technologiesIcons = technologiesInfo.filter(tech => technologies.includes(tech.id))

  return (
    <article>
      <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-gray-700" />
      <time dateTime={ date } className='color-[#003366] italic self-start sm:self-auto ml-5'>{ date }</time>

      <div className='flex'>
        <div className='backdrop-blur-md bg-white/30 block p-5 sm:flex gap-10 rounded-lg m-5'>
          <div className='flex flex-col justify-center items-center gap-5'>
            <img src={ img } alt={ img } className='w-60 rounded-md' />
          </div>

          <div className='max-w-4xl flex flex-col gap-5 mt-3'>
            <h1 className='font-bold text-lg sm:text-xl'>{ title }</h1>
            <h2 className='italic'>{ campus }</h2>

            <h1>Description</h1>
            <p className='mb-2'>
              { description }
            </p>

            <div className='flex flex-wrap items-center gap-5'>
              {
                technologiesIcons.map((tech) => {
                  return (
                    <Badge key={ tech.id } text={ tech.name } className={ tech.color } icon={ tech.icon } />
                  )
                })
              }
            </div>

            <a href={ `/${root}` }>
              <button className="button-view learn-more">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">View more</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Card

// #110C3A -> Purple
// #35356D -> Purple Less Dark
// #67254D -> Purple pink
// #995763 -> Purple pink Less Dark
// #CC9EA2 -> Pink
