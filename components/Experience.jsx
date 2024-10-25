import Image from "next/image";

export default function Experience() {
  return (
    <div className=" my-5">
      <h1 className="text-2xl font-bold my-2">Work Experience</h1>
      <div className="flex items-center justify-between ">
        <section className="flex flex-wrap items-center gap-x-2">
          <div>
            <Image src="/assets/image.jpeg" width="50" height="50" alt="logo" />
          </div>
          <div>
            <h2 className="font-semibold text-xl">Fronted Developer</h2>
            <p className="text-gray-600 font-bold">
              Gojustitech Solutions Privet Limited. Jan 2024-July 2024
            </p>
          </div>
        </section>
        <section>
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
