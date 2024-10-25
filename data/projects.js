const projects = [
    {
        id: "9oO5tt5j71wLJRnQc9kuTpZdgGT722RS",
        title: "Hotel Relax website",
        description: "A hotel booking website built with React, Next.js, and Tailwind CSS.",
        users: {
            name: "Abu Naser Kayes",
            photo: "/assets/profile.png",
        },
        liveSite: "https://hotel-booking-peach-gamma.vercel.app/",
        sourceCode: "https://github.com/abunaserkayes0/hotel-booking",
        siteImage: "/projects/hotel-banner.png",
        technology: [
            "NextJs",
            "React",
            "Tailwind CSS",
            "NextAuth",
            "Mongoose",
            "MongoDB"
        ],
        keyFeatures: [
            "User authentication with NextAuth",
            "Booking system with dynamic pricing",
            "Search functionality for hotels",
            "User-friendly interface"
        ]
    }
]

export const getStaticProjectsData = async () => {
    return projects || [];
}

export const getStaticProjectById = async (id) => {
    if (id) {
        const project = projects.find((project) => project.id === String(id));
        return project;
    } else {
        return null;
    }

}