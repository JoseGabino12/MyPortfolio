import React from 'react';
import { sections } from '../data/Scholarship';
import type { Section } from '../interfaces/interfaces';

const Nav: React.FC = () => {
  return (
    <nav className='w-full flex justify-center'>
      <div className='bottom-0 gap-4 justify-around z-10 p-5 fixed rounded-t-lg backdrop-blur-md bg-white/30 sm:rounded-b-lg sm:right-0 sm:translate-y-1/2 sm:bottom-1/2 sm:flex-col'>
        <ul className='flex sm:flex-col gap-4 pr-4 -mr-2 relative'>

          {sections.map((section: Section, index: number) => (
            <li>
              <a
                key={index}
                href={`#${section.name}`}
              >
                <h3 className='font-mono flex flex-col items-center font-semibold italic capitalize hover:scale-110'>
                  <section.icon className={`text-2xl`} />
                </h3>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
