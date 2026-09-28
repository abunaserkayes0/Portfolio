export interface ProjectUser {
  name: string;
  photo: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  users: ProjectUser;
  liveSite: string;
  sourceCode: string;
  siteImage: string;
  technology: string[];
  keyFeatures: string[];
}

export type StackType = "frontend" | "backend" | "tools" | "browser";

export interface StackItem {
  id: number;
  title: string;
  type: StackType;
  image: string;
}

export interface CardProps {
  project: Project;
}

export interface ButtonProps {
  className?: string;
  variant?: "default" | "outline" | "pill" | "primary" | "secondary" | "tertiary" | "quaternary" | "quinary" | "senary";
  size?: "default" | "sm" | "lg" | "icon" | "wide";
  padding?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
}
