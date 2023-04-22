import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px]
       border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="visit my projects and be wowed" description="projects" />
      </div>
      <div className="grid grid-cols-3  gap-20">
        <ProjectCard
          title="Youtube Clone"
          description="This handy tool helps 
          you create dummy text for all your 
          layout needs. We are gradually 
          adding new functionality and we 
          welcome your suggestions and feedback"
          img="assets/globe.png"
        />
        <ProjectCard
          title="Youtube Clone"
          description="This handy tool helps 
          you create dummy text for all your 
          layout needs. We are gradually 
          adding new functionality and we 
          welcome your suggestions and feedback"
          img="assets/globe.png"
        />
        <ProjectCard
          title="Youtube Clone"
          description="This handy tool helps 
          you create dummy text for all your 
          layout needs. We are gradually 
          adding new functionality and we 
          welcome your suggestions and feedback"
          img="assets/bulb.png"
        />
        <ProjectCard
          title="Youtube Clone"
          description="This handy tool helps 
          you create dummy text for all your 
          layout needs. We are gradually 
          adding new functionality and we 
          welcome your suggestions and feedback"
          img="assets/globe.png"
        />

        <ProjectCard
          title="Youtube Clone"
          description="This handy tool helps 
          you create dummy text for all your 
          layout needs. We are gradually 
          adding new functionality and we 
          welcome your suggestions and feedback"
          img="assets/bulb.png"
        />

        <ProjectCard
          title="Youtube Clone"
          description="This handy tool helps 
          you create dummy text for all your 
          layout needs. We are gradually 
          adding new functionality and we 
          welcome your suggestions and feedback"
          img="assets/globe.png"
        />
      </div>
    </section>
  );
}
