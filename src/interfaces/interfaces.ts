import type { infoData } from "../types/types" 

export interface sectionsInterface {
  name: string,
  icon: any,
}

export interface CardProps {
  title: string,
  img: any,
  description: string,
  campus: string,
  date: string,
  technologies: string[],
  root: string
}

export interface singlePage {
  experience?: infoData | undefined,
  scholarship?: infoData | undefined,
}

export interface Section {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}