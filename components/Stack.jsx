import {
  getStacksByBackend,
  getStacksByBrowser,
  getStacksByFronted,
  getStacksByTools,
} from "@/utils/data-fetching-stack";
import Image from "next/image";

export default async function Stack() {
  const frontEnds = await getStacksByFronted();
  const backends = await getStacksByBackend();
  const tools = await getStacksByTools();
  const browsers = await getStacksByBrowser();

  return (
    <>
      <h1 className="text-2xl font-bold my-3">Tech Stacks</h1>
      <div className="grid grid-cols-4 gap-3">
        <section>
          <h2 className="text-xl font-thin my-3">Fronted Skills</h2>
          {frontEnds?.map((frontEnd) => {
            return (
              <div key={frontEnd.id} className="flex items-center my-3 gap-5">
                <Image
                  src={frontEnd.image}
                  width={30}
                  height={30}
                  alt="image"
                />
                <h2 className="font-semibold">{frontEnd.title}</h2>
              </div>
            );
          })}
        </section>
        <section>
          <h2 className="text-xl font-thin my-3">Familiar Skills</h2>
          {backends?.map((backend) => {
            return (
              <div key={backend.id} className="flex items-center my-3 gap-5">
                <Image src={backend.image} width={30} height={30} alt="image" />
                <h2 className="font-semibold">{backend.title}</h2>
              </div>
            );
          })}
        </section>
        <section>
          <h2 className="text-xl font-thin my-3">Tools</h2>
          {tools?.map((tool) => {
            return (
              <div key={tool.id} className="flex items-center my-3 gap-5">
                <Image src={tool.image} width={30} height={30} alt="image" />
                <h2 className="font-semibold">{tool.title}</h2>
              </div>
            );
          })}
        </section>
        <section>
          <h2 className="text-xl font-thin my-3">Browsers</h2>
          {browsers?.map((browser) => {
            return (
              <div key={browser.id} className="flex items-center my-3 gap-5">
                <Image src={browser.image} width={30} height={30} alt="image" />
                <h2 className="font-semibold">{browser.title}</h2>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}
