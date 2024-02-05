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
          vercel="https://youtube-clone-black-tau.vercel.app/"
        />
        <ProjectCard
          title="Shopping Mart"
          description="This is an ecommerce site that was built with technologies like Framer Motion, Nextjs Tailwind CSS, TypeSript"
          img="assets/ecommerce.PNG"
          github="https://github.com/Ometere-Godwin/tere.shoppingmart"
          vercel="https://tere-shoppingmart-7ir6.vercel.app/"
        />
        <ProjectCard
          title="Hair Studio"
          description="This is an E-commerce site where you can shop for digital items easily. The technologies used are TypeScript
          TailwindCSS, Shadcn/ui, CMS"
          img="assets/digitalHippo.png"
          github="https://github.com/Ometere-Godwin/digitalhippo"
          vercel="https://digitalhippo-five.vercel.app/"
        />

        <ProjectCard
          title="Car Hub"
          description="This is car hub app that showcases different types of car, the year they were produced, the manufacture
           I used technologies like the headlessui, RapidApI, NextJs,
          TailwindCSS, Typescript. It just showcases how to consume API"
          img="assets/car.jpg"
          github="https://github.com/Ometere-Godwin/nextjs_carhub_showcaseTere"
          vercel="https://nextjs-carhub-showcase-tere-8tiq.vercel.app/"
        />
        <ProjectCard
          title="A Modern Website"
          description="This is modern website built with some modern technologies. It show cases how to use a React Library called clsx
          I also used technologies like Tailwing CSS, ReactJs, React Icons, Framer Motion."
          img="assets/modernwebsite.PNG"
          github="https://github.com/Ometere-Godwin/modernwebsite"
          vercel="https://vercel.com/ometere-godwin/modernwebsite"
        />

        {/* <ProjectCard
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
