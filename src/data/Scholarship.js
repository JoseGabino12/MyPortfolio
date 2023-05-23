import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io5'
import { SiPhp, SiCplusplus, SiCsharp, SiMysql, SiPython, SiTypescript, SiReact } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

export const ScholarshipInfo = [
  {
    title: 'Technical Baccalaurate #16 - Technician Analyst Programmer',
    campus: 'Villa de Álvarez cmapus, University of Colima',
    date: 'From June 2016 to June 2019',
    technologies: ['css', 'js', 'php', 'cplusplus', 'csharp']

  },
  {
    title: 'Faculty of Telematics - Software Engineering',
    campus: 'Main campus, University of Colima',
    date: 'From August 2019 to present',
    technologies: ['css', 'js', 'ts', 'python', 'sql', 'react', 'reactnative', 'php', 'cplusplus', 'csharp']
  }
]

export const technologiesInfo = [
  {
    id: 'css',
    name: 'CSS',
    icon: IoLogoCss3,
    color: 'text-[#007bff]'
  },
  {
    id: 'js',
    name: 'JavaScript',
    icon: IoLogoJavascript,
    color: 'text-[#f7df1e]'
  },
  {
    id: 'ts',
    name: 'TypeScript',
    icon: SiTypescript,
    color: 'text-[#007acc]'
  },
  {
    id: 'php',
    name: 'PHP',
    icon: SiPhp,
    color: 'text-[#4f5d95]'
  },
  {
    id: 'cplusplus',
    name: 'C++',
    icon: SiCplusplus,
    color: 'text-[#61b267]'
  },
  {
    id: 'csharp',
    name: 'C#',
    icon: SiCsharp,
    color: 'text-[#68217a]'
  },
  {
    id: 'python',
    name: 'Python',
    icon: SiPython,
    color: 'text-[#ffd43b]'
  },
  {
    id: 'sql',
    name: 'SQL',
    icon: SiMysql,
    color: 'text-[#336791]'
  },
  {
    id: 'react',
    name: 'React',
    icon: SiReact,
    color: 'text-[#61dafb]'
  },
  {
    id: 'reactnative',
    name: 'React Native',
    icon: TbBrandReactNative,
    color: 'text-[#61dafb]'
  }
]
