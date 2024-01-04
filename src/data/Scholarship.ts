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
  RubyIcon,
  RailsIcon
} from '../assets/icons'

import Brightcoder from '../assets/img/brightcoders.jpeg'
import Freeway from '../assets/img/freeway.jpeg'
import Roboyo from '../assets/img/roboyo.png'
import Udc from '../assets/img/udc.png'

export const ScholarshipInfo: infoData[] = [
  {
    title: 'Technical Baccalaurate #16 - Technician Analyst Programmer',
    img: Udc.src,
    campus: 'Villa de Álvarez cmapus, University of Colima',
    date: 'From June 2016 to June 2019',
    do: ['I acquired foundational programming skills, embarking on my initial projects using C++ and C#.', 'I delved into the fundamentals of web development, gaining proficiency in PHP, HTML, and CSS.', 'I familiarized myself with the essentials of database management through MySQL.'],
    technologies: ['css', 'js', 'php', 'cplusplus', 'csharp']

  },
  {
    title: 'Faculty of Telematics - Software Engineering',
    img: Udc.src,
    campus: 'Main campus, University of Colima',
    date: 'From August 2019 to Agust 2023',
    do: ['I have acquired a foundational understanding of web development using React.', 'I possess fundamental knowledge of mobile development using React Native.', 'I have gained proficiency in working with databases through exposure to MySQL and MongoDB.', 'I have familiarized myself with the fundamentals of backend development utilizing NodeJS and ExpressJS.'],
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
  },
  {
    id: 'ruby',
    name: 'Ruby',
    color: 'bg-[#cc342d]/50',
    icon: RubyIcon
  },
  {
    id: 'rails',
    name: 'Rails',
    color: 'bg-[#cc342d]/50',
    icon: RailsIcon
  }
]

export const experienceData: infoData[] = [
  {
    title: 'BrightCoders - Ruby on Rails Development',
    img: Brightcoder.src,
    campus: 'Colima, Villa de Álvarez',
    date: 'From May 2023 to November 2023',
    do: ['Developed a comprehensive website for event management utilizing Ruby on Rails and employing Postgres as the database. The platform facilitates seamless CRUD operations for events, with an added feature of setting up event reminders for enhanced user engagement and experience.', 'Successfully replicated the core functionalities of the Twitter application using Ruby on Rails and Postgres. Key actions such as post creation, user management, and interaction features like liking and sharing were implemented, providing users with a familiar and engaging social media experience.', 'Demonstrated proficiency in full-stack development by employing Ruby on Rails for server-side logic and utilizing Postgres as the database management system. This approach ensures a robust and scalable architecture for both the event management website and the Twitter application clone.', 'Integrated Postgres as the database backend for both projects, leveraging its reliability and performance benefits. This choice enhances data management, storage, and retrieval processes, contributing to the overall efficiency and responsiveness of the applications.', 'Prioritized user-centric features in both projects, focusing on creating an intuitive and engaging experience. The event management website incorporates event reminders, while the Twitter clone incorporates key social media actions, ensuring a dynamic and interactive user interface for optimal user satisfaction.'],
    technologies: ['ruby', 'css', 'js', 'rails', 'sql', 'git', 'github']
  },
  {
    title: 'Roboyo - RPA Developer Internship',
    img: Roboyo.src,
    campus: 'Colima, Villa de Álvarez',
    do: ['Developed a robot dedicated to conducting primary searches on COVID-related topics, with a focus on a specified state. The robot extracts relevant information and seamlessly dispatches it via email.', 'Designed a robot with the task of managing information in Excel efficiently. The robot is programmed to execute basic actions based on instructions, autonomously modifying information to streamline data management processes.', 'Crafted a specialized robot responsible for conducting detailed COVID-related research tailored to a specific state. This automated system efficiently extracts pertinent information and dispatches it via email for swift dissemination.', 'Engineered a robot with the capability to proficiently manage information within Excel. Following explicit instructions, the robot autonomously performs basic actions, ensuring seamless modifications to enhance data management workflows.',  'Developed a state-specific robot for comprehensive COVID research, ensuring thorough exploration of relevant topics. The extracted information is systematically transmitted via email, showcasing a seamless and automated dissemination process.'],
    date: 'From January 2023 - July 2023',
    technologies: ['js', 'css', 'csharp', 'git', 'github']
  },
  {
    title: 'Freeway Project - Web App',
    img: Freeway.src,
    campus: 'Colima, Villa de Álvarez',
    date: 'From June 2022 to present',
    do: ['Designed and implemented the website, employing TypeScript as the primary language and leveraging the React framework, along with styling libraries such as Chakra UI.', 'Crafted the user interface design for the control panel, utilizing TypeScript, the React framework, and styling libraries like Tailwind.', 'Collaborated on the backend integration of the control panel, employing TypeScript to ensure a seamless connection.', 'Took charge of designing the application layout using React Native, contributing to a cohesive and intuitive user experience.', 'Managed the frontend integration with the mobile API using React Native, ensuring effective communication between the application and the backend services.t'],
    technologies: ['react', 'css', 'js', 'ts', 'git', 'github', 'reactnative']
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
