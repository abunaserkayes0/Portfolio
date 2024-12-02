export const getStacksData = async () => {
    try {
        const data = await fetch("https://abunaserkayes.vercel.app/api/stacks");
        const stacks = await data.json();
        return stacks;
    } catch (error) {
        console.log(error.message);
    }
}

export const getStacksByFronted = async () => {
    try {
        const types = await getStacksData();
        const type = types?.filter((stack) => stack.type === "frontend");
        return type;
    } catch (error) {
        console.log(error.message);
    }

}
export const getStacksByBackend = async () => {
    try {
        const types = await getStacksData();
        const type = types?.filter((stack) => stack.type === "beckEnd");
        return type;
    } catch (error) {
        console.log(error.message);
    }
}
export const getStacksByTools = async () => {
    try {
        const types = await getStacksData();
        const type = types?.filter((stack) => stack.type === "tools");
        return type;
    } catch (error) {
        console.log(error.message);
    }
}
export const getStacksByBrowser = async () => {

    try {
        const types = await getStacksData();
        const type = types?.filter((stack) => stack.type === "browser");
        return type;
    } catch (error) {
        console.log(error.message);
    }
}
