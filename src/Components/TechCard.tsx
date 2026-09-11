import type { TechType } from "../Types/techType";

export interface TechCardProps {
  tech: TechType;
  onAdd: (tech: TechType)=>void
  isAlreadyAdded:  (id: string) => boolean
}

const TechCard = ({ tech, onAdd, isAlreadyAdded }: TechCardProps) => {
  return (
    <div className={`card border shadow-sm p-6 hover:shadow-md 
      ${isAlreadyAdded(tech.id) ? "border-pink-400 bg-pink-50/30" : "border-base-200 bg-base-100"}
    `}>
      {/* Top Row */}
      <div className="flex justify-between items-start">
        <div className="w-12 h-12 bg-blue-50 p-2 rounded-lg flex items-center justify-center">
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="badge bg-blue-50 text-blue-500 border-none text-xs font-bold px-3 py-3">
          {tech.badge}
        </div>
      </div>
      {/* Title & Description */}
      <h2 className="text-lg font-bold mt-5 text-[#0F172A]">{tech.name}</h2>
      <p className="text-sm text-[#64748B] mt-2  line-clamp-2 min-h-[40px]">
        {tech.description}
      </p>

      {/* Bottom Info */}
      <div className="flex items-center justify-between mt-5 gap-2">
        
        {/* Badges Container */}
        <div className="flex flex-wrap gap-2">
          <div className="badge badge-outline bg-[#F1F5F9] border-gray-300 text-[11px] font-medium text-[#475569] whitespace-nowrap px-2 py-3 rounded">
            {tech.category}
          </div>
          <div className="badge badge-outline border-gray-300 text-[11px] font-medium text-[#475569] whitespace-nowrap px-2 py-3 rounded">
            {tech.difficulty}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 shrink-0">
          <span className="text-orange-400 text-sm">★</span>
          <span className="font-bold text-sm text-[#0f172a]">
            {tech.rating}
          </span>
        </div>
        
      </div>


      {/* Add to Stack Button  */}
      <button 
      onClick={() => onAdd(tech)}
      disabled={isAlreadyAdded(tech.id)}
      className={`btn w-full mt-6 rounded-lg border-none 
        ${isAlreadyAdded(tech.id) ? 
          "text_brand_gradient bg-transparent hover:bg-transparent font-bold"
          :
          "bg-[#0A0F1D] text-white hover:bg-[#1e293b]"
        }
      `}>
        {
          isAlreadyAdded(tech.id) ? "✓ Added to Stack" : "Add to stack"
        }
      </button>
    </div>
  );
};

export default TechCard;
