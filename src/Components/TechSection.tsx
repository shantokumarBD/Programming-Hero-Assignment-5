import { use, useState } from "react";
import type { TechType } from "../Types/techType";
import TechCard from "./TechCard";
import StackSidebar from "./StackSidebar";
import { toast } from "react-toastify";

export interface TechProps {
  techPromise: Promise<TechType[]>;
}

const TechSection = ({ techPromise }: TechProps) => {
  const techs = use(techPromise);

  const [stack, setStack] = useState<TechType[]>([])
  // console.log(stack);
  
  // console.log(techs);

  const handleAdd = (tech: TechType): void => {
    // console.log(tech);

    const isExist = stack.find((f)=> f.id === tech.id)

    if(isExist){
      toast.warning("Already in your stack!")
    }else{
      setStack([...stack, tech])
      toast.success(`${tech.name} added to stack`)
    }
    
  }

  const isAlreadyAdded = (id: string):boolean => stack.some(item=> item.id === id)

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
            <TechCard key={tech.id} 
            tech={tech} 
            onAdd={handleAdd}
            isAlreadyAdded={isAlreadyAdded}
            />
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
