const stackData = [
    {
        id: 0,
        title: "Html",
        type: "frontend",
        image: "/stacks/html.webp"
    }, {
        id: 1,
        title: "CSS",
        type: "frontend",
        image: "/stacks/css.webp"
    },
    {
        id: 2,
        title: "Javascript",
        type: "frontend",
        image: "/stacks/javaScript.webp"
    },
    {
        id: 3,
        title: "TailWindCss",
        type: "frontend",
        image: "/stacks/tailwindcss.webp"
    },
    {
        id: 4,
        title: "React",
        type: "frontend",
        image: "/stacks/react.webp"
    },
    {
        id: 5,
        title: "Next.js",
        type: "frontend",
        image: "/stacks/nextjs.webp"
    }, {
        id: 6,
        title: "Node.js",
        type: "beckEnd",
        image: "/stacks/nodejs.webp"
    },
    {
        id: 7,
        title: "MongoDB",
        type: "beckEnd",
        image: "/stacks/mongodb.webp"
    }, {
        id: 8,
        title: "VsCode",
        type: "tools",
        image: "/stacks/vscode.webp"
    }, {
        id: 9,
        title: "Git",
        type: "tools",
        image: "/stacks/git.webp"
    }, {
        id: 10,
        title: "FireFox",
        type: "browser",
        image: "/stacks/firefox.webp"
    }, {
        id: 11,
        title: "Google Chrome",
        type: "browser",
        image: "/stacks/chrome.webp"
    }, {
        id: 12,
        title: "Edge",
        type: "browser",
        image: "/stacks/edge.webp"
    },
]

export const getStaticStackData = async () => {
    return stackData || [];
}