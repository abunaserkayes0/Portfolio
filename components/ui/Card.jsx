import Image from "next/image";
import Button from "./Button";
import { File, Github, Globe } from "lucide-react";
import Link from "next/link";

export default function Card({ project }) {
  return (
    <>
      {project && (
        <article className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image
            src={project?.siteImage}
            alt="SiteImage"
            width="400"
            height="170"
          />
          <section className="p-5">
            <Button
              className="flex items-center font-bold gap-3 my-3"
              href={`/projects/${project?.id}/`}
              variant="default"
              size="lg"
            >
              <File />
            </Button>
            <Link href={`projects/${project.id}`}>
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white hover:underline">
                {project?.title}
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {project?.description}
            </p>
            <div className="flex items-center justify-between my-2">
              <div className="flex gap-3">
                <Image
                  className="w-5 h-5 rounded-full"
                  src={project?.users?.photo}
                  width={15}
                  height={15}
                  alt="UserAvatar"
                />
                <h3 className="font-semibold">{project?.users?.name}</h3>
              </div>
              <div className="flex items-center gap-2">
                {project?.sourceCode && (
                  <Link href={project?.sourceCode}>
                    <Github size={20} />
                  </Link>
                )}
                {project?.liveSite && (
                  <Link href={project?.liveSite}>
                    <Globe size={20} />
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
