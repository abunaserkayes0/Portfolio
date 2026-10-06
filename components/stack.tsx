import { getStackGroups } from "@/libs/data-fetching-stack";
import Image from "next/image";

export default async function Stack() {
  const groups = await getStackGroups();

  return (
    <section id="tech-stack" className="my-14">
      <h2 className="text-xs sm:text-sm font-bold tracking-widest uppercase text-gray-500 dark:text-gray-400 mb-8">
        TECH STACK
      </h2>

      <div className="space-y-6 sm:space-y-7">
        {groups.map((group) => (
          <div
            key={group.category}
            className="flex flex-col sm:flex-row sm:items-center gap-y-3 gap-x-8"
          >
            {/* Category Label */}
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400 w-36 shrink-0">
              {group.label}
            </span>

            {/* Badges / Pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              {group.items.map((item) => (
                <div
                  key={item.id}
                  className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full
                             bg-white/70 dark:bg-[#1a1f29]/90
                             border border-gray-200/90 dark:border-slate-800
                             shadow-xs hover:border-gray-400 dark:hover:border-slate-600
                             hover:scale-[1.02] active:scale-[0.98]
                             transition-all duration-150 cursor-default group"
                >
                  <Image
                    src={item.icon}
                    width={18}
                    height={18}
                    alt={item.title}
                    className="w-4.5 h-4.5 object-contain shrink-0 group-hover:scale-110 transition-transform duration-200"
                    unoptimized
                  />
                  <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200 whitespace-nowrap">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
