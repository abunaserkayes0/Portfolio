const projects = [
  {
    id: "9oO5tt5j71wLJRnQc9kuTpZdgGT722RS",
    title: "Tourist Spot Management Application",
    description:
      "A web Application build in MERN stack for managing tourist spots.",
    users: {
      name: "Abu Naser Kayes",
      photo: "/assets/profile.png",
    },
    liveSite: "https://havenfinders.netlify.app/",
    sourceCode: "https://github.com/abunaserkayes0/havenfinders-client",
    siteImage: "/projects/havenfinders.jpg",
    technology: ["React", "Express Js", "MongoDB", "Tailwind CSS", "Daisy Ui"],
    keyFeatures: [
      "Built with React Js for optimized web performance.Utilizes Firebase for secure user authentication.Integrated with MongoDB as the database",
      "Implement dynamic rendering of hotel listings and details.Incorporates best practices for data protection.",
      "Designed for future scalability and the addition of new features.Includes user account management for booking history and preferences.Comprehensive reservation and availability checking functionality.",
      "Additional feature of this application implement react-typewriter and react-toastifyUses Context-API and handles authentication.",
    ],
  },
  {
    id: "9oO5tt5j71wLJRnQc9kuTpZdgGT72234",
    title: "FoodVillage Restaurant",
    description:
      "A web Application build in MERN stack for managing food items.In this application, you can order food items and see the order list.",
    users: {
      name: "Abu Naser Kayes",
      photo: "/assets/profile.png",
    },
    liveSite: "https://foodofvillage.netlify.app/",
    sourceCode: "https://github.com/abunaserkayes0/havenfinders-client",
    siteImage: "/projects/foodvillage.jpg",
    technology: [
      "React",
      "Express Js",
      "MongoDB",
      "Tailwind CSS",
      "Daisy Ui",
      "JWT",
    ],
    keyFeatures: [
      "Built with React Js for optimized web performance.Utilizes Firebase for secure user authentication.Integrated with MongoDB as the database.",
      "Implement backend with express js and MongoDB for storing data.",
      "Following Atomic structured for using code pattern and Slider use Swiper.js.",
      "Uses Context-API and handles authentication.",
    ],
  },
  {
    id: "9oO5tt5j71wLJRnQc9kuTpZdgGT72235",
    title: "Solution Daily needs",
    description:
      "A web Application build in MERN stack for managing daily needs items.In this application, you can order daily needs items and see the order list.",
    users: {
      name: "Abu Naser Kayes",
      photo: "/assets/profile.png",
    },
    liveSite: "https://unique-solution-client.vercel.app/",
    siteImage: "/projects/unique-solution.jpg",
    technology: ["React", "Express Js", "MongoDB", "Tailwind CSS", "Daisy Ui"],
    keyFeatures: [
      "Implement React Js for optimized web performance.Integrated with MongoDB as the database.",
      "Implement dynamic rendering of service and details.Incorporates best practices for data protection.",
      "Designed for future scalability and the addition of new features.Includes user account management for booking history and preferences.Comprehensive reservation and availability checking functionality.",
      "Additional feature of this application implement react-toastify and using animaition.css",
    ],
  },
];

export const getStaticProjectsData = async () => {
  return projects || [];
};

export const getStaticProjectById = async (id) => {
  if (id) {
    const project = projects.find((project) => project.id === String(id));
    return project;
  } else {
    return null;
  }
};
