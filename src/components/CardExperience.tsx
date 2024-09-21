import type { CardProps } from "../interfaces/interfaces"

const CardExperience = ({ img, title, date, className }: CardProps) => {
  return (
    <div className={`relative ${className} rounded-lg overflow-hidden group`}>
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover opacity-85 transform transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 flex flex-col gap-5 items-center justify-center p-4 backdrop-blur-md bg-black/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <h2 className="text-2xl self-start sm:self-auto transform scale-75 transition-transform duration-500 group-hover:scale-100">
          {title}
        </h2>
        <h5 className="color-[#003366] italic self-start sm:self-auto ml-5 transform scale-75 transition-transform duration-500 group-hover:scale-100">
          {date}
        </h5>
      </div>
    </div>
  )
}

export default CardExperience