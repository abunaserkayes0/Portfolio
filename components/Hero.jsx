import {
  CodeXml,
  Facebook,
  FileText,
  Github,
  Linkedin,
  MapPin,
  MonitorSmartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <>
      <section className="flex flex-col md:flex-row md:justify-stretch md:gap-10 items-center justify-stretch">
        <div className="flex w-full mb-4 md:justify-start md:w-auto md:mb-0 items-center ">
          <Image
            className="rounded-full border-8 border-blue-100"
            src="/assets/profile.png"
            alt="profile"
            width="200"
            height="200"
          />
        </div>
        <div className="w-full mb-4 md:justify-start md:w-auto md:mb-0 items-center justify-center">
          <h1 className="text-2xl font-bold">Abu Naser Kayes</h1>
          <div className="flex font-normal items-center gap-3 my-2">
            <span className="text-gray-600">@abunaserkayes</span>
            <span className="flex items-center text-gray-600">
              <MapPin size={15} /> <p>Dhaka,Bangladesh</p>
            </span>
          </div>
          <div className="flex font-semibold items-center gap-3 my-2">
            <span className="flex items-center gap-1 text-gray-600">
              <CodeXml size={15} />
              Front End Developer
            </span>
            <Link href="/projects/abunaserkayes.pdf" target="_blank">
              <span className="flex items-center text-gray-600">
                <FileText size={15} /> <p>View Resume </p>
              </span>
            </Link>
          </div>
          <p className="text-gray-600 mt-4">
            Software Engineer & Programming Enthusiast
          </p>
          <div className="flex flex-wrap gap-2 my-3">
            <div className="">
              <Button
                className="flex items-center justify-center bg-gray-200"
                size="sm"
                variant="pill"
                href="#"
              >
                <MonitorSmartphone className="flex" size={17} /> Web Developer{" "}
              </Button>
            </div>
            <div>
              <Button
                className="flex items-center justify-center  bg-gray-200"
                size="sm"
                variant="pill"
                href="#"
              >
                <CodeXml className="flex" size={17} /> Web Developer{" "}
              </Button>
            </div>
            <div>
              <Button
                className="flex items-center justify-center  bg-gray-200"
                size="sm"
                variant="pill"
                href="#"
              >
                <CodeXml className="flex" size={17} /> React Developer{" "}
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-black rounded-full p-2">
              <Link href="https://www.facebook.com/k0yes" target="_blank">
                {" "}
                <Facebook className="flex " color="#ffffff" size={17} />
              </Link>
            </div>
            <div className="bg-black rounded-full p-2">
              <Link href="https://github.com/abunaserkayes0" target="_blank">
                <Github className="flex " color="#ffffff" size={17} />
              </Link>
            </div>
            <div className="bg-black rounded-full p-2">
              <Link
                href="https://www.linkedin.com/in/abunaserkayes/"
                target="_blank"
              >
                {" "}
                <Linkedin className="flex " color="#ffffff" size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
