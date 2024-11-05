import Image from "next/image";

export default function Experience() {
  return (
    /*     <div className="my-5">
      <h1 className="text-2xl font-bold my-2">Work Experience</h1>
      <div className="flex items-center justify-between sm:flex-col sm:items-start md:flex-row lg:flex-row">
        <section className="flex flex-wrap items-center gap-x-2 sm:sm:gap-y-3">
          <div className="w-auto">
            <Image src="/assets/image.jpeg" width="50" height="50" alt="logo" />
          </div>
          <div>
            <h2 className="font-semibold text-xl">Fronted Developer</h2>
            <p className="text-gray-600 font-bold">
              Gojustitech Solutions Privet Limited. Jan 2024-July 2024
            </p>
          </div>
        </section>
        <section className="space-y-5">
          <Image
            className="border-4 border-blue-300 rounded"
            src="/assets/experience.png"
            width="200"
            height="150"
            alt="Experiences"
          />
        </section>
      </div>
    </div> */
    <div className="my-5">
      <h1 className="text-2xl font-bold my-2">Work Experience</h1>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <section className="flex flex-wrap items-center gap-x-2 gap-y-3">
          <div className="w-auto">
            <Image src="/assets/image.jpeg" width="50" height="50" alt="logo" />
          </div>
          <div>
            <h2 className="font-semibold text-xl">Front-end Developer</h2>
            <p className="text-gray-600 font-bold">
              Gojustitech Solutions Private Limited. Jan 2024 - July 2024
            </p>
          </div>
        </section>
        <section className="mt-4 md:mt-0 space-y-5">
          <Image
            className="border-4 border-blue-300 rounded"
            src="/assets/experience.png"
            width="200"
            height="150"
            alt="Experiences"
          />
        </section>
      </div>
    </div>
  );
}
