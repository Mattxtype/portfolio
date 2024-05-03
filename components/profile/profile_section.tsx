import Image from "next/image";
import profile2 from "../../public/profile2.jpg"

const ProfileSection = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="items-center mb-6 grid grid-rows-3 grid-flow-col gap-4 text-black mx-4">
        <Image
          src={profile2}
          width={210}
          height={100}
          alt="project 1"
          className="row-span-3 py-2 max-h-72"
        ></Image>
        <h2 className="text-2xl font-bold col-span-2">About me</h2>
        <div className="text-gray-700 row-span-2 col-span-2">
        Hi there! I'm a passionate developer who loves building web
        applications. I have experience with various technologies like React,
        Next.js, and Tailwind CSS. I enjoy solving problems and creating elegant
        solutions. When I'm not coding, you can find me hiking in nature or
        reading a good book.
      </div>
      </div>
    </div>
  );
};

export default ProfileSection;
