import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaJsSquare } from 'react-icons/fa'; // Puedes agregar tus íconos
import { technologiesInfo } from '../data/Scholarship'; // Asegúrate de tener los datos correctamente.

const Carousel = () => {
  return (
    <div className='flex w-full justify-center items-center rounded-b-[80px] sm:rounded-b-[150px] bg-white dark:bg-[#1A1A1A] h-[200px] sm:h-[300px]'>
      <div className='w-full h-40 max-w-5xl xl:max-w-7xl text-base p-5'>
        <div className='w-full h-28 relative inline-flex flex-nowrap dark:bg-raisin-black rounded-3xl items-center justify-between px-10 overflow-hidden'>
          <div className='absolute left-0 w-28 h-full bg-gradient-to-r from-raisin-black to-transparent z-[1]' />
          <div className='absolute right-0 w-28 h-full bg-gradient-to-l from-raisin-black to-transparent z-[1]' />

          <div className='w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]'>
            <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'>
              { technologiesInfo.map((tech) => {
                return (
                  <li key={ tech.id } className='mx-8'>
                    <tech.icon className='w-14 h-14 grayscale object-fill hover:grayscale-0' />
                  </li>
                );
              }) }
            </ul>

            {/* Segunda lista para el loop infinito */ }
            <ul
              className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll'
              aria-hidden='true'
            >
              { technologiesInfo.map((tech) => {
                return (
                  <li key={ tech.id } className='mx-8'>
                    <tech.icon className='w-14 h-14 grayscale object-fill hover:grayscale-0' />
                  </li>
                );
              }) }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;