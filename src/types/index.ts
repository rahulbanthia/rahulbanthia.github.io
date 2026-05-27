export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  duration: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
  isFeatured?: boolean;
}

export interface TechItem {
  id: string;
  name: string;
  category: "frontend" | "backend" | "database" | "devops" | "language";
  color: string;
}

export interface VideoItem {
  id: string;
  title: string;
  videoId: string;
  genre: string;
  description?: string;
}

export interface GenreTag {
  label: string;
  color: string;
}
