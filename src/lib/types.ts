
export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
}

export interface Project {
  title: string;
  year: string;
  description: string;
  skills?: string[];
  image?: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  year: string;
}

export interface Skill {
  name: string;
  level?: number; // 1-10
  category?: "frontend" | "backend" | "testing" | "tools" | "hardware" | "software" | "other";
}
