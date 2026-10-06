export type StackCategory =
    | "languages"
    | "frontend"
    | "state"
    | "backend"
    | "tools";

export interface StackItem {
    id: number;
    title: string;
    category: StackCategory;
    icon: string;
}

export interface StackGroup {
    label: string;
    category: StackCategory;
    items: StackItem[];
}

const stackData: StackItem[] = [
    // Languages
    {
        id: 1,
        title: "TypeScript",
        category: "languages",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
        id: 2,
        title: "JavaScript (ES6+)",
        category: "languages",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
        id: 3,
        title: "HTML5",
        category: "languages",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
        id: 4,
        title: "CSS3",
        category: "languages",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },

    // Frontend
    {
        id: 5,
        title: "Next.js",
        category: "frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
        id: 6,
        title: "React.js",
        category: "frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
        id: 7,
        title: "Tailwind CSS",
        category: "frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
        id: 8,
        title: "Ant Design",
        category: "frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg",
    },

    {
        id: 10,
        title: "Axios",
        category: "frontend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg",
    },

    // State Management
    {
        id: 11,
        title: "Redux & Redux Toolkit",
        category: "state",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
        id: 12,
        title: "RTK Query",
        category: "state",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
        id: 13,
        title: "TanStack Query",
        category: "state",
        icon: "https://raw.githubusercontent.com/TanStack/query/main/media/emblem-light.svg",
    },
    {
        id: 14,
        title: "Redux-Persist",
        category: "state",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },

    // Backend & Database
    {
        id: 15,
        title: "Node.js",
        category: "backend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
        id: 16,
        title: "Express.js",
        category: "backend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
        id: 17,
        title: "MongoDB",
        category: "backend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
        id: 18,
        title: "Mongoose",
        category: "backend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
        id: 19,
        title: "RESTful APIs",
        category: "backend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    },
    {
        id: 20,
        title: "JWT Authentication",
        category: "backend",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg",
    },

    // Tools & Workflow
    {
        id: 21,
        title: "Git & GitHub",
        category: "tools",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
        id: 22,
        title: "GitHub Actions",
        category: "tools",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg",
    },
    {
        id: 23,
        title: "VS Code",
        category: "tools",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
        id: 24,
        title: "Chrome DevTools",
        category: "tools",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
    },
    {
        id: 25,
        title: "Postman",
        category: "tools",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },
    {
        id: 26,
        title: "Vercel",
        category: "tools",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
    },
    {
        id: 27,
        title: "Netlify",
        category: "tools",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
    },
    {
        id: 28,
        title: "Husky",
        category: "tools",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
];

const categoryLabels: Record<StackCategory, string> = {
    languages: "Languages",
    frontend: "Frontend",
    state: "State Management",
    backend: "Backend & DB",
    tools: "Tools & DevOps",
};

const categoryOrder: StackCategory[] = [
    "languages",
    "frontend",
    "state",
    "backend",
    "tools",
];

export const getStaticStackData = async (): Promise<StackItem[]> => {
    return stackData || [];
};

export const getGroupedStackData = async (): Promise<StackGroup[]> => {
    return categoryOrder.map((category) => ({
        label: categoryLabels[category],
        category,
        items: stackData.filter((item) => item.category === category),
    }));
};