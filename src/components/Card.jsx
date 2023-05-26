import { technologiesInfo } from '../data/Scholarship'

const Card = ({ title, campus, date, technologies, learned }) => {
  const technologiesIcons = technologiesInfo.filter(tech => technologies.includes(tech.id))

  return (
    <div className='flex flex-col gap-4 w-full backdrop-blur-md bg-white/30 p-5 rounded-md font-serif'>
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

      <div>
        <h1 className='font-semibold'>Applied Technologies</h1>
        <div className='flex flex-row gap-2 text-2xl mt-2'>
          {
          technologiesIcons.map((tec, index) => (
            <tec.icon key={index} className={tec.color} />
          ))
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
