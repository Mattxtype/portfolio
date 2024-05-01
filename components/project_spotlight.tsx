import Image from "next/image";
import codleague from "../public/codleague.webp";
import Link from "next/link";

const ProjectSpotlight = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Link href="/"className="bg-white rounded-lg shadow-md px-3 py-3 transition-transform duration-300 hover:transform hover:-translate-y-2">
            <div className="text-center text-lg">Micro-tournament</div>
            <Image
              src={codleague}
              width={500}
              height={500}
              alt="project 1"
            ></Image>
            <p>Micro-tournament</p>
          </Link>
          {/* Project 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:transform hover:-translate-y-2">
            {/* Project content here */}
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:transform hover:-translate-y-2">
            {/* Project content here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSpotlight;
