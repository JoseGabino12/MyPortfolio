export type doData = {
  subtitle: string,
  description: string
}

export type infoData = {
  id: string,
  title: string,
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
  img: any,
  campus: string,
  date: string,
  description: string,
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
