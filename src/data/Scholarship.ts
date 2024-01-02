import type { 
  infoData,
  contactData,
  tecnologies,
  sectionsInterface
} from '../types/types'

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
    color: 'text-[#007bff]'
  },
  {
    id: 'js',
    name: 'JavaScript',
    color: 'text-[#f7df1e]'
  },
  {
    id: 'ts',
    name: 'TypeScript',
    color: 'text-[#007acc]'
  },
  {
    id: 'php',
    name: 'PHP',
    color: 'text-[#4f5d95]'
  },
  {
    id: 'cplusplus',
    name: 'C++',
    color: 'text-[#61b267]'
  },
  {
    id: 'csharp',
    name: 'C#',
    color: 'text-[#68217a]'
  },
  {
    id: 'python',
    name: 'Python',
    color: 'text-[#ffd43b]'
  },
  {
    id: 'sql',
    name: 'SQL',
    color: 'text-[#336791]'
  },
  {
    id: 'react',
    name: 'React',
    color: 'text-[#61dafb]'
  },
  {
    id: 'reactnative',
    name: 'React Native',
    color: 'text-[#61dafb]'
  },
  {
    id: 'git',
    name: 'Git',
    color: 'text-[#f34f29]'
  },
  {
    id: 'github',
    name: 'GitHub',
    color: 'text-[#000000]'
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
  },
  {
    id: 'github',
    name: 'GitHub',
    data: 'JoseGabino12',
    link: 'https://github.com/JoseGabino12',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/gabinomorales/',
    data: 'José Gabino Morales González',
  }
]

export const sections: sectionsInterface[] = [
  {
    name: 'home',
  },
  {
    name: 'education',
  },
  {
    name: 'aditional',
  },
  {
    name: 'contact',
  }
]
