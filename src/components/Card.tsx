import type { CardProps } from '../interfaces/interfaces'

import { technologiesInfo } from '../data/Scholarship'
import Badge from './Badge'

import { MdArrowOutward } from 'react-icons/md'

import 'aos/dist/aos.css';

const Card = ({
  title,
  img,
  description,
  campus,
  date,
  root,
  icon: Icon
}: CardProps) => {
  return (
    <article>
        <div
          className='backdrop-blur-md bg-white/30 block p-5 sm:flex flex-col gap-10 rounded-lg m-5'
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >

          <div className='flex flex-col justify-center items-center gap-5'>
            <div className='flex justify-between items-center w-full'>
              <Icon className='text-2xl' />
              <time dateTime={ date } className='color-[#003366] italic self-start sm:self-auto ml-5'>
                { date }
              </time>

              <a className='border-solid border rounded-full p-1 hover:bg-slate-300 hover:cursor-pointer'>
                <MdArrowOutward className='text-md' />
              </a>
            </div>
            <img src={ img } alt={ img } className='w-60 rounded-md' />
          </div>

          <div className='max-w-4xl flex flex-col gap-5 mt-3'>
            <h1 className='font-bold text-lg sm:text-xl'>{ title }</h1>
            <h2 className='italic'>{ campus }</h2>

            {
              
            }
          </div>


      </div>
    </article>
  )
}

export default Card
