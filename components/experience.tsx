import Image from "next/image";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <div className="my-10">
      <div className="flex items-center gap-2.5 mb-6">
        <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Work Experience</h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="p-6 rounded-2xl bg-white/70 dark:bg-[#1a1b1e]/70 border border-gray-100 dark:border-gray-800/80 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div className="flex items-center sm:items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 flex items-center justify-center p-2 shrink-0 shadow-xs">
                  <Image
                    src={exp.logo}
                    width={44}
                    height={44}
                    alt={exp.company}
                    className="object-contain max-h-8 w-auto"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg sm:text-xl text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="font-semibold text-blue-600 dark:text-blue-400 text-sm">
                    {exp.company}
                  </p>
                  <p className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <MapPin size={13} className="text-gray-400 dark:text-gray-500" />
                    {exp.location}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                    exp.isCurrent
                      ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/40"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                  }`}
                >
                  <Calendar size={12} />
                  {exp.period}
                </span>
              </div>
            </div>

            {/* Responsibilities */}
            <ul className="space-y-2 mb-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed list-disc list-inside sm:list-outside sm:ml-5">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="pl-1">
                  {resp}
                </li>
              ))}
            </ul>

            {/* Skills tags */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100 dark:border-gray-800/60">
              {exp.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50/60 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 border border-blue-100/50 dark:border-blue-900/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
