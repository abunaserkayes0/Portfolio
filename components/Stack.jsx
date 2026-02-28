import {
  getStacksByBackend,
  getStacksByBrowser,
  getStacksByFrontend,
  getStacksByTools,
} from "@/libs/data-fetching-stack";
import Image from "next/image";

export default async function Stack() {
  const frontEnds = await getStacksByFrontend();
  const backends = await getStacksByBackend();
  const tools = await getStacksByTools();
  const browsers = await getStacksByBrowser();

  return (
    <>
      <h1 className="text-2xl font-bold my-3">Tech Stacks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6 mt-6">
        <section className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4">Frontend Skills</h2>
          <div className="space-y-4">
            {frontEnds?.map((frontEnd) => (
              <div key={frontEnd.id} className="flex items-center gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                  <Image src={frontEnd.image} width={24} height={24} alt={frontEnd.title} className="object-contain" />
                </div>
                <h3 className="font-semibold text-gray-700">{frontEnd.title}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4">Familiar Skills</h2>
          <div className="space-y-4">
            {backends?.map((backend) => (
              <div key={backend.id} className="flex items-center gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                  <Image src={backend.image} width={24} height={24} alt={backend.title} className="object-contain" />
                </div>
                <h3 className="font-semibold text-gray-700">{backend.title}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4">Tools</h2>
          <div className="space-y-4">
            {tools?.map((tool) => (
              <div key={tool.id} className="flex items-center gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                  <Image src={tool.image} width={24} height={24} alt={tool.title} className="object-contain" />
                </div>
                <h3 className="font-semibold text-gray-700">{tool.title}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4">Browsers</h2>
          <div className="space-y-4">
            {browsers?.map((browser) => (
              <div key={browser.id} className="flex items-center gap-4 group">
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100 group-hover:scale-110 transition-transform">
                  <Image src={browser.image} width={24} height={24} alt={browser.title} className="object-contain" />
                </div>
                <h3 className="font-semibold text-gray-700">{browser.title}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
