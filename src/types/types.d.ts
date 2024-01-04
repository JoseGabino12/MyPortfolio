export type infoData = {
  title: string,
  img: any,
  campus: string,
  date: string,
  do: Array<string>,
  technologies: Array<string>
}

export type contactData = {
  id: string,
  name: string,
  link: string,
  data: string,
  icon: any
}

export type tecnologies = {
  id: string,
  name: string,
  color: string,
  icon?: any
}

export interface sectionsInterface {
  name: string,
  icon: any,
}

export interface CardProps {
  title: string,
  img: any,
  campus: string,
  date: string,
  technologies: string[],
  learned: string[]
}
