import Image from "next/image";
import Button from "./Button";
import { File, Github, Globe } from "lucide-react";
import Link from "next/link";

export default function Card({ project }) {
  return (
    <>
      {project && (
        <article className="w-full bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
          <div className="relative h-48 sm:h-56 w-full overflow-hidden">
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
                <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  {project?.title}
                </h3>
              </Link>
              <Button
                className="flex items-center font-bold gap-3 rounded-xl"
                href={`/projects/${project?.id}/`}
                variant="default"
                size="sm"
              >
                <File size={16} />
              </Button>
            </div>
            
            <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">
              {project?.description}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-gray-50">
              <div className="flex items-center gap-3">
                <Image
                  className="w-8 h-8 rounded-full border border-gray-100 shadow-sm"
                  src={project?.users?.photo}
                  width={32}
                  height={32}
                  alt={project?.users?.name}
                />
                <span className="text-sm font-semibold text-gray-700">
                  {project?.users?.name}
                </span>
              </div>
              <div className="flex items-center gap-3">
                {project?.sourceCode && (
                  <Link href={project?.sourceCode} className="text-gray-400 hover:text-gray-900 transition-colors">
                    <Github size={18} />
                  </Link>
                )}
                {project?.liveSite && (
                  <Link href={project?.liveSite} className="text-blue-500 hover:text-blue-600 transition-colors">
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
