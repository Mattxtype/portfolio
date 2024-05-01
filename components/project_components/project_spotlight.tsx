import codleague from "../../public/codleague.webp";
import ProjectCard from "./project_card";

const ProjectSpotlight = () => {
  return (
    <section className="bg-gray-100 py-12 text-black">
      <div className="text-2xl pb-1 px-4"> Project Spotlight</div>
      <hr className="pb-5"></hr>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-black">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Project 1 */}
          <ProjectCard image={codleague} title={"Micro-tournament"} description={"Sports betting platform built with a focus on the microservice architecture pattern"} >
            </ProjectCard>
          {/* Project 2 */}
          <ProjectCard image={codleague} title={"Micro-tournament"} description={"Sports betting platform built with a focus on the microservice architecture pattern"} >
            </ProjectCard>

          {/* Project 3 */}
          <ProjectCard image={codleague} title={"Micro-tournament"} description={"Sports betting platform built with a focus on the microservice architecture pattern"} >
            </ProjectCard>
        </div>
      </div>
    </section>
  );
};

export default ProjectSpotlight;
