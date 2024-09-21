import type { 
  infoData,
  contactData,
  tecnologies,
} from '../types/types'

import { FaUserGraduate, FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineWorkHistory } from 'react-icons/md'
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

import Roboyo from '../assets/img/roboyo.png'
import Udc from '../assets/img/udc.png'
import Danone from '../assets/img/danone.png'
import VolcanoTech from '../assets/img/volcanoTech.jpg'
import CodeSage from '../assets/img/buhoSinFondo.png'

export const ScholarshipInfo: infoData[] = [
  {
    id: 'udcb',
    icon: FaUserGraduate,
    title: 'Technical Baccalaurate #16 - Technician Analyst Programmer',
    img: Udc.src,
    campus: 'Villa de Álvarez cmapus, University of Colima',
    date: 'From June 2016 to June 2019',
    description: 'The University of Colima (UdeC), located in Colima, Mexico, is a leading educational institution founded in 1940. Renowned for its diverse academic programs in social sciences, humanities, natural sciences, engineering, and health sciences, UdeC emphasizes academic excellence and research.'
  },
  {
    id: 'udcf',
    icon: FaUserGraduate,
    title: 'Faculty of Telematics - Software Engineering',
    img: Udc.src,
    campus: 'Main campus - Colima, University of Colima',
    date: 'From August 2019 to Agust 2023',
    description: 'The University of Colima (UdeC), located in Colima, Mexico, is a leading educational institution founded in 1940. Renowned for its diverse academic programs in social sciences, humanities, natural sciences, engineering, and health sciences, UdeC emphasizes academic excellence and research.'
  }
]

export const technologiesInfo: tecnologies[] = [
  {
    id: 'css',
    name: 'CSS',
    color: 'bg-[#007bff]',
    icon: CssIcon
  },
  {
    id: 'js',
    name: 'JavaScript',
    color: 'bg-[#f7df1e]',
    icon: JavaScriptIcon
  },
  {
    id: 'ts',
    name: 'TypeScript',
    color: 'bg-[#007acc]',
    icon: TypeScriptIcon
  },
  {
    id: 'php',
    name: 'PHP',
    color: 'bg-[#4f5d95]',
    icon: PhpIcon
  },
  {
    id: 'cplusplus',
    name: 'C++',
    color: 'bg-[#61b267]',
    icon: CpIcon
  },
  {
    id: 'csharp',
    name: 'C#',
    color: 'bg-[#68217a]',
    icon: CsharpIcon
  },
  {
    id: 'python',
    name: 'Python',
    color: 'bg-[#ffd43b]',
    icon: PythonIcon
  },
  {
    id: 'sql',
    name: 'SQL',
    color: 'bg-[#336791]',
    icon: SqlIcon
  },
  {
    id: 'react',
    name: 'React',
    color: 'bg-[#61dafb]',
    icon: ReactIcon
  },
  {
    id: 'reactnative',
    name: 'React Native',
    color: 'bg-[#61dafb]',
    icon: ReactIcon
  },
  {
    id: 'git',
    name: 'Git',
    color: 'bg-[#f34f29]',
    icon: GitIcon
  },
  {
    id: 'github',
    name: 'GitHub',
    color: 'bg-[#000000]',
    icon: GitHubIcon
  },
  {
    id: 'nextjs',
    name: 'NextJS',
    color: 'bg-[#000000]',
    icon: NextJSIcon
  },
  {
    id: 'ruby',
    name: 'Ruby',
    color: 'bg-[#cc342d]',
    icon: RubyIcon
  },
  {
    id: 'rails',
    name: 'Rails',
    color: 'bg-[#cc342d]',
    icon: RailsIcon
  }
]

export const experienceData: infoData[] = [
  {
    id: 'volcanotech',
    icon: MdOutlineWorkHistory,
    title: 'Volcano Tech - Full Stack Developer',
    img: VolcanoTech.src,
    campus: 'Colima, Villa de Álvarez',
    date: 'From Nov 2023 to present',
    description: 'Volcano Tech is a software development company that specializes in creating custom software solutions for businesses. As a Full Stack Developer, I was responsible for developing and maintaining web applications, ensuring their functionality and performance met client requirements.'
  },
  {
    id: 'roboyo',
    icon: MdOutlineWorkHistory,
    title: 'Roboyo - RPA Developer Internship',
    img: Roboyo.src,
    campus: 'Colima, Villa de Álvarez',
    description: 'Roboyo is a renowned industry leader in the field of Robotic Process Automation (RPA). Headquartered in Guadalajara, Roboyo provides innovative solutions to optimize business processes through the implementation of intelligent software robots. Their focus is on helping organizations achieve operational efficiency, cost reduction, and improved work quality by automating repetitive rule-based tasks.',
    date: 'From January 2023 - July 2023',
  },
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

export const projectsData: infoData[] = [
  {
    id: 'danone',
    icon: IoIosRocket,
    title: 'Hackathon Danone México',
    img: Danone.src,
    campus: 'Virtual - Gather',
    date: 'Jun 19, 2023',
    description: 'This project was developed for a Danone hackathon organized by NUEW. The objective was to create a solution that would help the company promote Danone\´s range of ecological and healthy products.',
  },
  {
    id: 'codesage',
    icon: IoIosRocket,
    title: 'CodeSage',
    img: CodeSage.src,
    campus: 'Virtual',
    date: 'Jun 19, 2023',
    description: 'CodeSage is a platform that connects students with experienced professionals in the tech industry. The platform provides students with the opportunity to learn from industry experts, gain valuable insights, and receive mentorship to help them succeed in their careers'

  }
]
