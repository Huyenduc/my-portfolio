export interface ProjectItem {
  id: string;
  name: string;
  period: string;
  role: string;
  teamSize: number;
  highlightBadge: string;
  description: string;
  techCategories: {
    label: string;
    items: string[];
  }[];
  responsibilities: string[];
  links: {
    website?: string;
    appStore?: string;
    googlePlay?: string;
  };
}

export interface ServiceItem {
  id: "web" | "mobile" | "backend";
  title: string;
  subtitle: string;
}

export interface HighlightStatItem {
  num: string;
  symbol: string;
  label: string;
}

export interface WorkStyleItem {
  id: "requirement" | "quality" | "testing" | "evidence" | "responsibility";
  title: string;
  description: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  subtitle: string;
  accent: "sky" | "indigo" | "emerald" | "amber";
  spanClass: string;
  skills: string[];
}

export interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  location: string;
  description: string;
  highlights: string[];
  techUsed: string[];
}

export interface EducationItem {
  period: string;
  school: string;
  degree: string;
  gpa: string;
  description: string;
}
