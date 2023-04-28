import Title from "../layouts/Title";
import Cards from "./Cards";
import { SiAntdesign } from "react-icons/si";

export default function Features() {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" description="What I do" />
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:gap-6 gap-20">
          <Cards
            title="Business Strategy"
            description="Lorem ipsum dolor sit amet 
          This handy tool helps you create dummy text for all 
          your layout needs. We are gradually adding new 
          functionality and we welcome your suggestions and feedback"
          />
          <Cards
            title="Business Strategy"
            description="Lorem ipsum dolor sit amet 
          This handy tool helps you create dummy text for all 
          your layout needs. We are gradually adding new 
          functionality and we welcome your suggestions and feedback"
            icon={<SiAntdesign />}
          />
          <Cards
            title="Business Strategy"
            description="Lorem ipsum dolor sit amet 
          This handy tool helps you create dummy text for all 
          your layout needs. We are gradually adding new 
          functionality and we welcome your suggestions and feedback"
            icon={<SiAntdesign />}
          />
          <Cards
            title="Business Strategy"
            description="Lorem ipsum dolor sit amet 
          This handy tool helps you create dummy text for all 
          your layout needs. We are gradually adding new 
          functionality and we welcome your suggestions and feedback"
            icon={<SiAntdesign />}
          />
          <Cards
            title="Business Strategy"
            description="Lorem ipsum dolor sit amet 
          This handy tool helps you create dummy text for all 
          your layout needs. We are gradually adding new 
          functionality and we welcome your suggestions and feedback"
            icon={<SiAntdesign />}
          />
          <Cards
            title="Business Strategy"
            description="Lorem ipsum dolor sit amet 
          This handy tool helps you create dummy text for all 
          your layout needs. We are gradually adding new 
          functionality and we welcome your suggestions and feedback"
            icon={<SiAntdesign />}
          />
        </div>
      </div>
    </section>
  );
}
