import ProfileSection from "@/components/profile/profile_section";
import ProjectSpotlight from "@/components/project_components/project_spotlight";
import { Main } from "next/document";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <ProfileSection></ProfileSection>
      <ProjectSpotlight></ProjectSpotlight>
    </main>
  );
}
