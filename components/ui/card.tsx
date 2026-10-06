import Image from "next/image";
import Button from "./button";
import { File, Github, Globe } from "lucide-react";
import Link from "next/link";

import { CardProps } from "@/types";

export default function Card({ project }: CardProps) {
  return (
    <>
      {project && (
        <article className="w-full bg-white dark:bg-gray-900/90 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 rounded shadow-sm hover:shadow-md transition-all overflow-hidden group">
          <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
            <Image
              src={project?.siteImage}
              alt={project?.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <section className="p-6">
            <div className="flex items-center justify-between mb-4">
              <Link href={`/projects/${project.id}`}>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {project?.title}
                </h3>
              </Link>
              <Button
                className="flex items-center font-bold gap-3 rounded"
                href={`/projects/${project?.id}/`}
                variant="default"
                size="sm"
              >
                <File size={16} />
              </Button>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 line-clamp-3 leading-relaxed">
              {project?.description}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <Image
                  className="w-8 h-8 rounded-full border border-gray-100 dark:border-gray-700 shadow-sm"
                  src={project?.users?.photo}
                  width={32}
                  height={32}
                  alt={project?.users?.name}
                />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  {project?.users?.name}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {project?.sourceCode && (
                  <Link href={project?.sourceCode} target="_blank" rel="noopener noreferrer" className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <Github size={18} />
                  </Link>
                )}
                {project?.liveSite && (
                  <Link href={project?.liveSite} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                    <Globe size={18} />
                  </Link>
                )}
              </div>
            </div>
          </section>
        </article>
      )}
    </>
  );
}
