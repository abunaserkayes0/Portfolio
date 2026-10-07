import Button from "@/components/ui/button";
import { getProjectById } from "@/libs/data-fetching-project";
import { FastForward, Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
export default async function page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = await getProjectById(id);
    if (!project) return notFound();

    return (
        <section className="flex flex-col items-center my-10 max-w-4xl mx-auto px-4">
            <div className="border-8 border-gray-100 dark:border-gray-800 rounded overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800">
                <Image src={project?.siteImage} alt={project?.title} width={850} height={600} priority />
            </div>
            <div className="w-full py-8 md:py-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">{project?.title}</h1>
                <div className="flex flex-wrap items-center justify-between my-3 gap-4 border-b border-gray-100 dark:border-gray-800 pb-4">
                    <div className="flex items-center gap-3">
                        <Image
                            className="w-6 h-6 rounded-full border border-gray-200 dark:border-gray-700"
                            src={project?.users?.photo}
                            width={24}
                            height={24}
                            alt="UserAvatar"
                        />
                        <h3 className="font-semibold text-gray-800 dark:text-gray-200">{project?.users?.name}</h3>
                        <span className="text-gray-400">•</span>
                        <h4 className="font-medium text-gray-500 dark:text-gray-400 text-sm">1 min Read</h4>
                    </div>
                    <div className="flex items-center gap-3">
                        {project?.sourceCode && (
                            <Link href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                                <Github size={20} />
                            </Link>
                        )}
                        {project?.liveSite && (
                            <Link href={project.liveSite} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                                <Globe size={20} />
                            </Link>
                        )}
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 my-4">
                    {project?.technology?.map((item, index) => <Button key={index} className="font-bold text-xs" size="sm" variant="outline">{item}</Button>)}
                </div>
                <h2 className="text-lg md:text-xl font-normal mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">{project?.description}</h2>
                <div className="mt-8">
                    <h5 className="font-semibold text-xl uppercase tracking-wider text-gray-900 dark:text-white mb-2">Features</h5>
                    <hr className="my-4 border-gray-200 dark:border-gray-800" />
                    <div className="space-y-3">
                        {project?.keyFeatures?.map((keyFeature, index) => {
                            return (
                                <div key={index}>
                                    <p className="flex items-start gap-x-2.5 font-normal text-gray-700 dark:text-gray-300">
                                        <FastForward size={16} className="text-blue-600 dark:text-blue-400 shrink-0 mt-1" />
                                        <span>{keyFeature}</span>
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}