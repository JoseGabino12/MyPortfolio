import type { 
  infoData,
  contactData,
  tecnologies,
} from '../types/types'

import type { sectionsInterface } from '../interfaces/interfaces'

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
    id: 'udcb',
    title: 'Technical Baccalaurate #16 - Technician Analyst Programmer',
    img: Udc.src,
    campus: 'Villa de Álvarez cmapus, University of Colima',
    date: 'From June 2016 to June 2019',
    description: 'The University of Colima (UdeC), located in Colima, Mexico, is a leading educational institution founded in 1940. Renowned for its diverse academic programs in social sciences, humanities, natural sciences, engineering, and health sciences, UdeC emphasizes academic excellence and research.',
    do: [
      {
        subtitle: 'Embarking on Programming Journey: C++ and C# Projects',
        description: 'Initiated my programming journey by developing foundational skills with C++ and C#. Created initial projects to apply and reinforce programming concepts, laying the groundwork for future endeavors.'
      },
      {
        subtitle: 'Mastering Web Development Fundamentals: PHP, HTML, CSS Proficiency',
        description: 'Delved into the core fundamentals of web development, acquiring proficiency in PHP, HTML, and CSS. Applied this knowledge to build responsive and visually appealing web interfaces, honing skills essential for crafting dynamic websites.'
      },
      {
        subtitle: 'Navigating Database Realms: Unraveling MySQL Management',
        description: 'Explored the essentials of database management through MySQL, gaining a deep understanding of database structures, queries, and optimization techniques. Applied this knowledge to enhance data storage and retrieval processes, contributing to the overall efficiency of web projects.'
      }
    ],
    technologies: ['css', 'js', 'php', 'cplusplus', 'csharp']

  },
  {
    id: 'udcf',
    title: 'Faculty of Telematics - Software Engineering',
    img: Udc.src,
    campus: 'Main campus - Colima, University of Colima',
    date: 'From August 2019 to Agust 2023',
    description: 'The University of Colima (UdeC), located in Colima, Mexico, is a leading educational institution founded in 1940. Renowned for its diverse academic programs in social sciences, humanities, natural sciences, engineering, and health sciences, UdeC emphasizes academic excellence and research.',
    do: [
      {
        subtitle: 'Foundational Web Development: Exploring React',
        description: 'Acquired a foundational understanding of web development using React. Explored Reacts capabilities in creating dynamic and responsive user interfaces, laying the groundwork for immersive web applications.'
      },

      {
        subtitle: 'Fundamental Mobile Development: Navigating React Native',
        description: 'Possess fundamental knowledge of mobile development using React Native. Explored the power of React in the mobile realm, enabling the creation of cross-platform applications with a unified codebase.'
      },

      {
        subtitle: 'Database Proficiency: MySQL and MongoDB Mastery',
        description: 'Gained proficiency in working with databases through exposure to MySQL and MongoDB. Applied database management skills to ensure efficient storage, retrieval, and manipulation of data for diverse application scenarios.'
      },

      {
        subtitle: 'Back-End Fundamentals: NodeJS and ExpressJS Mastery',
        description: 'Familiarized myself with the fundamentals of back-end development utilizing NodeJS and ExpressJS. Explored server-side scripting, routing, and middleware concepts, contributing to a holistic understanding of full-stack development.'
      }
    ],
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
    id: 'brightcoders',
    title: 'BrightCoders - Ruby on Rails Development',
    img: Brightcoder.src,
    campus: 'Colima, Villa de Álvarez',
    date: 'From May 2023 to November 2023',
    do: [
      {
        subtitle: 'Event Management Website',
        description: 'Developed a comprehensive website for event management utilizing Ruby on Rails and employing Postgres as the database. The platform facilitates seamless CRUD operations for events, with an added feature of setting up event reminders for enhanced user engagement and experience.'
      },
      {
        subtitle:'Twitter Clone',
        description: 'Successfully replicated the core functionalities of the Twitter application using Ruby on Rails and Postgres. Key actions such as post creation, user management, and interaction features like liking and sharing were implemented, providing users with a familiar and engaging social media experience.'
      }, 
      {
        subtitle: 'Stack Proficiency',
        description: 'Demonstrated proficiency in full-stack development by employing Ruby on Rails for server-side logic and utilizing Postgres as the database management system. This approach ensures a robust and scalable architecture for both the event management website and the Twitter application clone.'
      }, 
      {
        subtitle: 'Efficient Data Management',
        description: 'Integrated Postgres as the database backend for both projects, leveraging its reliability and performance benefits. This choice enhances data management, storage, and retrieval processes, contributing to the overall efficiency and responsiveness of the applications.'
      }, 
      {
        subtitle: 'User-Centric Web Design',
        description: 'Prioritized user-centric features in both projects, focusing on creating an intuitive and engaging experience. The event management website incorporates event reminders, while the Twitter clone incorporates key social media actions, ensuring a dynamic and interactive user interface for optimal user satisfaction.'
      }
    ],
    description: 'It is a programming and software development academy that focuses on training proactive young individuals who are eager to learn certification programs designed to enhance their skills, improve their chances of accessing quality employment, and enhance their living conditions.',
    technologies: ['ruby', 'css', 'js', 'rails', 'sql', 'git', 'github']
  },
  {
    id: 'roboyo',
    title: 'Roboyo - RPA Developer Internship',
    img: Roboyo.src,
    campus: 'Colima, Villa de Álvarez',
    description: 'Roboyo is a renowned industry leader in the field of Robotic Process Automation (RPA). Headquartered in Guadalajara, Roboyo provides innovative solutions to optimize business processes through the implementation of intelligent software robots. Their focus is on helping organizations achieve operational efficiency, cost reduction, and improved work quality by automating repetitive rule-based tasks.',
    do: [
      {
        subtitle: 'COVID Topic Search Robot',
        description: 'Developed a robot dedicated to conducting primary searches on COVID-related topics, with a focus on a specified state. The robot extracts relevant information and seamlessly dispatches it via email.'
      },
      {
        subtitle: 'Efficient Excel Management Robot',
        description: 'Designed a robot with the task of managing information in Excel efficiently. The robot is programmed to execute basic actions based on instructions, autonomously modifying information to streamline data management processes.'
      },
      {
        subtitle: 'Specialized COVID Research Robot',
        description: 'Crafted a specialized robot responsible for conducting detailed COVID-related research tailored to a specific state. This automated system efficiently extracts pertinent information and dispatches it via email for swift dissemination.'
      },
      {
        subtitle: 'Excel Information Management Robot',
        description: 'Engineered a robot with the capability to proficiently manage information within Excel. Following explicit instructions, the robot autonomously performs basic actions, ensuring seamless modifications to enhance data management workflows.'
      },
      {
        subtitle: 'State-Specific COVID Research Robot',
        description: 'Developed a state-specific robot for comprehensive COVID research, ensuring thorough exploration of relevant topics. The extracted information is systematically transmitted via email, showcasing a seamless and automated dissemination process.'
      }
    ],
    date: 'From January 2023 - July 2023',
    technologies: ['js', 'css', 'csharp', 'git', 'github']
  },
  {
    id: 'freeway',
    title: 'Freeway Project - Web App',
    img: Freeway.src,
    campus: 'Colima, Villa de Álvarez',
    date: 'From June 2022 to present',
    description: 'FreeWay is a logistics transportation application that allows carriers to offer cargo services using only their smartphones. We take care of marketing and social media campaigns, enabling them to do what they do best.',
    do: [
      {
        subtitle: 'Website Development and implementation',
        description: 'Designed and implemented the website, employing TypeScript as the primary language and leveraging the React framework, along with styling libraries such as Chakra UI.'
      },
      {
        subtitle: 'Control Panel User Interface Design',
        description: 'Crafted the user interface design for the control panel, utilizing TypeScript, the React framework, and styling libraries like Tailwind.'
      },
      {
        subtitle: 'Backend Integration',
        description: 'Collaborated on the backend integration of the control panel, employing TypeScript to ensure a seamless connection.'
      },
      {
        subtitle: 'Mobile Application Layout Design',
        description: 'Took charge of designing the application layout using React Native, contributing to a cohesive and intuitive user experience.'
      },
      {
        subtitle: 'Frontend Integration with Mobile API',
        description: 'Managed the frontend integration with the mobile API using React Native, ensuring effective communication between the application and the backend services'
      }
    ],
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
