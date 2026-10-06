const projects = [
  {
    id: "9oO5tt5j71wLJRnQc9kuTpZdgGT744HR",
    title: "Follow HR",
    description:
      "An AI-powered recruitment platform designed to streamline hiring workflows, candidate sourcing, and talent acquisition for agencies and enterprises.",
    users: {
      name: "Abu Naser Kayes",
      photo: "/assets/profile.png",
    },
    liveSite: "https://followhr.com/",
    sourceCode: "",
    siteImage: "/projects/followhr.png",
    technology: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
    ],
    keyFeatures: [
      "AI recruitment engine offering candidate recommendations and intelligent matching.",
      "Customizable applicant tracking pipeline with intuitive drag-and-drop workflow.",
      "Multi-channel candidate sourcing across job boards, LinkedIn, and social media.",
      "Real-time team collaboration hub with advanced recruitment analytics and reporting.",
      "Modern, responsive interface built with Next.js and styled with Tailwind CSS.",
    ],
  },
  {
    id: "9oO5tt5j71wLJRnQc9kuTpZdgGT733HR",
    title: "Follow HR Jobs",
    description:
      "An AI-powered job portal designed to connect candidates with tailored career opportunities and provide real-time application tracking.",
    users: {
      name: "Abu Naser Kayes",
      photo: "/assets/profile.png",
    },
    liveSite: "https://followhrjobs.com/",
    sourceCode: "",
    siteImage: "/projects/followhrjobs.png",
    technology: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
    ],
    keyFeatures: [
      "AI-driven job matching tailored to candidate skills and career goals.",
      "Real-time application tracking system for transparent job searching.",
      "Smart filters to navigate roles in development, design, marketing, and finance.",
      "Modern, responsive UI built with Next.js and styled with Tailwind CSS.",
    ],
  },
  {
    id: "9oO5tt5j71wLJRnQc9kuTpZdgGT755AD",
    title: "Follow HR Super Admin",
    description:
      "A centralized super administration dashboard panel to monitor and control recruitment operations, agency accounts, candidate pipelines, and platform metrics.",
    users: {
      name: "Abu Naser Kayes",
      photo: "/assets/profile.png",
    },
    liveSite: "https://admin.followhr.com/",
    sourceCode: "",
    siteImage: "/projects/followhr-admin.png",
    technology: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
    ],
    keyFeatures: [
      "Comprehensive administration console for managing organizations, agencies, and recruiters.",
      "Centralized management of job postings, applicant pipelines, and access privileges.",
      "Secure role-based authentication and operational permission controls.",
      "Real-time activity tracking, analytics dashboards, and system monitoring.",
      "High-performance responsive dashboard built with Next.js and Tailwind CSS.",
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
