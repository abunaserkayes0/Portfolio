export const getProjectsData = async () => {
    try {
        const projects = await fetch(`https://abunaserkayes.vercel.app/api/projects`)
        const data = await projects.json();
        return data;
    } catch (error) {
        console.log(error.message);

    }
}

export const getProjectById = async (projectId) => {
    try {
        const project = await fetch(`https://abunaserkayes.vercel.app/api/projects/${projectId}`)
        const data = await project.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}
