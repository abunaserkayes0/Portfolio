import { getStaticStackData } from "@/data/stack";

export const getStacksData = async () => {
    try {
        return await getStaticStackData();
    } catch (error) {
        console.log("Error fetching stack data:", error.message);
        return [];
    }
};

export const getStacksByFrontend = async () => {
    const stacks = await getStacksData();
    return stacks?.filter((stack) => stack.type === "frontend") || [];
};

export const getStacksByBackend = async () => {
    const stacks = await getStacksData();
    return stacks?.filter((stack) => stack.type === "backend") || [];
};

export const getStacksByTools = async () => {
    const stacks = await getStacksData();
    return stacks?.filter((stack) => stack.type === "tools") || [];
};

export const getStacksByBrowser = async () => {
    const stacks = await getStacksData();
    return stacks?.filter((stack) => stack.type === "browser") || [];
};
