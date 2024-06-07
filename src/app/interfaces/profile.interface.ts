export interface Post {
  like: string;
  comment: string;
  img: string;
}

export interface Switcher {
  text: string;
}

export interface InsightCategory {
  title: string;
  text: string[];
}

export interface Biography {
  title: string;
  subtitle?: string[];
  text: string[];
}

export interface Experience {
  title: string;
  text: string;
}
