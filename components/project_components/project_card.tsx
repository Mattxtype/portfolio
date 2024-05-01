import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface projectInfo {
  image: StaticImageData;
  title: string;
  description: string;
}

const ProjectCard = ({ image, title, description }: projectInfo) => {
  return (
    <Link
      href="/"
      className="bg-white rounded-lg shadow-md px-3 py-3 transition-transform duration-300 hover:transform hover:-translate-y-2"
    >
      <div className="text-center text-lg">{title}</div>
      <Image
        src={image}
        width={500}
        height={500}
        alt="project 1"
        className="py-2"
      ></Image>
      <div className="text-left text-sm">{description}</div>
    </Link>
  );
};

export default ProjectCard;
