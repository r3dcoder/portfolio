export interface Menu {
  label: string;
  solidIcon: string;
  outlineIcon: string;
  id: string;
}

export interface Skill {
  name: string;
  imageUrl: string;
}

export interface Project {
  name: string;
  imageUrl: string;
  languages?: string[];
  link: string;
}

export interface Review {
  name: string;
  imageUrl: string;
  review?: string;
  profileLink: string;
}
