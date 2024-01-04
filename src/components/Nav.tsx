import React, { useState } from 'react';
import { sections } from '../data/Scholarship';

interface Section {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Nav: React.FC = () => {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);

  return (
    <section className='w-full flex justify-center'>
      <div className='flex-row flex bottom-0 gap-4 justify-around z-10 p-5 fixed rounded-t-lg backdrop-blur-md bg-white/30 sm:mb-10 sm:rounded-b-lg sm:bottom-auto'>
        {sections.map((section: Section, index: number) => (
          <a
            key={index}
            href={`#${section.name}`}
            onMouseEnter={() => setHoveredSection(index)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <h3 className='font-mono flex font-semibold italic capitalize hover:scale-110'>
              <section.icon className='text-2xl' />
              <label className={`${hoveredSection === index ? 'block' : 'hidden'}`}>
                {section.name}
              </label>
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Nav;
