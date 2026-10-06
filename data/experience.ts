export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  logo: string;
  responsibilities: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "skillerszone",
    role: "Front-End Developer",
    company: "SkillersZone LLC",
    location: "Dhaka, Bangladesh",
    period: "Mar 2025 – Present",
    isCurrent: true,
    logo: "/assets/skillers-zone.png",
    responsibilities: [
      "Spearheaded frontend engineering for scalable web platforms including the FollowHR ATS suite and FollowHR Jobs portal, translating complex UI/UX wireframes into interactive, accessible interfaces utilizing HTML5, CSS3, JavaScript, React.js, Next.js, and Ant Design.",
      "Engineered robust frontend optimization through lazy loading, code splitting, asset minification, and server-side rendering (SSR) to accelerate page loads and elevate SEO benchmarks, while enforcing strict mobile-first design standards to ensure seamless cross-browser consistency across all desktop, tablet, and mobile devices."
    ],
    skills: ["Next.js", "React.js", "TypeScript", "JavaScript", "Ant Design", "Tailwind CSS", "SSR", "Performance"]
  },
  {
    id: "gojustitech",
    role: "Front-End Developer (Intern)",
    company: "GoJustitech",
    location: "Dhaka, Bangladesh",
    period: "Jan 2024 – Jul 2024",
    isCurrent: false,
    logo: "/assets/image.jpeg",
    responsibilities: [
      "Developed responsive, reusable, and user-centric web applications using HTML5, CSS3, JavaScript, React.js, Next.js, and Ant Design.",
      "Translated high-fidelity UI/UX design mockups into functional, scalable interfaces while adhering to modular, clean code architecture.",
      "Engineered mobile-first, cross-browser-compatible layouts and improved client-side performance through lazy loading, code minification, and server-side rendering (SSR), driving noticeable reductions in initial page load times and elevating user engagement."
    ],
    skills: ["React.js", "Next.js", "JavaScript", "HTML5", "CSS3", "Ant Design", "Code Splitting", "Clean Code"]
  }
];
