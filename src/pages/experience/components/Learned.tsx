import type { singlePage } from "../../../interfaces/interfaces"

const Learned = ({ experience }: singlePage) => {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="font-bold text-xl">What I did and learned</h2>
      <ul className="font-sans font-normal text-base rounded-t-md backdrop-blur-md bg-white/30">
        {
          experience?.do.map((thing, index) => (
            <li
              className='p-8 border-b border-gray-300 animate-fade-in-left [animation-fill-mode:both] hover:bg-white/30'
              key={ index }
              style={ { animationDelay: `${200 * (index + 1)}ms` } }
            >
              <h4 className="font-bold italic mb-2">{ thing.subtitle }</h4>
              { thing.description }
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Learned