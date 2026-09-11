import { use } from "react";
import type { TechType } from "../Types/techType";
import TechCard from "./TechCard";
import StackSidebar from "./StackSidebar";

export interface TechProps {
  techPromise: Promise<TechType[]>;
}

const TechSection = ({ techPromise }: TechProps) => {
  const techs = use(techPromise);

  // console.log(techs);

  return (
   <div className="max-w-7xl mx-auto py-10 px-4">
      
      {/* Heading */}
      <div className="mb-10 text-center lg:text-left">
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-2 text-[#0f172a]">
          Explore the <span className="text_brand_gradient">Technologies</span>
        </h2>
        <p className="text-[#475569]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* === left  === */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techs.map((tech) => (
            <TechCard key={tech.id} tech={tech} />
          ))}
        </div>
        {/* === right  === */}
        <div className="w-full lg:w-80 sticky top-20">
           <StackSidebar />
        </div>
        
      </div>
      
    </div>
  );
};

export default TechSection;
