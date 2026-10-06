import { getStaticStackData, getGroupedStackData } from "@/data/stack";
import type { StackItem, StackGroup, StackCategory } from "@/data/stack";

export const getStacksData = async (): Promise<StackItem[]> => {
    try {
        return await getStaticStackData();
    } catch (error: any) {
        console.log("Error fetching stack data:", error.message);
        return [];
    }
};

export const getStackGroups = async (): Promise<StackGroup[]> => {
    try {
        return await getGroupedStackData();
    } catch (error: any) {
        console.log("Error fetching grouped stack data:", error.message);
        return [];
    }
};

export const getStacksByCategory = async (category: StackCategory): Promise<StackItem[]> => {
    const stacks = await getStacksData();
    return stacks?.filter((stack) => stack.category === category) || [];
};

export const getStacksByFrontend = async () => {
    return getStacksByCategory("frontend");
};

export const getStacksByBackend = async () => {
    return getStacksByCategory("backend");
};

export const getStacksByTools = async () => {
    return getStacksByCategory("tools");
};

export const getStacksByState = async () => {
    return getStacksByCategory("state");
};
