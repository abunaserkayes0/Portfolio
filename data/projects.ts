const projects = [
  {
    id: "9oO5tt5j71wLJRnQc9kuTpZdgGT744HR",
    title: "FollowHR – AI Recruitment & ATS Platform",
    description:
      "Enterprise recruitment platform designed to streamline hiring workflows, candidate screening pipelines, and recruiter dashboards with real-time analytics.",
    users: {
      name: "Abu Naser Kayes",
      photo: "/assets/profile.png",
    },
    liveSite: "https://followhr.com/",
    sourceCode: "",
    siteImage: "/projects/followhr.png",
    technology: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "RESTful APIs",
    ],
    keyFeatures: [
      "Architected candidate screening workflows, interactive hiring pipelines, and recruiter dashboards using Next.js, TypeScript, and Tailwind CSS.",
      "Engineered responsive UI components, candidate evaluation analytics, and RESTful API integrations to streamline enterprise recruitment operations.",
      "Customizable applicant tracking pipeline with intuitive drag-and-drop workflow and candidate evaluation analytics.",
      "Engineered robust frontend optimization with code splitting and server-side rendering (SSR) for high performance.",
    ],
  },
  {
    id: "9oO5tt5j71wLJRnQc9kuTpZdgGT733HR",
    title: "FollowHR Jobs – Job Board & Candidate Portal",
    description:
      "Fast, SEO-optimized public recruitment portal connecting candidates with tailored career opportunities featuring advanced job filtering and application flows.",
    users: {
      name: "Abu Naser Kayes",
      photo: "/assets/profile.png",
    },
    liveSite: "https://followhrjobs.com/",
    sourceCode: "",
    siteImage: "/projects/followhrjobs.png",
    technology: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    keyFeatures: [
      "Built fast, SEO-optimized public-facing recruitment portal with advanced job filtering, dynamic routing, and streamlined application flows.",
      "Integrated centralized state management via Redux Toolkit and implemented accessible interactive components with smooth micro-animations.",
      "Real-time application tracking system for transparent job searching and candidate profile management.",
      "Fully responsive, accessible design adhering to mobile-first standards.",
    ],
  },
  {
    id: "9oO5tt5j71wLJRnQc9kuTpZdgGT755AD",
    title: "FollowHR Super Admin – Management Console",
    description:
      "Centralized super administration dashboard to monitor and control recruitment operations, agency accounts, candidate pipelines, and platform metrics.",
    users: {
      name: "Abu Naser Kayes",
      photo: "/assets/profile.png",
    },
    liveSite: "https://admin.followhr.com/",
    sourceCode: "",
    siteImage: "/projects/followhr-admin.png",
    technology: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "RESTful APIs",
    ],
    keyFeatures: [
      "Comprehensive administration console for managing organizations, agencies, and recruiters.",
      "Centralized management of job postings, applicant pipelines, and access privileges.",
      "Secure role-based authentication and operational permission controls.",
      "Real-time activity tracking, analytics dashboards, and system monitoring.",
    ],
  },
];

export const getStaticProjectsData = async () => {
  return projects || [];
};

export const getStaticProjectById = async (id: string) => {
  if (id) {
    const project = projects.find(
      (project) => String(project.id) === String(id)
    );
    return project;
  } else {
    return null;
  }
};
