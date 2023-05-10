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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-20">
        <ProjectCard
          title="Youtube Clone"
          description="This project is designed using the modern technologies. 
          It is a music library that contains alot of artists. You can search for videos of your choice.
          And beside the playing video, there are list of related videos.
          I used RapidApi to enable me fetch data."
          img="assets/music.png"
          github="https://github.com/Ometere-Godwin/youtube_clone"
          vercel="youtube-clone-mko0qwbeo-ometere-godwin.vercel.app"
        />
        <ProjectCard
          title="ProconnectPay"
          description="This just a an educational site that was built with Reactjs. It is mobile responsive.
          "
          img="assets/black lady.png"
          github="https://github.com/Ometere-Godwin/proconnectwebappcloned"
          vercel="proconnectwebappcloned-91a96qx1l-ometere-godwin.vercel.app"
        />
        <ProjectCard
          title="Hair Studio"
          description="This is just a simple hair studio  project.
          I developed this prroject with HTML, CSS and JavaScript"
          img="assets/barber.jpg"
          github="https://github.com/Ometere-Godwin/hair_studio"
          vercel=""
        />
        {/* <ProjectCard
          title="Youtube Clone"
          description="This handy tool helps 
          you create dummy text for all your 
          layout needs. We are gradually 
          adding new functionality and we 
          welcome your suggestions and feedback"
          img="assets/globe.png"
          github="https://github.com/Ometere-Godwin/youtube_clone"
          vercel=""
        />

        <ProjectCard
          title="Youtube Clone"
          description="This handy tool helps 
          you create dummy text for all your 
          layout needs. We are gradually 
          adding new functionality and we 
          welcome your suggestions and feedback"
          img="assets/bulb.png"
          github="https://github.com/Ometere-Godwin/youtube_clone"
          vercel=""
        />

        <ProjectCard
          title="Youtube Clone"
          description="This handy tool helps 
          you create dummy text for all your 
          layout needs. We are gradually 
          adding new functionality and we 
          welcome your suggestions and feedback"
          img="assets/globe.png"
          github="https://github.com/Ometere-Godwin/youtube_clone"
          vercel=""
        /> */}
      </div>
    </section>
  );
}
