export type infoData = {
  title: string,
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
}

export type tecnologies = {
  id: string,
  name: string,
  color: string,
}

export interface sectionsInterface {
  name: string,
}
