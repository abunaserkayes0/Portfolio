import Card from "@/components/ui/Card";
import { getProjectsData } from "@/libs/data-fetching-project";

export default async function ProjectsPage() {
    const projects = await getProjectsData();
    return (
        <div className="container mx-auto p-10">
            <h1 className="text-3xl font-bold my-6">All Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects?.map((project) => (
                    <Card key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}