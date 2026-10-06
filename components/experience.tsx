import Image from "next/image";

export default function Experience() {
  return (

    <div className="my-5">
      <h1 className="text-2xl font-bold my-2 text-gray-900 dark:text-white">Work Experience</h1>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <section className="flex flex-wrap items-center gap-x-3 gap-y-3">
          <div className="w-auto rounded-lg overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
            <Image src="/assets/image.jpeg" width="50" height="50" alt="logo" />
          </div>
          <div>
            <h2 className="font-semibold text-xl text-gray-900 dark:text-white">Front-end Developer</h2>
            <p className="text-gray-600 dark:text-gray-400 font-bold">
              Gojustitech Solutions Private Limited. Jan 2024 - July 2024
            </p>
          </div>
        </section>
        <section className="mt-4 md:mt-0 space-y-5">
          <Image
            className="border-4 border-blue-300 dark:border-blue-900/60 rounded shadow-sm"
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
