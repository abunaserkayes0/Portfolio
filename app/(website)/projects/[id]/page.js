import Button from "@/components/ui/Button";
import { getProjectById } from "@/libs/data-fetching-project";
import { FastForward, Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function page({ params: { id } }) {
    const project = await getProjectById(id);

    return (
        <section className="flex flex-col items-center my-10">
            <div className="border-8 border-gray-100 rounded-lg">
                <Image src={project?.siteImage} alt={project?.title} width={850} height={600} />
            </div>
            <div className="p-10">
                <h1 className="text-3xl font-bold ">{project?.title}</h1>
                <div className="max-w-80 flex items-center justify-between my-2">
                    <div className="flex flex-wrap gap-3 py-4">
                        <Image
                            className="w-5 h-5 rounded-full"
                            src={project?.users?.photo}
                            width={15}
                            height={15}
                            alt="UserAvatar"
                        />
                        <h3 className="font-semibold">{project?.users?.name}</h3>
                        <h4 className="font-semibold">1 min Read</h4>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                        <Link href={project?.sourceCode}>
                            <Github size={20} />
                        </Link>
                        <Link href={project?.liveSite}>
                            <Globe size={20} />
                        </Link>
                    </div>
                </div>
                <div className="flex flex-wrap gap-x-2">
                    {project?.technology?.map((item, index) => <Button key={index} className="font-bold" size="lg" variant="outline">{item}</Button>)}
                </div>
                <h2 className="text-xl font-normal mt-5">{project?.description}</h2>
                <div>
                    <h5 className="font-semibold text-xl uppercase my-2">Features</h5>
                    <p>=======</p>
                    {project?.keyFeatures?.map((keyFeature, index) => {
                        return (
                            <div key={index}>
                                <p className="flex items-center gap-x-2 font-normal" ><FastForward size={15} />{keyFeature}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}