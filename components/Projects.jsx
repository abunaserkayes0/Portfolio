import { getProjectsData } from "@/utils/data-fetching-project";
import Card from "./ui/Card";

export default async function Projects() {
  const projects = await getProjectsData();
  return (
    <div className="my-10">
      <h1 className="text-2xl font-bold my-3">Features Projects</h1>
      <section className="my-5">
        {projects?.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </section>
    </div>
  );
}