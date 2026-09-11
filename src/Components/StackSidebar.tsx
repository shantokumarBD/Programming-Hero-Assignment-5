import type { TechType } from "../Types/techType";

export interface StackSidebarProps {
  stack: TechType[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const StackSidebar = ({ stack, onRemove, onRemoveAll }: StackSidebarProps) => {
  return (
    <div className="border border-base-200 rounded-2xl p-6 bg-base-100 sticky top-24 h-max">
      {/* Heading */}
      <h2 className="text-xl font-bold text-[#0F172A]">Your Stack</h2>
      <p className="text-sm text-[#94A3B8] mb-5">
        {stack?.length || 0} Technology Selected
      </p>
      
      {stack.length === 0 ? (
        <div className="py-10 text-center">
          <p className="text-[#94A3B8] py-5 px-4 rounded-lg border border-[#94A3B8] border-dashed">Your stack is empty.</p>
        </div>
      ) : (
        /* Stack Items List */
        <>
          <div className="flex flex-col gap-3 mb-6">
            {stack.map((tech) => (
              <div
                key={tech.id}
                className="border border-base-200 rounded-lg p-3 flex items-center justify-between bg-white shadow-sm"
              >
                <div className="flex items-center gap-3 min-w-0">
                  {/* Icon */}
                  <div className="w-10 h-10 p-1.5 bg-white border border-base-200 rounded-md shrink-0 flex items-center justify-center">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Texts */}
                  <div className="min-w-0">
                    <h4 className="font-bold text-sm text-[#0F172A] truncate">
                      {tech.name}
                    </h4>
                    <p className="text-xs text-[#64748B] truncate">
                      {tech.category}
                    </p>
                  </div>
                </div>
                {/* Remove Button */}
                <button
                  onClick={() => onRemove(tech.id)}
                  className="btn btn-ghost btn-sm btn-circle text-gray-400 hover:text-red-500 hover:bg-red-50 shrink-0"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          {/* Remove All Button */}
          <button
            onClick={onRemoveAll}
            className="btn btn-outline text-red-500 border-red-200 hover:bg-red-50 hover:border-red-500 hover:text-red-600 w-full rounded-lg"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default StackSidebar;
