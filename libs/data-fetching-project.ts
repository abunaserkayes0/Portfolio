import { getStaticProjectsData, getStaticProjectById } from "@/data/projects";

export const getProjectsData = async () => {
    try {
        return await getStaticProjectsData();
    } catch (error: any) {
        console.log("Error fetching projects:", error.message);
        return [];
    }
};

export const getProjectById = async (projectId: string) => {
    try {
        return await getStaticProjectById(projectId);
    } catch (error: any) {
        console.log("Error fetching project by ID:", error.message);
        return null;
    }
};
