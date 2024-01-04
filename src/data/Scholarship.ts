import type { 
  infoData,
  contactData,
  tecnologies,
  sectionsInterface
} from '../types/types'

import { TfiEmail } from 'react-icons/tfi'
import { FaUserGraduate, FaGithub, FaLinkedin, FaHome } from 'react-icons/fa'
import { IoIosRocket } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'

import {
  CssIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  PhpIcon,
  CsharpIcon,
  GitIcon,
  GitHubIcon,
  NextJSIcon,
  PythonIcon,
  SqlIcon,
  ReactIcon,
  CpIcon,
} from '../assets/icons'

export const ScholarshipInfo: infoData[] = [
  {
    title: 'Technical Baccalaurate #16 - Technician Analyst Programmer',
    campus: 'Villa de Álvarez cmapus, University of Colima',
    date: 'From June 2016 to June 2019',
    do: ['I learned the basics of programming', 'I did my first projects in C++ and C#', 'I also learned the basics of web development with PHP, HTML and CSS', 'I also learned the basics of databases with MySQL.'],
    technologies: ['css', 'js', 'php', 'cplusplus', 'csharp']

  },
  {
    title: 'Faculty of Telematics - Software Engineering',
    campus: 'Main campus, University of Colima',
    date: 'From August 2019 to present',
    do: ['I have learned the basics of web development with React', 'I have learned the basics of mobile development with React Native', 'I have learned the basics of databases with MySQL and MongoDB', 'I have learned the basics of backend development with NodeJS and ExpressJS.'],
    technologies: ['css', 'js', 'ts', 'python', 'sql', 'react', 'reactnative', 'php', 'cplusplus', 'csharp', 'git', 'github']
  }
]

export const technologiesInfo: tecnologies[] = [
  {
    id: 'css',
    name: 'CSS',
    color: 'bg-[#007bff]/50',
    icon: CssIcon
  },
  {
    id: 'js',
    name: 'JavaScript',
    color: 'bg-[#f7df1e]/50',
    icon: JavaScriptIcon
  },
  {
    id: 'ts',
    name: 'TypeScript',
    color: 'bg-[#007acc]/50',
    icon: TypeScriptIcon
  },
  {
    id: 'php',
    name: 'PHP',
    color: 'bg-[#4f5d95]/50',
    icon: PhpIcon
  },
  {
    id: 'cplusplus',
    name: 'C++',
    color: 'bg-[#61b267]/50',
    icon: CpIcon
  },
  {
    id: 'csharp',
    name: 'C#',
    color: 'bg-[#68217a]/50',
    icon: CsharpIcon
  },
  {
    id: 'python',
    name: 'Python',
    color: 'bg-[#ffd43b]/50',
    icon: PythonIcon
  },
  {
    id: 'sql',
    name: 'SQL',
    color: 'bg-[#336791]/50',
    icon: SqlIcon
  },
  {
    id: 'react',
    name: 'React',
    color: 'bg-[#61dafb]/50',
    icon: ReactIcon
  },
  {
    id: 'reactnative',
    name: 'React Native',
    color: 'bg-[#61dafb]/50',
    icon: ReactIcon
  },
  {
    id: 'git',
    name: 'Git',
    color: 'bg-[#f34f29]/50',
    icon: GitIcon
  },
  {
    id: 'github',
    name: 'GitHub',
    color: 'bg-[#000000]/50',
    icon: GitHubIcon
  },
  {
    id: 'nextjs',
    name: 'NextJS',
    color: 'bg-[#000000]/50',
    icon: NextJSIcon
  }
]

export const experienceData: infoData[] = [
  {
    title: 'Next U Workshop - Web Development',
    campus: 'Online',
    date: 'From Agust 2021 to December 2018',
    do: ['I learned the basics of web development', 'I created a page using the Google API where you had to search for a place, and it would display the map of that location with images', 'I also made a cryptocurrency wallet with Python, where I stored each transaction in a notepad.'],
    technologies: ['react', 'css', 'js', 'ts', 'python', 'sql', 'git', 'github']
  },
  {
    title: 'Udemy Workshop - React from zero to expert',
    campus: 'Online',
    do: ['I created my first React pages, starting from the "Hello world"', 'I created a meme app where I made requests to an API to fetch memes related to a search term', 'I also created custom hooks and utilized Reacts state and effect features.'],
    date: 'From July 2022 to December 2022',
    technologies: ['react', 'css', 'js', 'ts', 'git', 'github']
  },
  {
    title: 'Freeway Project - Web App',
    campus: 'Online',
    date: 'From June 2022 to present',
    do: ['I am currently working on a web app for a company called Freeway. I am working with a team of 4 people', 'Designed and developed the website using React and TypeScript', 'I created the dashboard layout where I used the companys own API to manage data and control users', 'Assisted in connecting the frontend with the backend using TypeScript'],
    technologies: ['react', 'css', 'js', 'ts', 'git', 'github']
  }
]

export const infoContactData: contactData[] = [
  {
    id: 'email',
    name: 'Email',
    data: 'gabinomorales1212@hotmail.com',
    link: 'mailto:gabinomorales@hotmail.com',
    icon: MdEmail
  },
  {
    id: 'github',
    name: 'GitHub',
    data: 'JoseGabino12',
    link: 'https://github.com/JoseGabino12',
    icon: FaGithub
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/gabinomorales/',
    data: 'José Gabino Morales González',
    icon: FaLinkedin
  }
]

export const sections: sectionsInterface[] = [
  {
    name: 'home',
    icon: FaHome
  },
  {
    name: 'experience',
    icon: IoIosRocket
  },
  {
    name: 'education',
    icon: FaUserGraduate
  },
  {
    name: 'contact',
    icon: TfiEmail
  }
]
